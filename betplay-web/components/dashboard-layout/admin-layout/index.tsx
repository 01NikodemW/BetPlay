import type { FC, ReactNode } from "react";
import Navbar from "./navbar";
import { ContainerWrapper, AdminDashboardLayoutContainer } from "./styles";
import { Box } from "@mui/material";

interface AdminDashboardLayoutProps {
  children?: ReactNode;
}

const AdminDashboardLayout: FC<AdminDashboardLayoutProps> = (props) => {
  const { children } = props;

  return (
    <AdminDashboardLayoutContainer>
      <Box>
        <Navbar />
        <ContainerWrapper maxWidth="xl">{children}</ContainerWrapper>
      </Box>
    </AdminDashboardLayoutContainer>
  );
};

export default AdminDashboardLayout;
