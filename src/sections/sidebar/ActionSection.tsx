import { Stack, Button } from "@mui/material";

export default function ActionSection() {
  return (
    <Stack spacing={2} sx={{ padding: "0 24px 0 24px" }}>
      <Button variant="contained" fullWidth>
        save
      </Button>
      <Button variant="outlined" fullWidth>
        delete
      </Button>
    </Stack>
  );
}
