import {
  Stack,
  Typography,
  IconButton,
  CardContent,
  Box,
  Card,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";

import HeaderSection from "./HeaderSection";
import BodySection from "./BodySection";
import FooterSection from "./FooterSection";
import ButtonsSection from "./ButtonsSection";

export default function Sidebar() {
  const theme = useTheme();

  return (
    <Card
      sx={{
        boxShadow: "none",
        borderRadius: 0,
      }}
    >
      <CardContent
        sx={{ padding: theme.spacing(3), paddingBottom: "8px !important" }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          spacing={2}
        >
          <Typography variant="h5">Edit Message</Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{
              mr: 2,
              color: "#0000008A",
              backgroundColor: "#F5F5F5",
              width: 40,
              height: 40,
            }}
          >
            <CloseIcon />
          </IconButton>
        </Stack>
        <Box
          sx={{
            height: `calc(100vh - 250px)`,
            overflowY: "auto",
            pt: 2,
            WebkitOverflowScrolling: "touch", // Enable smooth scrolling for WebKit
            scrollbarWidth: "thin", // For Firefox
            "&::-webkit-scrollbar": {
              width: "8px", // Set the width of the scrollbar
            },
            "&::-webkit-scrollbar-thumb": {
              background: "transparent", // Set the color of the scrollbar thumb to transparent
              borderRadius: "4px", // Optional: Add rounded corners to the thumb
            },
            "&:hover": {
              "&::-webkit-scrollbar-thumb": {
                background: "#888", // Set the color of the scrollbar thumb on hover
              },
            },
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: "bold", color: "#000000DE" }}
          >
            Content
          </Typography>
          <HeaderSection />
          <BodySection />
          <FooterSection />
          <ButtonsSection />
        </Box>
      </CardContent>
    </Card>
  );
}
