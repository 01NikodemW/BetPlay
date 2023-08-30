import { Box } from "@mui/material";
import React, { FC } from "react";
import { BettingSlip } from "@/types/bets/betting-slip";
import BettingSlipElement from "../../betting-slip-element";

interface BettingSlipsSectionProps {
  bettingSlips: BettingSlip[];
}

const BettingSlipsSection: FC<BettingSlipsSectionProps> = ({
  bettingSlips,
}) => {
  console.log("bettingSlips ", bettingSlips);
  return (
    <Box>
      {bettingSlips.map((bettingSlip) => (
        <BettingSlipElement key={bettingSlip.id} bettingSlip={bettingSlip} />
      ))}
    </Box>
  );
};

export default BettingSlipsSection;
