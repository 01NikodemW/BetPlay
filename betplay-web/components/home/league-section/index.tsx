import AllLeagues from "./all-leagues";
import PopularLeagues from "./popular-leagues";
import { LeftMenuContainer } from "./styles";

const LeagueSection = () => {
  return (
    <LeftMenuContainer>
      <PopularLeagues />
      <AllLeagues />
    </LeftMenuContainer>
  );
};

export default LeagueSection;
