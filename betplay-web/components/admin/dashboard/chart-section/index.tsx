import { ContainerBox, StyledBox, StyledFormControl } from "./styles";
import { getAllBettingSlips } from "@/api/bets/api";
import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "@/api/queryKeys";
import { InputLabel, MenuItem, Select } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { BettingSlipWithoutBets } from "@/types/bets/betting-slip";
import dayjs from "dayjs";
import LinearChart from "@/components/read-to-use/linear-chart";
import LoadingInfo from "@/components/read-to-use/loading-info";

const getBetsData = (bettingSlips: BettingSlipWithoutBets[], date: any) => {
  let filteredBets = bettingSlips.filter((bettingSlip) =>
    dayjs(bettingSlip.date).isSame(date, "day")
  );

  let results = {
    date: date.format("DD-MM-YYYY"),
    all: filteredBets.length,
    won: filteredBets.filter((bet) => bet.status === 1).length,
    lost: filteredBets.filter((bet) => bet.status === 2).length,
    pending: filteredBets.filter((bet) => bet.status === 0).length,
  };

  return results;
};

const getBetsDataMonthly = (
  bettingSlips: BettingSlipWithoutBets[],
  month: any
) => {
  let filteredBets = bettingSlips.filter((bettingSlip) =>
    dayjs(bettingSlip.date).isSame(month, "month")
  );

  let results = {
    date: month.format("MM-YYYY"),
    all: filteredBets.length,
    won: filteredBets.filter((bet) => bet.status === 1).length,
    lost: filteredBets.filter((bet) => bet.status === 2).length,
    pending: filteredBets.filter((bet) => bet.status === 0).length,
  };

  return results;
};

const generateWeeklyReport = (bettingSlips: BettingSlipWithoutBets[]) => {
  let report = [];
  let today = dayjs();

  for (let i = 6; i >= 0; i--) {
    let currentDate = today.subtract(i, "day");
    report.push(getBetsData(bettingSlips, currentDate));
  }

  return report;
};

const generateMonthlyReport = (bettingSlips: BettingSlipWithoutBets[]) => {
  let report = [];
  let today = dayjs();

  for (let i = 30; i >= 0; i--) {
    let currentDate = today.subtract(i, "day");
    report.push(getBetsData(bettingSlips, currentDate));
  }

  return report;
};

const generateYearlyReport = (bettingSlips: BettingSlipWithoutBets[]) => {
  let report = [];
  let currentMonth = dayjs();

  for (let i = 11; i >= 0; i--) {
    report.unshift(getBetsDataMonthly(bettingSlips, currentMonth));
    currentMonth = currentMonth.subtract(1, "month");
  }

  return report;
};

const ChartSection = () => {
  const { t } = useTranslation();
  const [period, setPeriod] = useState<number>(0);

  const { data: bettingSlips, isFetching: isBettingSlipsFetching } = useQuery({
    queryKey: [queryKeys.getAllBettingSlips],
    queryFn: () => getAllBettingSlips(),
  });

  const generateData = () => {
    switch (period) {
      case 0:
        return generateWeeklyReport(bettingSlips.bettingSlips);
      case 1:
        return generateMonthlyReport(bettingSlips.bettingSlips);
      case 2:
        return generateYearlyReport(bettingSlips.bettingSlips);
      default:
        return generateMonthlyReport(bettingSlips.bettingSlips);
    }
  };

  const generateTitle = () => {
    switch (period) {
      case 0:
        return t("Betting slips in last week");
      case 1:
        return t("Betting slips in last month");
      case 2:
        return t("Betting slips in last year");
      default:
        return t("Betting slips in last week");
    }
  };

  if (isBettingSlipsFetching) return <LoadingInfo />;

  const data = generateData();

  return (
    <ContainerBox>
      <StyledBox>
        <StyledFormControl>
          <InputLabel>{t("Period")}</InputLabel>
          <Select
            label={t("Period")}
            value={period}
            onChange={(event: any) => {
              setPeriod(event.target.value);
            }}
          >
            <MenuItem value={0}>{t("Last week")}</MenuItem>
            <MenuItem value={1}>{t("Last month")}</MenuItem>
            <MenuItem value={2}>{t("Last year")}</MenuItem>
          </Select>
        </StyledFormControl>
      </StyledBox>
      <LinearChart
        datasetFourName={"Pending"}
        datasetOneName={"All"}
        datasetThreeName={"Lost"}
        datasetTwoName={"Won"}
        labels={data.map((item) => item.date)}
        title={generateTitle()}
        valuesFour={data.map((item) => item.pending)}
        valuesOne={data.map((item) => item.all)}
        valuesThree={data.map((item) => item.lost)}
        valuesTwo={data.map((item) => item.won)}
      />
    </ContainerBox>
  );
};

export default ChartSection;
