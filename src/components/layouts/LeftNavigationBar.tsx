import * as React from "react";
import { Box, List, ListItemButton, ListItemIcon } from "@mui/material";
import { styled } from "@mui/material/styles";

const LEFTNAVBAR_WIDTH = 56;

// Adjusted color codes according to your requirement
const bgColor = "#20232A"; // Background color for the navigation bar
const logoBorderColor = "rgba(255, 255, 255, 0.12)"; // Border color below the logo
const selectedItemBgColor = "#333740"; // Background color for the selected item
const selectedItemBorderColor = "#007DFF"; // Border color for the selected item

const DrawerBox = styled(Box)({
  width: "100%",
  height: "100vh",
  maxWidth: LEFTNAVBAR_WIDTH,
  backgroundColor: bgColor,
});

const LogoBox = styled(Box)({
  width: 52,
  height: 72,
  padding: 16,
  paddingTop: 24,
  borderBottom: `1px solid ${logoBorderColor}`,
});

const CustomListItemButton = styled(ListItemButton)({
  height: 72,
  "&.Mui-selected": {
    backgroundColor: selectedItemBgColor,
    borderRight: `4px solid ${selectedItemBorderColor}`,
  },
  "&:hover": {
    backgroundColor: "#2c2f36", // Adjust hover background color if needed
  },
});

export default function LeftNavigationBar() {
  const [selectedIndex, setSelectedIndex] = React.useState(3);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
  };

  return (
    <DrawerBox>
      <List
        component="nav"
        aria-label="main mailbox folders"
        sx={{ padding: 0 }}
      >
        <LogoBox>
          <Box component="img" src="./assets/logo.png" alt="logo" />
        </LogoBox>
        {LEFTNAVBAR.map((item) => (
          <CustomListItemButton
            key={item.id}
            selected={selectedIndex === item.id}
            onClick={(event) => handleListItemClick(event, item.id)}
          >
            <ListItemIcon>
              <Box component="img" src={item.src} alt="" />
            </ListItemIcon>
          </CustomListItemButton>
        ))}
      </List>
    </DrawerBox>
  );
}

const LEFTNAVBAR = [
  {
    id: 0,
    src: "./assets/avatar.png",
  },
  {
    id: 1,
    src: "./assets/dashboard.png",
  },
  {
    id: 2,
    src: "./assets/message.png",
  },
  {
    id: 3,
    src: "./assets/megaphone.png",
  },
];
