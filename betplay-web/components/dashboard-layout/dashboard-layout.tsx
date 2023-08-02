import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  Container,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Theme, styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import { useRef, useState } from "react";
import type { FC, ReactNode } from "react";
import Footer from "./footer";

interface DashboardLayoutProps {
  children?: ReactNode;
}

export const DashboardLayout: FC<DashboardLayoutProps> = (props) => {
  const { children } = props;
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const theme = useTheme();

  const isDesktopScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down(theme.breakpoints.values.desktop)
  );

  const DashboardLayoutRoot = styled("div")<{
    isSidebarOpen: boolean;
  }>(() => ({
    display: "flex",
    flex: "1 1 auto",
  }));

  return (
    <DashboardLayoutRoot isSidebarOpen={isSidebarOpen}>
      <IconButton
        sx={{
          display: isDesktopScreen ? "block" : "none",
          position: "fixed",
          width: "45px",
          height: "45px",
          bgcolor: theme.palette.background.paper,
          top: theme.spaces.medium,
          right: theme.spaces.medium,
          zIndex: isSidebarOpen ? 0 : 9999,
        }}
        onClick={() => setIsSidebarOpen(true)}
      >
        <MenuIcon />
      </IconButton>

      <Box
        component="main"
        sx={{
          minHeight: "100vh",
          display: "flex",
          width: "100%",
          flexDirection: "column",
          justifyContent: "space-between",
          flexGrow: 1,
        }}
      >
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
