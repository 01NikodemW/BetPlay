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
  const [selectedBets, setSelectedBets] = useState<UserBet[]>([]);
  const [stake, setStake] = useState<number>(5);

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
