import React from "react";
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

const Navbar = () => {
  const { t } = useTranslation();
  const router = useRouter();

  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  console.log("isauthenticated", isAuthenticated);
  return (
    <NavbarContainer>
      <LogoWrapper>
        <BetText variant="h2">Bet</BetText>
        <PlayText variant="h2">Play</PlayText>
      </LogoWrapper>
      <MenuNavigationWrapper>
        <MenuNavigationItem onClick={() => router.push("/home")}>
          {t("Home")}
        </MenuNavigationItem>
        <MenuNavigationItem onClick={() => router.push("/live")}>
          {t("Live")}
        </MenuNavigationItem>
        <MenuNavigationItem onClick={() => router.push("/bets")}>
          {t("Bets")}
        </MenuNavigationItem>
        <MenuNavigationItem onClick={() => router.push("/my-club")}>
          {t("My club")}
        </MenuNavigationItem>
      </MenuNavigationWrapper>
      <StyledIconButton
        onClick={() => {
          logout();
        }}
      >
        logout
      </StyledIconButton>
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
