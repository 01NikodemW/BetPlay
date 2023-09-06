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
import { exampleBettingSlip } from "@/pages/api/temporary-api-responses";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import CloseIcon from "@mui/icons-material/Close";
import { FC, useState } from "react";
import { BettingSlipBet } from "@/types/bets/betting-slip-bet";
import { BettingSlip as BettingSlipType } from "@/types/bets/betting-slip";
import { getBettingSlipDate } from "@/utils/time";

interface BettingSlipElementProps {
  bettingSlip: BettingSlipType;
}

const BettingSlipElement: FC<BettingSlipElementProps> = ({ bettingSlip }) => {
  const { t } = useTranslation();

  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const handleClick = () => {
    if (exampleBettingSlip.bets.length !== 0) {
      setIsExpanded(!isExpanded);
    }
  };

  const generateValue = (bet: BettingSlipBet) => {
    switch (bet.value) {
      case "Home":
        return bet.homeTeam as string;
      case "Away":
        return bet.awayTeam as string;
      default:
        return bet.value as string;
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
          {exampleBettingSlip.bets.map((bet) => {
            return (
              <BetStatusIcon
                key={bet.id}
                status={bet.status.toLocaleLowerCase()}
              >
                <BetStatusDot status={bet.status.toLocaleLowerCase()} />
              </BetStatusIcon>
            );
          })}
          {exampleBettingSlip.bets.length > 6 && (
            <Typography variant="body2">
              {exampleBettingSlip.bets.length} {t("bets")}
            </Typography>
          )}
        </BetsStatusBox>
        <BettingSlipTypography
          status={exampleBettingSlip.status.toLocaleLowerCase()}
          variant="body2"
        >
          {exampleBettingSlip.status}
        </BettingSlipTypography>
      </TopSectionBox>
      <SingleBetsContainer expanded={isExpanded ? "true" : "false"} id="koko">
        {exampleBettingSlip.bets.map((bet, index) => (
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
                  {t(generateValue(bet))}
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
            {exampleBettingSlip.totalStake}
            {" zł"}
          </Typography>
        </TypographyBox>
        <TypographyBox>
          <Typography>{t("Odd")}</Typography>
          <Typography>{exampleBettingSlip.totalOdds}</Typography>
        </TypographyBox>
        <TypographyBox>
          <Typography variant="h6">{t("Potential prize")}</Typography>
          <Typography variant="h6">
            {exampleBettingSlip.totalOdds *
              exampleBettingSlip.totalStake *
              0.88}
            {" zł"}
          </Typography>
        </TypographyBox>
      </BottomSectionBox>
      <DateBox onClick={handleClick}>
        <Typography variant="caption">
          {/* {getBettingSlipDate(bettingSlip.date)} */}
          {"30.08.2023 - 17:27"}
        </Typography>
      </DateBox>
    </BettingSlipBox>
  );
};

export default BettingSlipElement;
