import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Stack,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import HighlightIcon from "@mui/icons-material/Highlight";

// Constants for styles
const styles = {
  appBar: {
    height: 70,
    backgroundColor: "#FFFFFF",
    width: `calc(100% - 56px)`, // Directly use the value as it's unlikely to change dynamically
  },
  title: {
    flexGrow: 1,
    color: "#000000DE",
  },
  tipsButton: {
    mr: 2,
    color: "#007DFF",
    backgroundColor: "#F6F8FF",
    textTransform: "capitalize",
    borderRadius: "100px",
    padding: "6px 16px",
    "& .MuiButton-startIcon": {
      margin: 0, 
    },
  },
  closeButton: {
    mr: 2,
    color: "#000000DE",
    backgroundColor: "#F5F5F5",
    width: 40,
    height: 40,
  },
};

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1, zIndex: 10 }}>
      <AppBar position="fixed" sx={styles.appBar}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={styles.title}>
            Create a Campaign
          </Typography>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Button
              size="large"
              color="inherit"
              aria-label="tips"
              startIcon={<HighlightIcon />}
              sx={styles.tipsButton}
            >
              Tips
            </Button>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="close"
              sx={styles.closeButton}
            >
              <CloseIcon />
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
