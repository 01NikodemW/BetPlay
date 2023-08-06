import Fixture from "./fixture";
import LiveFixture from "./live-fixture";
import { CenterSectionContainer } from "./styles";

const CenterSection = () => {
  return (
    <CenterSectionContainer>
      <Fixture />
      <LiveFixture />
    </CenterSectionContainer>
  );
};

export default CenterSection;
