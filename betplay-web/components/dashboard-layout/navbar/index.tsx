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
  const tabs = ["home", "live", "bets", "my-club"];

  const { loginWithRedirect } = useAuth0();

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
      {/* <StyledIconButton
        onClick={() => {
          logout();
        }}
      >
        logout
      </StyledIconButton> */}
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
