import { FC } from "react";

import { BetWithNameButton, BottomTypography, TopTypography } from "./styles";

interface BetWithNameProps {
  value: number | string;
  odd: string;
}

const BetWithName: FC<BetWithNameProps> = ({ value, odd }) => {
  return (
    <BetWithNameButton>
      <TopTypography>{value}</TopTypography>
      <BottomTypography>{odd}</BottomTypography>
    </BetWithNameButton>
  );
};

export default BetWithName;
