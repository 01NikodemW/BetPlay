import { Box, Container, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import { useRef } from "react";
import type { FC, ReactNode } from "react";
import Footer from "./footer";
import Navbar from "./navbar";

interface DashboardLayoutProps {
  children?: ReactNode;
}

export const DashboardLayout: FC<DashboardLayoutProps> = (props) => {
  const { children } = props;
  const rootRef = useRef<HTMLDivElement | null>(null);
  const theme = useTheme();

  const DashboardLayoutRoot = styled("div")(() => ({
    display: "flex",
    flex: "1 1 auto",
  }));

  return (
    <DashboardLayoutRoot>
      <Box
        component="main"
        sx={{
          minHeight: "100vh",
          display: "flex",
          width: "100%",
          flexDirection: "column",
          justifyContent: "space-between",
          flexGrow: 1,
          backgroundColor: "yellow",
        }}
      >
        <Navbar />
        <Container
          ref={rootRef}
          maxWidth="xl"
          sx={{
            py: theme.spaces.medium,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {children}
        </Container>
        <Footer />
      </Box>
    </DashboardLayoutRoot>
  );
};

DashboardLayout.propTypes = {
  children: PropTypes.node,
};
