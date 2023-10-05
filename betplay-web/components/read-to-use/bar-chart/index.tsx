/*
 * Smartbike.WebApp.Front
 *
 * (c) 2022 Ejsak Gorup
 */
import { Card, Theme, Typography, useMediaQuery } from "@mui/material";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from "chart.js";
import { useTranslation } from "react-i18next";
import { FC } from "react";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

interface BarChartProps {
  values: number[];
  labels: string[];
  ticks?: {
    stepSize: number;
    max: number;
    callback?: (value: any) => string;
  };
  title: string;
}

const BarChart: FC<BarChartProps> = ({ ticks, labels, values, title }) => {
  const { t } = useTranslation();
  const data = {
    labels: labels,
    datasets: [
      {
        label: "",
        data: values,
        backgroundColor: "#1B569F",
        barThickness: 20,
      },
    ],
  };

  const isMediumScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: ticks,
        grid: {
          color: "#fff",
        },
      },
      x: {
        grid: {
          color: "#fff",
        },
      },
    },
    legend: {
      display: false,
    },
  };

  return (
    <Card
      sx={{
        padding: "24px",
        marginBottom: "48px",
        width: isMediumScreen ? "100%" : "80%",
      }}
    >
      <Typography
        sx={{
          fontSize: "1.375rem",
          marginBottom: "12px",
        }}
      >
        {t(title)}
      </Typography>
      <Bar data={data} options={options} />
    </Card>
  );
};

export default BarChart;
