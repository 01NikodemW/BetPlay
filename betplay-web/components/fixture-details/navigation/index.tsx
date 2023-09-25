import React, { useState, useEffect, FC } from "react";
import { FixtureNavigationBox, StyledIconButton } from "./styles";
import BarChartIcon from "@mui/icons-material/BarChart";
import GroupsIcon from "@mui/icons-material/Groups";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import CasinoIcon from "@mui/icons-material/Casino";
import { FixtureDetails } from "@/types/fixture-details/fixture-details";
import {
  checkIfBeforeFixtureStart,
  checkIfFixtureIsFinished,
} from "@/utils/check-fixture-status";

interface NavigationProps {
  fixture: FixtureDetails;
}

const Navigation: FC<NavigationProps> = ({ fixture }) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const handleButtonClick = (elementId: string) => () => {
    const elementToNavigate = document.getElementById(elementId);
    if (elementToNavigate) {
      const rect = elementToNavigate.getBoundingClientRect();
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const targetPosition = rect.top + scrollTop - 100;
      window.scrollTo({ top: targetPosition, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = checkIfFixtureIsFinished(fixture)
        ? ["event-tree-section", "lineup-section", "stats-section"]
        : checkIfBeforeFixtureStart(fixture)
        ? ["stats-section", "bets-section"]
        : [
            "event-tree-section",
            "lineup-section",
            "stats-section",
            "bets-section",
          ];
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const absoluteElementTop = rect.top + scrollTop;
          const offset = 150;
          if (
            scrollTop + window.innerHeight - offset > absoluteElementTop &&
            scrollTop + offset < absoluteElementTop + rect.height
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [fixture]);

  return (
    <FixtureNavigationBox>
      {!checkIfBeforeFixtureStart(fixture) && (
        <StyledIconButton
          aria-label="event-tree-section"
          visible={activeSection === "event-tree-section" ? "true" : "false"}
          onClick={handleButtonClick("event-tree-section")}
        >
          <SportsSoccerIcon />
        </StyledIconButton>
      )}
      {!checkIfBeforeFixtureStart(fixture) && (
        <StyledIconButton
          aria-label="lineup-section"
          visible={activeSection === "lineup-section" ? "true" : "false"}
          onClick={handleButtonClick("lineup-section")}
        >
          <GroupsIcon />
        </StyledIconButton>
      )}
      <StyledIconButton
        aria-label="stats-section"
        visible={activeSection === "stats-section" ? "true" : "false"}
        onClick={handleButtonClick("stats-section")}
      >
        <BarChartIcon />
      </StyledIconButton>
      {!checkIfFixtureIsFinished(fixture) && (
        <StyledIconButton
          aria-label="bets-section"
          visible={activeSection === "bets-section" ? "true" : "false"}
          onClick={handleButtonClick("bets-section")}
        >
          <CasinoIcon />
        </StyledIconButton>
      )}
    </FixtureNavigationBox>
  );
};

export default Navigation;
