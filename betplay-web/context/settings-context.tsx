// context/UserBetsContext.tsx

import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";

type SettingsContextType = {
  themeMode: "light" | "dark";
  setThemeMode: React.Dispatch<React.SetStateAction<"light" | "dark">>;
};

export const SettingsContext = createContext<SettingsContextType | undefined>(
  undefined
);

type Props = {
  children: ReactNode;
};

export const SettingsProvider = ({ children }: Props) => {
  const [themeMode, setThemeMode] = useState<"light" | "dark">("light");

  useEffect(() => {
    const storedSettings = JSON.parse(localStorage.getItem("settings") || "{}");
    const localThemeMode = storedSettings.themeMode || "light";
    setThemeMode(localThemeMode);
  }, []);

  return (
    <SettingsContext.Provider
      value={{
        themeMode,
        setThemeMode,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = (): SettingsContextType => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error("useUserBets must be used within a UserBetsProvider");
  }
  return context;
};

export const SettingsConsumer: React.FC<{
  children: (value: SettingsContextType) => ReactNode;
}> = ({ children }) => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error("SettingsConsumer must be used within a SettingsProvider");
  }
  return children(context);
};
