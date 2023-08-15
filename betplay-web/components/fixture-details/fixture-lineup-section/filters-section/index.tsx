import React, { FC } from "react";
import { FilterBox, StyledTypography } from "./styles";
import { Grid, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";

interface FiltersSectionProps {
  currentFilter: string;
  setCurrentFilter: (filter: string) => void;
}

const FiltersSection: FC<FiltersSectionProps> = ({
  currentFilter,
  setCurrentFilter,
}) => {
  const { t } = useTranslation();
  const filters = [
    "Rating",
    "Shots",
    "Goals",
    "Assists",
    "Passes",
    "Offsides",
    "Dribbles",
    "Tackles",
    "Fouls",
    "Yellow cards",
    "Red cards",
    "Saved goals",
  ];

  const theme = useTheme();

  return (
    <Grid container spacing={2}>
      {filters.map((filter, index) => (
        <Grid
          key={filter}
          item
          desktop={4}
          largeDesktop={3}
          style={{
            padding: index < 3 ? "16px 0 0 0" : 0,
          }}
          tablet={4}
        >
          <FilterBox
            sx={{
              backgroundColor:
                currentFilter === filter
                  ? theme.palette.secondary.main
                  : "white",
            }}
            onClick={() => {
              setCurrentFilter(currentFilter === filter ? "" : filter);
            }}
          >
            <StyledTypography>{t(filter)}</StyledTypography>
          </FilterBox>
        </Grid>
      ))}
    </Grid>
  );
};

export default FiltersSection;
