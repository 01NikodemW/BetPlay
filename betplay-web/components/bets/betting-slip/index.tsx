import {
  BetStatusIcon,
  BetsStatusBox,
  BettingSlipBox,
  BettingSlipTypography,
  BottomSectionBox,
  TopSectionBox,
  TypographyBox,
} from "./styles";
import { exampleBettingSlip } from "@/pages/api/temporary-api-responses";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const BettingSlip = () => {
  const { t } = useTranslation();
  return (
    <BettingSlipBox>
      <TopSectionBox>
        <BetsStatusBox>
          {exampleBettingSlip.bets.map((bet) => {
            return (
              <BetStatusIcon
                key={bet.id}
                status={bet.status.toLocaleLowerCase()}
              />
            );
          })}
        </BetsStatusBox>
        <BettingSlipTypography
          status={exampleBettingSlip.status.toLocaleLowerCase()}
          variant="body2"
        >
          {exampleBettingSlip.status}
        </BettingSlipTypography>
      </TopSectionBox>
      <BottomSectionBox>
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
          <Typography>{t("Potential prize")}</Typography>
          <Typography>
            {exampleBettingSlip.totalOdds *
              exampleBettingSlip.totalStake *
              0.88}
            {" zł"}
          </Typography>
        </TypographyBox>
        <TypographyBox>
          <Typography>{t("Potential prize")}</Typography>
          <Typography>
            {exampleBettingSlip.totalOdds *
              exampleBettingSlip.totalStake *
              0.88}
            {" zł"}
          </Typography>
        </TypographyBox>
      </BottomSectionBox>
    </BettingSlipBox>
  );
};

export default BettingSlip;
