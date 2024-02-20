import { styled } from "@mui/material/styles";

import { Stack, Typography, Button } from "@mui/material";

import SendIcon from "@mui/icons-material/Send";

const CampaignStarts = styled(Button)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "0",
  transform: "translate(0, -50%)",
  padding: theme.spacing(4, 6),
  borderRadius: 75,
  textTransform: "capitalize",
  backgroundColor: "#212121",
  '&:hover': {
    backgroundColor: '#212161'
  }
}));

export default function FooterSection() {
  return (
    <CampaignStarts variant="contained">
      <Stack alignItems="center" spacing={2}>
        <SendIcon sx={{ width: 28 }} />
        <Typography>Campaign Starts</Typography>
      </Stack>
    </CampaignStarts>
  );
}
