import React, { useState } from "react";
import { BetsSectionContainer, StyledTab, StyledTabs } from "./styles";
import { useTranslation } from "react-i18next";
import BettingSlipsSection from "./betting-slips-section";
import NoBettingSlipInfo from "./no-betting-slip-info";
import { queryKeys } from "@/api/queryKeys";
import { useQuery } from "@tanstack/react-query";
import { getUserData } from "@/api/user/api";
import LoadingInfo from "@/components/read-to-use/loading-info";

const tabValue = {
  pending: "pending",
  finished: "finished",
};

const BetsSection = () => {
  const { t } = useTranslation();
  const [tab, setTab] = useState("pending");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setTab(newValue);
  };

  //TODO: Remove this when the API is ready
  const statusToString = (status: number): string => {
    switch (status) {
      case 0:
        return "Pending";
      case 1:
        return "Won";
      case 2:
        return "Lost";
      default:
        return "";
    }
  };

  const transformBettingSlip = (bettingSlip: any) => {
    const transformedBets = bettingSlip.bets.map((bet: any) => ({
      ...bet,
      status: statusToString(bet.status),
    }));
    return {
      ...bettingSlip,
      status: statusToString(bettingSlip.status),
      bets: transformedBets,
    };
  };

  const getPendingBets = () => {
    return userData.bettingSlips
      .filter((bettingSlip: any) => bettingSlip.status === 0)
      .map(transformBettingSlip);
  };

  const getFinishedBets = () => {
    return userData.bettingSlips
      .filter(
        (bettingSlip: any) =>
          bettingSlip.status === 1 || bettingSlip.status === 2
      )
      .map(transformBettingSlip);
  };

  const { data: userData, isFetching: isUserDataFetching } = useQuery({
    queryKey: [queryKeys.getUsersData],
    queryFn: () => getUserData(),
  });

  const renderBettingInfoBasedOnTab = () => {
    const betsToDisplay =
      tab === tabValue.pending ? getPendingBets() : getFinishedBets();

    if (betsToDisplay.length === 0) {
      return <NoBettingSlipInfo />;
    }
    return <BettingSlipsSection bettingSlips={betsToDisplay} />;
  };

  if (isUserDataFetching) return <LoadingInfo />;

  return (
    <BetsSectionContainer id="koko">
      <StyledTabs
        indicatorColor="secondary"
        value={tab}
        onChange={handleChange}
      >
        <StyledTab label={t("Pending")} value={tabValue.pending} />
        <StyledTab label={t("Finished")} value={tabValue.finished} />
      </StyledTabs>

      {isUserDataFetching ? <LoadingInfo /> : renderBettingInfoBasedOnTab()}
    </BetsSectionContainer>
  );
};

export default BetsSection;
