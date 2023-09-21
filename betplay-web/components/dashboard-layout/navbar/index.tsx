import React, { useEffect } from "react";
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
} from "./styles";
import { useAuth0 } from "@auth0/auth0-react";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import { Button } from "@mui/material";

const Navbar = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const tabs = ["home", "live", "bets"];

  const {
    loginWithRedirect,
    logout,
    user,
    isAuthenticated,
    getAccessTokenSilently,
  } = useAuth0();

  useEffect(() => {
    if (user != null) {
      if (isAuthenticated) {
        getAccessTokenSilently().then((x) => {
          localStorage.setItem("accessToken", x);
        });
      }
    }
  }, [user, isAuthenticated, getAccessTokenSilently]);

  console.log("user", user);
  console.log("isAuthenticated", isAuthenticated);

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
      {isAuthenticated && (
        <Button
          onClick={() => {
            logout();
          }}
        >
          logout
        </Button>
      )}
      <StyledAvatar>
        <StyledIconButton
          onClick={() => {
            loginWithRedirect();
          }}
        >
          <StyledAvatarIcon />
        </StyledIconButton>
      </StyledAvatar>
    </NavbarContainer>
  );
};

export default Navbar;
