import { Box } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import BettingSlip from "../../betting-slip";

const PendingBets = () => {
  const { t } = useTranslation();

  return (
    <Box>
      <BettingSlip />
    </Box>
  );
};

export default PendingBets;
