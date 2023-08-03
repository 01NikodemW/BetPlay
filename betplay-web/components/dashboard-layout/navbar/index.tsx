import React from "react";
import {
  NavbarContainer,
  PlayText,
  BetText,
  LogoWrapper,
  MenuNavigationItem,
  MenuNavigationWrapper,
  AvaterWrapper,
} from "./styles";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();
  return (
    <NavbarContainer>
      <LogoWrapper>
        <BetText variant="h2">Bet</BetText>
        <PlayText variant="h2">Play</PlayText>
      </LogoWrapper>
      <MenuNavigationWrapper>
        <MenuNavigationItem variant="h5">{t("Home")}</MenuNavigationItem>
        <MenuNavigationItem variant="h5">{t("Live")}</MenuNavigationItem>
        <MenuNavigationItem variant="h5">{t("Bets")}</MenuNavigationItem>
        <MenuNavigationItem variant="h5">{t("My club")}</MenuNavigationItem>
      </MenuNavigationWrapper>
      <AvaterWrapper>
        <MenuNavigationItem variant="h5">{t("My account")}</MenuNavigationItem>
      </AvaterWrapper>
    </NavbarContainer>
  );
};

export default Navbar;
