import React, { useEffect, useState } from "react";
import {
  NavbarContainer,
  PlayText,
  BetText,
  LogoWrapper,
  StyledAvatar,
  StyledAvatarIcon,
  StyledIconButton,
  StyledMenuItem,
  StyledMenu,
  MaterialUISwitch,
} from "./styles";
import { useTranslation } from "react-i18next";
import { useSettings } from "@/context/settings-context";

const Navbar = () => {
  const { t } = useTranslation();

  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);

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
    setAccessToken(localStorage.getItem("accessToken"));
  }, []);

  const settings = useSettings();

  return (
    <NavbarContainer>
      <LogoWrapper>
        <BetText variant="h2">Bet</BetText>
        <PlayText variant="h2">Play</PlayText>
      </LogoWrapper>
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
            <StyledMenuItem
              last="true"
              onClick={() => {
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
