import { useState } from "react";
import { styled } from "@mui/material/styles";

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
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";

import Select, { SelectChangeEvent } from "@mui/material/Select";

const SectionContainer = styled(Paper)(({ theme }) => ({
  marginTop: theme.spacing(2),
  padding: theme.spacing(2, 3),
  ...theme.typography.body2,
}));

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function HeaderSection() {
  const [attachType, setAttachType] = useState(0);

  const handleChange = (event: SelectChangeEvent) => {
    setAttachType(Number(event.target.value));
  };
  return (
    <SectionContainer variant="outlined">
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        spacing={2}
      >
        <Stack direction="row" alignItems="center" spacing={1}>
          <InsertPhotoIcon sx={{ color: "#0000008A" }} />
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
            Header
          </Typography>
          <Box component="img" src="./assets/info.png" />
        </Stack>
        <Switch defaultChecked />
      </Stack>

      <FormControl>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={`${attachType}`}
          onChange={handleChange}
          size="small"
          sx={{ mt: 2, mb: 1 }}
        >
          <MenuItem value={0}>Image</MenuItem>
          <MenuItem value={1}>File</MenuItem>
        </Select>
        <FormHelperText sx={{ textAlign: "left", m: 0 }}>
          Image size recommendation: 800 x 418 pixel.
        </FormHelperText>
      </FormControl>

      <Box sx={{ my: 2 }}>
        <Button
          component="label"
          role={undefined}
          variant="outlined"
          tabIndex={-1}
        >
          Upload image
          <VisuallyHiddenInput type="file" />
        </Button>
      </Box>
      <Paper elevation={0} sx={{ backgroundColor: "#F5F5F5", padding: 2 }}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          spacing={2}
        >
          <Stack direction="row" alignItems="center" spacing={1}>
            <Box component="img" src="./assets/light.png" />
            <Typography variant="subtitle1">Image header tips</Typography>
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
          Images can enrich the message experience and help maintain engagement.
          Use eye-catching images that summarize the message (eg discounts,
          gifts etc.)
        </Typography>
        <Box>
          <Link href="#" sx={{ textDecoration: "none" }}>
            Learn More
          </Link>
        </Box>
      </Paper>
    </SectionContainer>
  );
}
