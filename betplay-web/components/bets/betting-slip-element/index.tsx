import {
  SingleBetsContainer,
  BetStatusIcon,
  BetsStatusBox,
  BettingSlipBox,
  BettingSlipTypography,
  BottomSectionBox,
  TopSectionBox,
  TypographyBox,
  SingleBetBox,
  SingleBetTopTypography,
  SingleBetBottomBox,
  OddTypeBox,
  OddValueTypography,
  DateBox,
} from "./styles";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import CloseIcon from "@mui/icons-material/Close";
import { FC, useState } from "react";
import { BettingSlipBet } from "@/types/bets/betting-slip-bet";
import { BettingSlip as BettingSlipType } from "@/types/bets/betting-slip";
import { getDayMonthYear, getHourMinute } from "@/utils/time";
import { betStatus } from "@/pages/api/const-values";

interface BettingSlipElementProps {
  bettingSlip: BettingSlipType;
}

const BettingSlipElement: FC<BettingSlipElementProps> = ({ bettingSlip }) => {
  const { t } = useTranslation();

  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  const generateValue = (bet: BettingSlipBet) => {
    if (/^\d+:\d+$/.test(bet.value)) {
      return bet.value;
    }
    switch (bet.value) {
      case "Home":
        return t(bet.awayTeam as string);
      case "Away":
        return t(bet.awayTeam as string);
      default:
        return t(bet.value as string);
    }
  };

  const generatePrizeText = () => {
    switch (bettingSlip.status) {
      case betStatus.Pending:
        return t("Potential prize");
      case betStatus.Won:
        return t("Prize");
      case betStatus.Lost:
        return t("Prize");
      default:
        return "";
    }
  };
  const BetStatusDot: FC<{ status: string }> = ({ status }) => {
    switch (status) {
      case "won":
        return (
          <EmojiEventsIcon
            sx={{
              fontSize: "12px",
              color: "white",
            }}
          />
        );
      case "lost":
        return (
          <CloseIcon
            sx={{
              fontSize: "12px",
              color: "white",
            }}
          />
        );
      default:
        return (
          <HourglassBottomIcon
            sx={{
              fontSize: "12px",
              color: "white",
            }}
          />
        );
    }
  };

  return (
    <BettingSlipBox>
      <TopSectionBox onClick={handleClick}>
        <BetsStatusBox>
          {bettingSlip.bets.map((bet) => {
            return (
              <BetStatusIcon
                key={bet.id}
                status={bet.status.toLocaleLowerCase()}
              >
                <BetStatusDot status={bet.status.toLocaleLowerCase()} />
              </BetStatusIcon>
            );
          })}
          {bettingSlip.bets.length > 6 && (
            <Typography variant="body2">
              {bettingSlip.bets.length} {t("bets")}
            </Typography>
          )}
        </BetsStatusBox>
        <BettingSlipTypography
          status={bettingSlip.status.toLocaleLowerCase()}
          variant="body2"
        >
          {t(bettingSlip.status)}
        </BettingSlipTypography>
      </TopSectionBox>
      <SingleBetsContainer expanded={isExpanded ? "true" : "false"}>
        {bettingSlip.bets.map((bet, index) => (
          <SingleBetBox key={index} last={"true"}>
            <SingleBetTopTypography variant="h6">
              {bet.homeTeam + " - " + bet.awayTeam}
            </SingleBetTopTypography>
            <SingleBetBottomBox>
              <OddTypeBox>
                <Typography variant="subtitle2">{t(bet.name) + ":"}</Typography>
                <OddValueTypography
                  status={bet.status.toLocaleLowerCase()}
                  variant="subtitle2"
                >
                  {generateValue(bet)}
                </OddValueTypography>
              </OddTypeBox>
              <Typography variant="subtitle2">{bet.odd}</Typography>
            </SingleBetBottomBox>
          </SingleBetBox>
        ))}
      </SingleBetsContainer>
      <BottomSectionBox expanded={isExpanded.toString()} onClick={handleClick}>
        <TypographyBox>
          <Typography>{t("Stake")}</Typography>
          <Typography>
            {bettingSlip.totalStake}
            {" zł"}
          </Typography>
        </TypographyBox>
        <TypographyBox>
          <Typography>{t("Odd")}</Typography>
          <Typography>{bettingSlip.totalOdds}</Typography>
        </TypographyBox>
        <TypographyBox>
          <Typography variant="h6">{generatePrizeText()}</Typography>
          <Typography variant="h6">
            {bettingSlip.status === betStatus.Lost
              ? 0
              : bettingSlip.totalOdds * bettingSlip.totalStake * 0.88}
            {" zł"}
          </Typography>
        </TypographyBox>
      </BottomSectionBox>
      <DateBox onClick={handleClick}>
        <Typography variant="caption">
          {getDayMonthYear(bettingSlip.date) +
            " - " +
            getHourMinute(bettingSlip.date)}
        </Typography>
      </DateBox>
    </BettingSlipBox>
  );
};

export default BettingSlipElement;
