// src/pages/MainPage.tsx
import React from "react";

import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

import Layouts from "../layouts/Layouts";

// sections
import MessagePreview from "../sections/main/MessagePreview";
import CampaignStarts from "../sections/main/CampaignStarts";
import DotArrow from "../sections/main/DotArrow";

const MainContainer = styled(Box)(() => ({
  position: "relative",
  width: "100%",
  height: "100%",
  backgroundImage: "url(/assets/bg-dots.png)",
}));

const CanvasContainer = styled(Box)(() => ({
  position: "absolute",
  top: "50%",
  left: "45%",
  width: "600px",
  height: "422px",
  transform: "translate(-50%, -50%)",
}));

const MainPage: React.FC = () => {
  return (
    <Layouts>
      <MainContainer>
        <CanvasContainer>
          <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
            <CampaignStarts />
            <DotArrow />
            <MessagePreview />
          </Box>
        </CanvasContainer>
      </MainContainer>
    </Layouts>
  );
};

export default MainPage;
