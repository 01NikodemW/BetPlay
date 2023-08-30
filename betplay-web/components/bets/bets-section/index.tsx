import React, { useState } from "react";
import { BetsSectionContainer, StyledTab, StyledTabs } from "./styles";
import { useTranslation } from "react-i18next";
import BettingSlipsSection from "./betting-slips-section";
import { exampleBettingSlips } from "@/pages/api/temporary-api-responses";
import NoBettingSlipInfo from "./no-betting-slip-info";

const BetsSection = () => {
  const { t } = useTranslation();
  const [tab, setTab] = useState("pending");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setTab(newValue);
  };

  const pendingBettingSlips = exampleBettingSlips.filter(
    (bettingSlip) => bettingSlip.status === "Pending"
  );

  const finishedBettingSlips = exampleBettingSlips.filter(
    (bettingSlip) =>
      bettingSlip.status === "Won" || bettingSlip.status === "Lost"
  );

  return (
    <BetsSectionContainer id="koko">
      <StyledTabs
        indicatorColor="secondary"
        value={tab}
        onChange={handleChange}
      >
        <StyledTab label={t("Pending")} value="pending" />
        <StyledTab label={t("Finished")} value="finished" />
      </StyledTabs>

      {tab === "pending" && (
        <BettingSlipsSection bettingSlips={pendingBettingSlips} />
      )}

      {tab === "pending" && pendingBettingSlips.length === 0 && (
        <NoBettingSlipInfo />
      )}

      {tab === "finished" && (
        <BettingSlipsSection bettingSlips={finishedBettingSlips} />
      )}

      {tab === "finished" && finishedBettingSlips.length === 0 && (
        <NoBettingSlipInfo />
      )}
    </BetsSectionContainer>
  );
};

export default BetsSection;
