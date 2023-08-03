import type { FC, ReactNode } from "react";
import Footer from "./footer";
import Navbar from "./navbar";
import { ContainerWrapper, DashboardLayoutContainer } from "./styles";
import { Box } from "@mui/material";

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
    </DashboardLayoutContainer>
  );
};

export default DashboardLayout;
