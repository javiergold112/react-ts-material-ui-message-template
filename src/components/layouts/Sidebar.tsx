import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

import SidebarContent from "../../sections/sidebar/SidebarContent";
import ActionSection from "../../sections/sidebar/ActionSection";

const HEADER_HEIGHT = 70;

const StyledSidebarBox = styled(Box)(({ theme }) => ({
  maxWidth: 380,
  marginTop: HEADER_HEIGHT,
  height: `calc(100vh - ${HEADER_HEIGHT}px)`,
  borderRight: "1px solid lightgray",
  zIndex: 10
}));

export default function Sidebar() {
  return (
    <StyledSidebarBox>
      <SidebarContent />
      <ActionSection />
    </StyledSidebarBox>
  );
}
