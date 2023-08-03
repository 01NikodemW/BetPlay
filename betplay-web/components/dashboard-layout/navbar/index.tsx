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
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";

const Navbar = () => {
  const { t } = useTranslation();
  const router = useRouter();
  return (
    <NavbarContainer>
      <LogoWrapper>
        <BetText variant="h2">Bet</BetText>
        <PlayText variant="h2">Play</PlayText>
      </LogoWrapper>
      <MenuNavigationWrapper>
        <MenuNavigationItem onClick={() => router.push("/")}>
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
      <StyledAvatar>
        <StyledIconButton>
          <StyledAvatarIcon />
        </StyledIconButton>
      </StyledAvatar>
    </NavbarContainer>
  );
};

export default Navbar;
