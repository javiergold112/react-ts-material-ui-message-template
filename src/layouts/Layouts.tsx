// src/components/layouts/Layouts.tsx
import React, { ReactNode } from "react";

import { Box } from "@mui/material";

// components
import LeftNavigationBar from "../components/layouts/LeftNavigationBar";
import Header from "../components/layouts/Header";
import Sidebar from "../components/layouts/Sidebar";

const HEADER_HEIGHT = 70;

interface LayoutsProps {
  children: ReactNode;
}

const Layouts: React.FC<LayoutsProps> = ({ children }) => {
  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <LeftNavigationBar />
      <Box sx={{ width: "100%" }}>
        <Header />
        <Box style={{ display: "flex" }}>
          <Sidebar />
          <Box style={{ flex: 1, marginTop: `${HEADER_HEIGHT}px` }}>
            {children}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Layouts;
