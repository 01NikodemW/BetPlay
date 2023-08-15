import { FC } from "react";

import { FixtureDetails } from "@/types/fixture-details/fixture-details";
import { BetHeader, BetsContainer, FixtureStatsSectionBox } from "./styles";
import { useTranslation } from "react-i18next";
import { exampleBets } from "@/pages/api/temporary-api-responses";
import AllMatch from "./all-match";

interface BetsSectionProps {
  fixture: FixtureDetails;
}

const BetsSection: FC<BetsSectionProps> = ({ fixture }) => {
  const { t } = useTranslation();

  return (
    <FixtureStatsSectionBox id="bets-section">
      <BetsContainer>
        <AllMatch bets={exampleBets} />
      </BetsContainer>
    </FixtureStatsSectionBox>
  );
};

export default BetsSection;
