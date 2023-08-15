import React, { useState, useEffect } from "react";
import { FixtureNavigationBox, StyledIconButton } from "./styles";
import BarChartIcon from "@mui/icons-material/BarChart";
import GroupsIcon from "@mui/icons-material/Groups";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";

const Navigation = () => {
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

  const handleScroll = () => {
    const sections = ["event-tree-section", "lineup-section", "stats-section"];
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

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

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <FixtureNavigationBox>
      <StyledIconButton
        visible={activeSection === "event-tree-section" ? "true" : "false"}
        onClick={handleButtonClick("event-tree-section")}
      >
        <SportsSoccerIcon />
      </StyledIconButton>
      <StyledIconButton
        visible={activeSection === "lineup-section" ? "true" : "false"}
        onClick={handleButtonClick("lineup-section")}
      >
        <GroupsIcon />
      </StyledIconButton>
      <StyledIconButton
        visible={activeSection === "stats-section" ? "true" : "false"}
        onClick={handleButtonClick("stats-section")}
      >
        <BarChartIcon />
      </StyledIconButton>
    </FixtureNavigationBox>
  );
};

export default Navigation;
