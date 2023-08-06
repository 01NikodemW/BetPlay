import { useState } from "react";
import AllLeagues from "./all-leagues";
import PopularLeagues from "./popular-leagues";
import { LeftMenuContainer } from "./styles";

const LeagueSection = () => {
  const [selectedLeagueIds, setSelectedLeagueIds] = useState<number[]>([]);

  const handleLeagueClick = (leagueId: number) => () => {
    if (selectedLeagueIds.includes(leagueId)) {
      setSelectedLeagueIds(selectedLeagueIds.filter((id) => id !== leagueId));
    } else {
      setSelectedLeagueIds([...selectedLeagueIds, leagueId]);
    }
  };

  return (
    <LeftMenuContainer>
      <PopularLeagues
        handleLeagueClick={handleLeagueClick}
        selectedLeagueIds={selectedLeagueIds}
      />
      <AllLeagues
        handleLeagueClick={handleLeagueClick}
        selectedLeagueIds={selectedLeagueIds}
      />
    </LeftMenuContainer>
  );
};

export default LeagueSection;
