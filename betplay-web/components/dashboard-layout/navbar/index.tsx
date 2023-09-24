import React, { useEffect, useState } from "react";
import {
  NavbarContainer,
  PlayText,
  BetText,
  LogoWrapper,
  MenuNavigationItem,
  MenuNavigationWrapper,
  StyledAvatar,
  StyledAvatarIcon,
  StyledIconButton,
  StyledMenuItem,
  StyledMenu,
} from "./styles";
import { useAuth0 } from "@auth0/auth0-react";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import { useMutation } from "@tanstack/react-query";
import { createUser } from "@/api/user/api";

const Navbar = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const tabs = ["home", "live", "bets"];

  const { loginWithRedirect, logout, isAuthenticated, getAccessTokenSilently } =
    useAuth0();

  const createUserMutation = useMutation((token: string) => createUser(token));

  useEffect(() => {
    if (isAuthenticated) {
      getAccessTokenSilently().then((x) => {
        localStorage.setItem("accessToken", x);
        createUserMutation.mutate(x);
      });
    }
  }, [isAuthenticated, getAccessTokenSilently]);

  const checkCurrentPage = (page: string) => {
    const path = router.pathname;
    return path.includes(page) ? "true" : "false";
  };
  const getValue = (value: string) => {
    switch (value) {
      case "home":
        return "Home";
      case "live":
        return "Live";
      case "bets":
        return "Bets";
      case "my-club":
        return "My club";
      default:
        return "Home";
    }
  };

  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setMenuOpen(true);
  };

  return (
    <NavbarContainer>
      <LogoWrapper>
        <BetText variant="h2">Bet</BetText>
        <PlayText variant="h2">Play</PlayText>
      </LogoWrapper>
      <MenuNavigationWrapper>
        {tabs.map((tab) => (
          <MenuNavigationItem
            key={tab}
            current={checkCurrentPage(tab)}
            onClick={() => router.push(`/${tab}`)}
          >
            {t(getValue(tab))}
          </MenuNavigationItem>
        ))}
      </MenuNavigationWrapper>

      {!isAuthenticated && (
        <StyledAvatar>
          <StyledIconButton
            onClick={() => {
              loginWithRedirect();
            }}
          >
            <StyledAvatarIcon />
          </StyledIconButton>
        </StyledAvatar>
      )}
      {isAuthenticated && (
        <StyledAvatar>
          <StyledIconButton onClick={handleClick}>
            <StyledAvatarIcon />
          </StyledIconButton>
          <StyledMenu
            anchorEl={anchorEl}
            open={menuOpen}
            onClose={() => {
              setMenuOpen(false);
            }}
          >
            <StyledMenuItem last="false">{t("Settings")}</StyledMenuItem>
            <StyledMenuItem
              last="true"
              onClick={() => {
                logout();
                localStorage.removeItem("accessToken");
              }}
            >
              {t("Log out")}
            </StyledMenuItem>
          </StyledMenu>
        </StyledAvatar>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
