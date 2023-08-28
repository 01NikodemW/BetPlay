import React, { useState } from "react";
import { BetsSectionContainer, StyledTab } from "./styles";
import { Tabs } from "@mui/material";
import { useTranslation } from "react-i18next";
import PendingBets from "./pending-bets";
import FinishedBets from "./finished-bets";

const UserBetsSection = () => {
  const { t } = useTranslation();
  const [tab, setTab] = useState("pending");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setTab(newValue);
  };
  return (
    <BetsSectionContainer id="koko">
      <Tabs indicatorColor="secondary" value={tab} onChange={handleChange}>
        <StyledTab label={t("Pending")} value="pending" />
        <StyledTab label={t("Finished")} value="finished" />
      </Tabs>

      {tab === "pending" && <PendingBets />}

      {tab === "fending" && <FinishedBets />}
    </BetsSectionContainer>
  );
};

export default UserBetsSection;
