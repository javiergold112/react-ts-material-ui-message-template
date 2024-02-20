import { styled } from "@mui/material/styles";

import {
  Stack,
  Typography,
  IconButton,
  Paper,
  Chip,
  Box,
  Button,
  Link,
  TextField,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatClearIcon from "@mui/icons-material/FormatClear";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import CodeIcon from "@mui/icons-material/Code";

const SectionContainer = styled(Paper)(({ theme }) => ({
  marginTop: theme.spacing(2),
  padding: theme.spacing(2, 3),
  ...theme.typography.body2,
}));

export default function BodySection() {
  return (
    <SectionContainer variant="outlined">
      <Stack direction="row" alignItems="center" spacing={2}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Box component="img" src="./assets/tt.png" />
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
            Body message
          </Typography>
          <Box component="img" src="./assets/info.png" />
        </Stack>
        <Chip
          label="REQUIRED"
          sx={{
            fontSize: "12px",
            fontWeight: "bold",
            borderRadius: 1,
            backgroundColor: "#F5F5F5",
          }}
        />
      </Stack>

      <TextField
        id="outlined-textarea"
        label=""
        multiline
        rows={4}
        defaultValue="👋 Hi {{1}}, we just kicked off our summer sale! ☀️☀️ Wanna hear more? "
        fullWidth
        sx={{
          my: 2,
          fontSize: "14px",
          "& .MuiInputBase-input": { fontSize: "14px" },
        }}
      />
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        spacing={1}
      >
        <Button size="small">ADD VARIABLE</Button>
        <Stack direction="row" alignItems="center" spacing={0.5}>
          <EmojiEmotionsIcon sx={{ color: "#0000008A" }} />
          <FormatBoldIcon sx={{ color: "#0000008A" }} />
          <FormatClearIcon sx={{ color: "#0000008A" }} />
          <FormatItalicIcon sx={{ color: "#0000008A" }} />
          <CodeIcon sx={{ color: "#0000008A" }} />
        </Stack>
      </Stack>
      <Paper
        elevation={0}
        sx={{ backgroundColor: "#F5F5F5", padding: 2, mt: 2 }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          spacing={2}
        >
          <Stack direction="row" alignItems="center" spacing={1}>
            <Box component="img" src="./assets/light.png" />
            <Typography variant="subtitle1">What are variables?</Typography>
          </Stack>
          <IconButton
            size="small"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <CloseIcon />
          </IconButton>
        </Stack>
        <Typography variant="caption">
          Variables are dynamic content that help personalize your campaign, for
          example: customer names or coupon codes.
        </Typography>
        <Box>
          <Link href="#">Learn More</Link>
        </Box>
      </Paper>
    </SectionContainer>
  );
}
