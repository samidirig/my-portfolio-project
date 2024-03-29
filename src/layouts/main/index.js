import PropTypes from "prop-types";
import Header from "./header";
import Footer from "./footer";
import { Box } from "@mui/material";

export const HEADER = {
  H_MOBILE: 64,
  H_DESKTOP: 80,
  H_DESKTOP_OFFSET: 80 - 16,
};

export default function MainLayout({ children }) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: 1 }}>
      <Header />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
        }}
      >
        {children}
      </Box>

      <Footer />
    </Box>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node,
};
