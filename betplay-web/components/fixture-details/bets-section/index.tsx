import { FC, useState } from "react";

import { FixtureDetails } from "@/types/fixture-details/fixture-details";
import { BetsContainer, FixtureStatsSectionBox } from "./styles";
import { exampleBets } from "@/pages/api/temporary-api-responses";
import AllMatch from "./all-match";
import { UserBet } from "@/types/user-bet";
import GoalsOverUnder from "./goals-over-under";
import CleanSheetHome from "./clean-sheet-home";
import CleanSheetAway from "./clean-sheet-away";
import BothTeamsScore from "./both-teams-score";
import ExactScore from "./exact-score";

interface BetsSectionProps {
  fixture: FixtureDetails;
}

const BetsSection: FC<BetsSectionProps> = ({ fixture }) => {
  const [selectedBets, setSelectedBets] = useState<UserBet[]>([]);

  return (
    <FixtureStatsSectionBox id="bets-section">
      <BetsContainer>
        <AllMatch
          bets={exampleBets}
          fixture={fixture}
          selectedBets={selectedBets}
          setSelectedBets={setSelectedBets}
        />
        <ExactScore
          bets={exampleBets}
          fixture={fixture}
          selectedBets={selectedBets}
          setSelectedBets={setSelectedBets}
        />
        <CleanSheetHome
          bets={exampleBets}
          fixture={fixture}
          selectedBets={selectedBets}
          setSelectedBets={setSelectedBets}
        />
        <CleanSheetAway
          bets={exampleBets}
          fixture={fixture}
          selectedBets={selectedBets}
          setSelectedBets={setSelectedBets}
        />
        <BothTeamsScore
          bets={exampleBets}
          fixture={fixture}
          selectedBets={selectedBets}
          setSelectedBets={setSelectedBets}
        />
        <GoalsOverUnder
          bets={exampleBets}
          fixture={fixture}
          selectedBets={selectedBets}
          setSelectedBets={setSelectedBets}
        />
      </BetsContainer>
    </FixtureStatsSectionBox>
  );
};

export default BetsSection;
