/*
 * Smartbike.WebApp.Front
 *
 * (c) 2022 Ejsak Gorup
 */
import { Card, Typography } from "@mui/material";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useTranslation } from "react-i18next";
import { FC } from "react";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface LinearChartProps {
  valuesOne: number[];
  valuesTwo: number[];
  valuesThree: number[];
  datasetOneName: string;
  datasetTwoName: string;
  datasetTwoThree: string;
  labels: string[];
  title: string;
}

const LinearChart: FC<LinearChartProps> = ({
  title,
  labels,
  valuesOne,
  valuesTwo,
  valuesThree,
  datasetOneName,
  datasetTwoName,
  datasetTwoThree,
}) => {
  const { t } = useTranslation();

  const data = {
    labels,
    datasets: [
      {
        label: t(datasetOneName),
        data: valuesOne,
        borderColor: "#1B569F",
        backgroundColor: "#1B569F",
      },
      {
        label: t(datasetTwoName),
        data: valuesTwo,
        borderColor: "#2E7D32",
        backgroundColor: "#2E7D32",
      },
      {
        label: t(datasetTwoThree),
        data: valuesThree,
        borderColor: "red",
        backgroundColor: "red",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
        align: "start" as const,
        labels: {
          pointStyle: "circle",
          usePointStyle: true,
          boxWidth: 4,
          boxHeight: 4,
        },
      },
    },
  };

  return (
    <Card sx={{}}>
      <Typography
        sx={{
          fontSize: "1.375rem",
          marginBottom: "12px",
        }}
      >
        {t(title)}
      </Typography>
      <Line data={data} options={options} />
    </Card>
  );
};

export default LinearChart;
