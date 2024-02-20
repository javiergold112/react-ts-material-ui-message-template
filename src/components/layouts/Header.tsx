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

const HEADER_HEIGHT = 70;
const LEFTNAVBAR_WIDTH = 56;

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1, zIndex: 10 }}>
      <AppBar
        position="fixed"
        sx={{
          height: HEADER_HEIGHT,
          backgroundColor: "#FFFFFF",
          width: `calc(100% - ${LEFTNAVBAR_WIDTH}px)`,
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "#000000DE" }}
          >
            Create a Campaign
          </Typography>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Button
              size="large"
              color="inherit"
              aria-label="menu"
              sx={{
                mr: 2,
                color: "#007DFF",
                backgroundColor: "#F6F8FF",
                textTransform: "capitalize",
                borderRadius: "100px",
                padding: "6px 16px 6px 16px",
              }}
            >
              <HighlightIcon />
              <Typography variant="body2">Tips</Typography>
            </Button>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{
                mr: 2,
                color: "#000000DE",
                backgroundColor: "#F5F5F5",
                width: 40,
                height: 40,
              }}
            >
              <CloseIcon />
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
