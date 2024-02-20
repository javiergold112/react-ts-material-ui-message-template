import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";

const LEFTNAVBAR_WIDTH = 56;

export default function LeftNavigationBar() {
  const [selectedIndex, setSelectedIndex] = React.useState(3);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        maxWidth: LEFTNAVBAR_WIDTH,
        bgcolor: "#20232A",
      }}
    >
      <List
        component="nav"
        aria-label="main mailbox folders"
        sx={{ padding: 0 }}
      >
        <Box
          sx={{
            width: 52,
            height: 72,
            padding: 2,
            paddingTop: 3,
            borderBottom: "1px solid grey",
          }}
        >
          <Box component="img" src="./assets/logo.png" />
        </Box>
        {LEFTNAVBAR.map((item) => (
          <ListItemButton
            key={item.id}
            selected={selectedIndex === item.id}
            onClick={(event) => handleListItemClick(event, item.id)}
            sx={{
              height: 72,
              "&.Mui-selected": {
                backgroundColor: "#000000",
                borderRight: "4px solid #007DFF",
              },
            }}
          >
            <ListItemIcon>
              <Box component="img" src={item.src} />
            </ListItemIcon>
          </ListItemButton>
        ))}
      </List>
    </Box>
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
