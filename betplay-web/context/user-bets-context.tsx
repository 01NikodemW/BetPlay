// context/UserBetsContext.tsx

import { UserBet } from "@/types/user-bet";
import { createContext, useContext, ReactNode, useState } from "react";

type UserBetsContextType = {
  stake: number;
  setStake: React.Dispatch<React.SetStateAction<number>>;
  selectedBets: UserBet[];
  setSelectedBets: React.Dispatch<React.SetStateAction<UserBet[]>>;
};

export const UserBetsContext = createContext<UserBetsContextType | undefined>(
  undefined
);

type Props = {
  children: ReactNode;
};

export const UserBetsProvider = ({ children }: Props) => {
  const [selectedBets, setSelectedBets] = useState<UserBet[]>([
    // {
    //   homeTeam: "Arsenal",
    //   awayTeam: "Chelsea",
    //   fixtureId: 1030795,
    //   betType: "Match Winner",
    //   value: "Home",
    //   odd: "1.20",
    // },
    // {
    //   homeTeam: "Arsenal",
    //   awayTeam: "Chelsea",
    //   fixtureId: 1030795,
    //   betType: "Exact Score",
    //   value: "1:1",
    //   odd: "13.00",
    // },
    // {
    //   homeTeam: "Arsenal",
    //   awayTeam: "Chelsea",
    //   fixtureId: 1030795,
    //   betType: "Goals Over/Under",
    //   value: "Under 1.5",
    //   odd: "5.00",
    // },
    // {
    //   homeTeam: "Arsenal",
    //   awayTeam: "Chelsea",
    //   fixtureId: 1030795,
    //   betType: "Both Teams Score",
    //   value: "Yes",
    //   odd: "2.20",
    // },
    // {
    //   homeTeam: "Arsenal",
    //   awayTeam: "Chelsea",
    //   fixtureId: 1030795,
    //   betType: "Goals Over/Under",
    //   value: "Under 1.5",
    //   odd: "5.00",
    // },
    // {
    //   homeTeam: "Arsenal",
    //   awayTeam: "Chelsea",
    //   fixtureId: 1030795,
    //   betType: "Both Teams Score",
    //   value: "Yes",
    //   odd: "2.20",
    // },
    // {
    //   homeTeam: "Arsenal",
    //   awayTeam: "Chelsea",
    //   fixtureId: 1030795,
    //   betType: "Goals Over/Under",
    //   value: "Under 1.5",
    //   odd: "5.00",
    // },
    // {
    //   homeTeam: "Arsenal",
    //   awayTeam: "Chelsea",
    //   fixtureId: 1030795,
    //   betType: "Both Teams Score",
    //   value: "Yes",
    //   odd: "2.20",
    // },
  ]);
  const [stake, setStake] = useState<number>(5);

  // const [selectedBets, setSelectedBets] = useState<UserBet[]>([]);

  return (
    <UserBetsContext.Provider
      value={{
        selectedBets,
        setSelectedBets,
        stake,
        setStake,
      }}
    >
      {children}
    </UserBetsContext.Provider>
  );
};

export const useUserBets = (): UserBetsContextType => {
  const context = useContext(UserBetsContext);
  if (!context) {
    throw new Error("useUserBets must be used within a UserBetsProvider");
  }
  return context;
};
