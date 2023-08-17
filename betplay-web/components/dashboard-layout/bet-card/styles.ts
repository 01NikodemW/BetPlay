import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Card,
} from "@mui/material";
import { styled } from "@mui/system";

export const BetContainer = styled(Card)<{ expanded: string }>(
  ({ theme, expanded }) => ({
    height: expanded === "true" ? "500px" : "150px",
    transition: "height 0.3s ease-in-out",
    backgroundColor: theme.palette.background.paper,
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: "20px",
    paddingRight: "20px",
    position: "sticky",
    width: "22%",
    top: 120,
    marginTop: "124px",
    borderRadius: "16px",
  })
);

export const StyledAccordion = styled(Accordion)({
  flexDirection: "column-reverse",
});

export const StyledAccordionSummary = styled(AccordionSummary)({
  alignSelf: "flex-end",
});

export const StyledAccordionDetails = styled(AccordionDetails)({});
