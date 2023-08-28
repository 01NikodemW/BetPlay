import { Typography } from "@mui/material";
import { BetBottomBox, BetBox, TopTypography } from "./styles";

const SingleBet = () => {
  const generateValue = (bet: UserBet) => {
    switch (bet.value) {
      case "Home":
        return bet.homeTeam as string;
      case "Away":
        return bet.awayTeam as string;
      default:
        return bet.value as string;
    }
  };
  return (
    <BetBox key={index} last={index === betCount - 1 ? "true" : "false"}>
      <TopTypography variant="h6">
        {bet.homeTeam + " - " + bet.awayTeam}
      </TopTypography>
      <BetBottomBox>
        <Typography variant="subtitle2">{t(bet.betType)}</Typography>
        <Typography variant="subtitle2">
          {isMatchResult(bet.value as string)
            ? bet.value
            : t(generateValue(bet))}
        </Typography>
      </BetBottomBox>
    </BetBox>
  );
};

export default SingleBet;
