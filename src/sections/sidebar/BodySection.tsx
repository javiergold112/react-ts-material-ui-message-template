import React from 'react';
import { styled, Stack, Typography, IconButton, Paper, Chip, TextField, Link, Button, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatClearIcon from '@mui/icons-material/FormatClear';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import CodeIcon from '@mui/icons-material/Code';

const SectionContainer = styled(Paper)(({ theme }) => ({
  marginTop: theme.spacing(2),
  padding: theme.spacing(2, 3),
  ...theme.typography.body2,
}));

const ActionIcon = styled(Box)({
  color: "#0000008A",
});

const VariableInfoPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: "#F5F5F5",
  padding: theme.spacing(2),
  marginTop: theme.spacing(2),
  elevation: 0,
}));

const BodySection = () => (
  <SectionContainer variant="outlined">
    <Header />
    <MessageInput />
    <EditingTools />
    <VariableInfo />
  </SectionContainer>
);

const Header = () => (
  <Stack direction="row" alignItems="center" spacing={2}>
    <Stack direction="row" alignItems="center" spacing={1}>
      <img src="./assets/tt.png" alt="Body Icon" />
      <Typography variant="subtitle1" fontWeight="bold">
        Body message
      </Typography>
      <img src="./assets/info.png" alt="Info Icon" />
    </Stack>
    <Chip label="REQUIRED" sx={{ fontSize: "12px", fontWeight: "bold", borderRadius: 1, backgroundColor: "#F5F5F5" }} />
  </Stack>
);

const MessageInput = () => (
  <TextField
    id="outlined-textarea"
    multiline
    rows={4}
    defaultValue="👋 Hi {{1}}, we just kicked off our summer sale! ☀️☀️ Wanna hear more? "
    fullWidth
    sx={{ my: 2, "& .MuiInputBase-input": { fontSize: "14px" } }}
  />
);

const EditingTools = () => (
  <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1}>
    <Button size="small">ADD VARIABLE</Button>
    <Stack direction="row" alignItems="center" spacing={0.5}>
      <ActionIcon><EmojiEmotionsIcon /></ActionIcon>
      <ActionIcon><FormatBoldIcon /></ActionIcon>
      <ActionIcon><FormatClearIcon /></ActionIcon>
      <ActionIcon><FormatItalicIcon /></ActionIcon>
      <ActionIcon><CodeIcon /></ActionIcon>
    </Stack>
  </Stack>
);

const VariableInfo = () => (
  <VariableInfoPaper elevation={0}>
    <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={2}>
      <Stack direction="row" alignItems="center" spacing={1}>
        <img src="./assets/light.png" alt="Variables Icon" />
        <Typography variant="subtitle1">What are variables?</Typography>
      </Stack>
      <IconButton size="small" aria-label="close tip">
        <CloseIcon />
      </IconButton>
    </Stack>
    <Typography variant="caption">
      Variables are dynamic content that help personalize your campaign, for example: customer names or coupon codes.
    </Typography>
    <Box mt={1}>
      <Link href="#" underline="hover">Learn More</Link>
    </Box>
  </VariableInfoPaper>
);

export default BodySection;
