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
  MaterialUISwitch,
} from "./styles";
import { useAuth0 } from "@auth0/auth0-react";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "@tanstack/react-query";
import { createUser } from "@/api/user/api";
import { useSettings } from "@/context/settings-context";
import { queryKeys } from "@/api/queryKeys";
import { verifyUserBets } from "@/api/bets/api";

const Navbar = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const { loginWithRedirect, logout, isAuthenticated, getAccessTokenSilently } =
    useAuth0();
  const tabs = ["home", "live", "bets"];
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);

  const createUserMutation = useMutation((token: string) => createUser(token));

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
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setMenuOpen(true);
  };

  const handleSwitchChange = () => {
    const newTheme = settings.themeMode === "dark" ? "light" : "dark";
    const currentSettings = JSON.parse(
      localStorage.getItem("settings") || "{}"
    );
    const updatedSettings = {
      ...currentSettings,
      themeMode: newTheme,
    };
    localStorage.setItem("settings", JSON.stringify(updatedSettings));
    settings.setThemeMode(newTheme);
  };

  useEffect(() => {
    if (isAuthenticated) {
      getAccessTokenSilently().then((x) => {
        localStorage.setItem("accessToken", x);
        setAccessToken(x);
        createUserMutation.mutate(x);
      });
    }
  }, [isAuthenticated, getAccessTokenSilently]);

  useEffect(() => {
    setAccessToken(localStorage.getItem("accessToken"));
  }, []);

  useQuery({
    queryKey: [queryKeys.verifyUserBets],
    queryFn: () => verifyUserBets(),
    enabled: Boolean(accessToken),
    refetchInterval: 300000,
  });

  const settings = useSettings();

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

      {!accessToken && (
        <StyledAvatar>
          <StyledIconButton
            aria-label="AvatarLoggedOut"
            onClick={() => {
              loginWithRedirect();
            }}
          >
            <StyledAvatarIcon />
          </StyledIconButton>
        </StyledAvatar>
      )}
      {accessToken && (
        <StyledAvatar>
          <StyledIconButton aria-label="AvatarLoggedIn" onClick={handleClick}>
            <StyledAvatarIcon />
          </StyledIconButton>
          <StyledMenu
            anchorEl={anchorEl}
            open={menuOpen}
            onClose={() => {
              setMenuOpen(false);
            }}
          >
            <StyledMenuItem
              last="false"
              sx={{
                display: "flex",
                justifyContent: "center",
                padding: "4px 20px",
              }}
            >
              <MaterialUISwitch
                checked={settings.themeMode === "dark"}
                onChange={handleSwitchChange}
              />
            </StyledMenuItem>
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
