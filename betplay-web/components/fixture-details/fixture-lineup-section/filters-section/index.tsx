import React, { FC } from "react";
import { FilterBox, StyledGrid, StyledTypography } from "./styles";
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
        <StyledGrid
          key={filter}
          item
          desktop={4}
          index={index.toString()}
          largeDesktop={3}
          phone={3}
          smallTablet={3}
          tablet={3}
          xs={4}
        >
          <FilterBox
            sx={{
              backgroundColor:
                currentFilter === filter
                  ? theme.palette.secondary.main
                  : theme.palette.background.paper,
            }}
            onClick={() => {
              setCurrentFilter(currentFilter === filter ? "" : filter);
            }}
          >
            <StyledTypography
              selected={currentFilter === filter ? "true" : "false"}
            >
              {t(filter)}
            </StyledTypography>
          </FilterBox>
        </StyledGrid>
      ))}
    </Grid>
  );
};

export default FiltersSection;
