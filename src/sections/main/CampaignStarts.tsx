import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

// Utilize MUI's system to create a styled button with specific styles
const CampaignStartsButton = styled(Button)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "0",
  transform: "translate(0, -50%)",
  padding: theme.spacing(4, 6),
  borderRadius: 75,
  textTransform: "capitalize",
  backgroundColor: "#212121",
  "&:hover": {
    backgroundColor: "#212161",
  },
  // Ensure the button content (icon and text) is centered
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export default function CampaignStarts() {
  return (
    <CampaignStartsButton
      variant="contained"
      startIcon={<SendIcon sx={{ fontSize: 28, mb: 1 }} />}
    >
      Campaign Starts
    </CampaignStartsButton>
  );
}
