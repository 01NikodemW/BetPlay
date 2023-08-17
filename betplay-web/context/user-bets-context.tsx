// context/UserBetsContext.tsx

import { UserBet } from "@/types/user-bet";
import { createContext, useContext, ReactNode, useState } from "react";

type UserBetsContextType = {
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
  // const [selectedBets, setSelectedBets] = useState<UserBet[]>([
  //   {
  //     fixtureId: 1,
  //     betType: "Bet 1",
  //     value: "200",
  //     odd: "2",
  //   },
  // ]);

  const [selectedBets, setSelectedBets] = useState<UserBet[]>([
    {
      fixtureId: 1,
      betType: "Bet 1",
      value: "200",
      odd: "2",
    },
  ]);

  return (
    <UserBetsContext.Provider value={{ selectedBets, setSelectedBets }}>
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
