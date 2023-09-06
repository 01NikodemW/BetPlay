import React from "react";
import { MobileBottomBarContainer, MenuNavigationItem } from "./styles";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";

const MobileBottomBar = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const tabs = ["home", "live", "bets"];

  const checkCurrentPage = (page: string) => {
    const path = router.pathname;
    return path.includes(page) ? "true" : "false";
  };
  const getValue = (value: string) => {
    switch (value) {
      case "home":
        return "Home";
      case "live":
        return "Live";
      case "bets":
        return "Bets";
      case "my-club":
        return "My club";
      default:
        return "Home";
    }
  };
  return (
    <MobileBottomBarContainer>
      {tabs.map((tab) => (
        <MenuNavigationItem
          key={tab}
          current={checkCurrentPage(tab)}
          onClick={() => router.push(`/${tab}`)}
        >
          {t(getValue(tab))}
        </MenuNavigationItem>
      ))}
    </MobileBottomBarContainer>
  );
};

export default MobileBottomBar;
