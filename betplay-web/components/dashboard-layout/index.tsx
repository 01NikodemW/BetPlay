import type { FC, ReactNode } from "react";
import Footer from "./footer";
import Navbar from "./navbar";
import { ContainerWrapper, DashboardLayoutContainer } from "./styles";
import { Box } from "@mui/material";
import MobileBottomBar from "./mobile-bottom-bar";

interface DashboardLayoutProps {
  children?: ReactNode;
}

const DashboardLayout: FC<DashboardLayoutProps> = (props) => {
  const { children } = props;

  return (
    <DashboardLayoutContainer>
      <Box>
        <Navbar />
        <ContainerWrapper maxWidth="xl">{children}</ContainerWrapper>
      </Box>
      <Footer />
      <MobileBottomBar />
    </DashboardLayoutContainer>
  );
};

export default DashboardLayout;
