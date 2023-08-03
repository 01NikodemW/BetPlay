import type { FC, ReactNode } from "react";
import Footer from "./footer";
import Navbar from "./navbar";
import { ContainerWrapper, DashboardLayoutContainer } from "./styles";

interface DashboardLayoutProps {
  children?: ReactNode;
}

const DashboardLayout: FC<DashboardLayoutProps> = (props) => {
  const { children } = props;

  return (
    <DashboardLayoutContainer>
      <Navbar />
      <ContainerWrapper maxWidth="xl">{children}</ContainerWrapper>
      <Footer />
    </DashboardLayoutContainer>
  );
};

export default DashboardLayout;
