import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import {
  Stack,
  Typography,
  IconButton,
  Paper,
  Switch,
  Box,
  FormControl,
  MenuItem,
  FormHelperText,
  Button,
  Link,
} from '@mui/material';

import Select, { SelectChangeEvent} from '@mui/material/Select';

import CloseIcon from '@mui/icons-material/Close';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';

const SectionContainer = styled(Paper)(({ theme }) => ({
  marginTop: theme.spacing(2),
  padding: theme.spacing(2, 3),
  ...theme.typography.body2,
}));

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  whiteSpace: 'nowrap',
  width: 1,
});

const HeaderInfo = () => (
  <Stack direction="row" alignItems="center" spacing={1}>
    <InsertPhotoIcon sx={{ color: '#0000008A' }} />
    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
      Header
    </Typography>
    <Box component="img" src="./assets/info.png" alt="Info" />
  </Stack>
);
interface AttachmentTypeSelectProps {
  attachType: number;
  setAttachType: (value: number) => void;
}

const AttachmentTypeSelect: React.FC<AttachmentTypeSelectProps> = ({ attachType, setAttachType }) => {
  const handleChange = (event: SelectChangeEvent) => {
    setAttachType(Number(event.target.value));
  };

  return (
    <FormControl fullWidth size="small" margin="normal">
      <Select
        value={String(attachType)}
        onChange={handleChange}
        displayEmpty
      >
        <MenuItem value={0}>Image</MenuItem>
        <MenuItem value={1}>File</MenuItem>
      </Select>
      <FormHelperText sx={{ mx: 0 }}>Image size recommendation: 800 x 418 pixels</FormHelperText>
    </FormControl>
  );
};

const ImageHeaderTips = () => (
  <Paper elevation={0} sx={{ backgroundColor: '#F5F5F5', padding: 2, mt: 2 }}>
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <Typography variant="subtitle1">Image header tips</Typography>
      <IconButton size="small" aria-label="close tip">
        <CloseIcon />
      </IconButton>
    </Stack>
    <Typography variant="caption">
      Images can enrich the message experience and help maintain engagement.
      Use eye-catching images that summarize the message (e.g., discounts, gifts, etc.).
    </Typography>
    <Box mt={1}>
      <Link href="#" underline="hover">Learn More</Link>
    </Box>
  </Paper>
);

export default function HeaderSection() {
  const [attachType, setAttachType] = useState(0);

  return (
    <SectionContainer variant="outlined">
      <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={2}>
        <HeaderInfo />
        <Switch defaultChecked />
      </Stack>

      <AttachmentTypeSelect attachType={attachType} setAttachType={setAttachType} />

      <Button component="label" variant="outlined">
        Upload image
        <VisuallyHiddenInput accept="image/*" type="file" />
      </Button>

      <ImageHeaderTips />
    </SectionContainer>
  );
}
