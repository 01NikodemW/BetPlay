import { FC } from "react";

import { FixtureDetails } from "@/types/fixture-details/fixture-details";
import { BetsContainer, EmptyCard, FixtureStatsSectionBox } from "./styles";
import AllMatch from "./all-match";
import GoalsOverUnder from "./goals-over-under";
import CleanSheetHome from "./clean-sheet-home";
import CleanSheetAway from "./clean-sheet-away";
import BothTeamsScore from "./both-teams-score";
import ExactScore from "./exact-score";
import { useUserBets } from "@/context/user-bets-context";
import BetCard from "@/components/read-to-use/bet-card";
import { getBetsByFixtureId } from "@/api/bets/api";
import { queryKeys } from "@/api/queryKeys";
import { useQuery } from "@tanstack/react-query";
import LoadingInfo from "@/components/read-to-use/loading-info";

interface BetsSectionProps {
  fixture: FixtureDetails;
}

const BetsSection: FC<BetsSectionProps> = ({ fixture }) => {
  const { selectedBets, setSelectedBets } = useUserBets();

  const { data, isFetching: isBetsFetching } = useQuery({
    queryKey: [queryKeys.getBetsByFixtureId, fixture.fixture.id],
    queryFn: () =>
      getBetsByFixtureId({
        fixtureId: fixture.fixture.id,
      }),
  });

  if (isBetsFetching) return <LoadingInfo />;

  return (
    <FixtureStatsSectionBox id="bets-section">
      <EmptyCard />
      <BetsContainer>
        <AllMatch
          bets={data.bets}
          fixture={fixture}
          selectedBets={selectedBets}
          setSelectedBets={setSelectedBets}
        />
        <ExactScore
          bets={data.bets}
          fixture={fixture}
          selectedBets={selectedBets}
          setSelectedBets={setSelectedBets}
        />
        <CleanSheetHome
          bets={data.bets}
          fixture={fixture}
          selectedBets={selectedBets}
          setSelectedBets={setSelectedBets}
        />
        <CleanSheetAway
          bets={data.bets}
          fixture={fixture}
          selectedBets={selectedBets}
          setSelectedBets={setSelectedBets}
        />
        <BothTeamsScore
          bets={data.bets}
          fixture={fixture}
          selectedBets={selectedBets}
          setSelectedBets={setSelectedBets}
        />
        <GoalsOverUnder
          bets={data.bets}
          fixture={fixture}
          selectedBets={selectedBets}
          setSelectedBets={setSelectedBets}
        />
      </BetsContainer>
      <BetCard mainPage={false} />
    </FixtureStatsSectionBox>
  );
};

export default BetsSection;
