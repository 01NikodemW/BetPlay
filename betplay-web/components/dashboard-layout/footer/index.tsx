import React from "react";
import {
  FooterContainer,
  SocialMediaIconsWrapper,
  AllRightsReservedWrapper,
  ContactUsButton,
  StyledIconButton,
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
      <AllRightsReservedWrapper>
        <Typography variant="body1">
          {t("BetPlay | All rights reserved")}
        </Typography>
      </AllRightsReservedWrapper>

      <ContactUsButton>{t("Contact us")}</ContactUsButton>

      <SocialMediaIconsWrapper>
        <StyledIconButton>
          <InstagramIcon />
        </StyledIconButton>
        <StyledIconButton>
          <FacebookOutlinedIcon />
        </StyledIconButton>
        <StyledIconButton>
          <YouTubeIcon />
        </StyledIconButton>
        <StyledIconButton>
          <TwitterIcon />
        </StyledIconButton>
        <StyledIconButton>
          <LinkedInIcon />
        </StyledIconButton>
      </SocialMediaIconsWrapper>
    </FooterContainer>
  );
};

export default Footer;
