import Box from "@mui/material/Box";

import SidebarContent from "../../sections/sidebar/SidebarContent";
import ActionSection from "../../sections/sidebar/ActionSection";

const HEADER_HEIGHT = 70;

export default function Sidebar() {
  return (
    <Box
      sx={{
        maxWidth: 380,
        marginTop: `${HEADER_HEIGHT}px`,
        height: `calc(100vh - ${HEADER_HEIGHT}px)`,
        borderRight: "1px solid lightgray",
      }}
    >
      <SidebarContent />
      <ActionSection />
    </Box>
  );
}
