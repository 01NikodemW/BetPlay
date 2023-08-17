import React, { useState } from "react";
import { BetContainer } from "./styles";
import { useUserBets } from "@/context/user-bets-context";
import { UserBet } from "@/types/user-bet";

const BetCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { selectedBets, setSelectedBets } = useUserBets();

  console.log("selectedBets", selectedBets);

  return (
    <BetContainer
      expanded={isExpanded ? "true" : "false"}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      w
    </BetContainer>
  );
};

export default BetCard;
