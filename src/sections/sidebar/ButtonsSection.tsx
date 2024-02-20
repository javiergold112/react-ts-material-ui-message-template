import { useState } from "react";
import { styled } from "@mui/material/styles";

import {
  Stack,
  Typography,
  Paper,
  Switch,
  Box,
  IconButton,
  FormControl,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";

import Crop169Icon from "@mui/icons-material/Crop169";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const SectionContainer = styled(Paper)(({ theme }) => ({
  margin: theme.spacing(2, 0),
  padding: theme.spacing(2, 3),
  ...theme.typography.body2,
}));

export default function ButtonsSection() {
  const [isShow, setIsShow] = useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsShow(event.target.checked);
  };
  return (
    <SectionContainer variant="outlined">
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        spacing={2}
        sx={{ marginBottom: 2 }}
      >
        <Stack direction="row" alignItems="center" spacing={1}>
          <Crop169Icon />
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
            Button
          </Typography>
          <Box component="img" src="./assets/info.png" />
        </Stack>
        <Switch
          checked={isShow}
          onChange={handleChange}
          inputProps={{ "aria-label": "controlled" }}
        />
      </Stack>

      {isShow && (
        <Stack spacing={2}>
          {[...Array(3)].map((_, idx) => (
            <Box key={idx}>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                spacing={2}
              >
                <Typography>Button 1</Typography>
                <IconButton
                  size="small"
                  edge="start"
                  color="secondary"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                >
                  <DeleteOutlineIcon sx={{ color: "#0000008A" }} />
                </IconButton>
              </Stack>

              <FormControl variant="outlined">
                <OutlinedInput
                  id="outlined-adornment-weight"
                  endAdornment={
                    <InputAdornment position="end">0/25</InputAdornment>
                  }
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    "aria-label": "weight",
                  }}
                  placeholder="Enter text"
                  size="small"
                  fullWidth
                />
              </FormControl>
            </Box>
          ))}
        </Stack>
      )}
    </SectionContainer>
  );
}
