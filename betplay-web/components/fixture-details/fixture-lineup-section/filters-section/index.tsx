import React, { FC } from "react";
import { FilterBox, StyledTypography } from "./styles";
import { Grid } from "@mui/material";
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
    "Offsides",
    "Shots",
    "Goals",
    "Assists",
    "Saved goals",
    "Passes",
    "Tackles",
    "Yellow cards",
    "Red cards",
    "Fouls",
    "Dribbles",
  ];

  return (
    <Grid container spacing={2}>
      {filters.map((filter, index) => (
        <Grid
          key={filter}
          item
          desktop={4}
          largeDesktop={3}
          style={{
            padding: index < 3 ? "16px 0 0 0" : 0, // Apply padding-top to the first three elements
          }}
          tablet={4}
        >
          <FilterBox
            sx={{
              color: currentFilter === filter ? "red" : "black",
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
