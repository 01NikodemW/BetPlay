import React, { useState } from "react";
import { BetsSectionContainer, StyledTab, StyledTabs } from "./styles";
import { useTranslation } from "react-i18next";
import BettingSlipsSection from "./betting-slips-section";
import { exampleBettingSlips } from "@/pages/api/temporary-api-responses";
import NoBettingSlipInfo from "./no-betting-slip-info";
import { queryKeys } from "@/api/queryKeys";
import { useQuery } from "@tanstack/react-query";
import { getUserData } from "@/api/user/api";
import { BettingSlip } from "@/types/bets/betting-slip";
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

  // const pendingBettingSlips = exampleBettingSlips.filter(
  //   (bettingSlip) => bettingSlip.status === "Pending"
  // );

  // const finishedBettingSlips = exampleBettingSlips.filter(
  //   (bettingSlip) =>
  //     bettingSlip.status === "Won" || bettingSlip.status === "Lost"
  // );

  const statusToString = (status: number): string => {
    switch (status) {
      case 0:
        return "Pending";
      case 1:
        return "Won";
      case 2:
        return "Lost";
      default:
        return ""; // Or throw an error or any default value you prefer
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
      .filter((bettingSlip: any) => bettingSlip.status === 1 || bettingSlip.status === 2)
      .map(transformBettingSlip);
  };
  

  const { data: userData, isFetching: isUserDataFetching } = useQuery({
    queryKey: [queryKeys.getUsersData],
    queryFn: () => getUserData(),
  });

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

      {isUserDataFetching && <LoadingInfo />}

      {!isUserDataFetching && tab === tabValue.pending && (
        <BettingSlipsSection bettingSlips={getPendingBets()} />
      )}

      {!isUserDataFetching &&
        tab === tabValue.pending &&
        getPendingBets().length === 0 && <NoBettingSlipInfo />}

      {!isUserDataFetching && tab === tabValue.finished && (
        <BettingSlipsSection bettingSlips={getFinishedBets()} />
      )}

      {!isUserDataFetching &&
        tab === tabValue.finished &&
        getFinishedBets().length === 0 && <NoBettingSlipInfo />}
    </BetsSectionContainer>
  );
};

export default BetsSection;
