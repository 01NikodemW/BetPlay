import React from "react";
import {
  FooterContainer,
  SocialMediaIconsWrapper,
  AllRightsReservedWrapper,
  ContactUsButton,
  StyledIconButton,
  MobileWrapper,
  DesktopWrapper,
} from "./styles";
import { useTranslation } from "react-i18next";
import { Typography } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <FooterContainer>
      <DesktopWrapper>
        <AllRightsReservedWrapper>
          <Typography variant="body1">
            {t("BetPlay | All rights reserved")}
          </Typography>
        </AllRightsReservedWrapper>

        <ContactUsButton>{t("Contact us")}</ContactUsButton>
      </DesktopWrapper>

      <MobileWrapper>
        <AllRightsReservedWrapper>
          <Typography
            sx={{
              textAlign: "center",
            }}
            variant="body1"
          >
            {t("BetPlay | All rights reserved")}
          </Typography>
        </AllRightsReservedWrapper>

        <ContactUsButton>{t("Contact us")}</ContactUsButton>
      </MobileWrapper>

      <SocialMediaIconsWrapper>
        <StyledIconButton aria-label="Instagram">
          <InstagramIcon />
        </StyledIconButton>
        <StyledIconButton aria-label="Facebook">
          <FacebookOutlinedIcon />
        </StyledIconButton>
        <StyledIconButton aria-label="YouTube">
          <YouTubeIcon />
        </StyledIconButton>
        <StyledIconButton aria-label="Twitter">
          <TwitterIcon />
        </StyledIconButton>
        <StyledIconButton aria-label="LinkedIn">
          <LinkedInIcon />
        </StyledIconButton>
      </SocialMediaIconsWrapper>
    </FooterContainer>
  );
};

export default Footer;
