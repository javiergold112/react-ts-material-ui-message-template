import React, { useState } from 'react';
import { useAtom } from 'jotai';

import { styled } from '@mui/material/styles';
import { Stack, Typography, Paper, Switch, Box } from '@mui/material';
import TextFieldsIcon from '@mui/icons-material/TextFields';

import { state } from "../../store";

const SectionContainer = styled(Paper)(({ theme }) => ({
  marginTop: theme.spacing(2),
  padding: theme.spacing(2, 3),
  ...theme.typography.body2,
}));

// Component for the footer's content to improve readability and maintainability
const FooterContent = () => (
  <Stack direction="row" alignItems="center" spacing={1}>
    <TextFieldsIcon />
    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
      Footer text
    </Typography>
    <Box component="img" src="./assets/info.png" alt="Information" />
  </Stack>
);

export default function FooterSection() {
  const [visibility, setVisibility] = useAtom(state);
  const [footerVisibility, setFooterVisibility] = useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFooterVisibility(event.target.checked);
    toggleVisibility("footerSectionVisible");
  };

  const toggleVisibility = (section: keyof typeof visibility) => {
    setVisibility((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <SectionContainer variant="outlined">
      <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={2}>
        <FooterContent />
        <Switch
          checked={footerVisibility}
          onChange={handleChange}
          inputProps={{ "aria-label": "controlled" }}
        />
      </Stack>
    </SectionContainer>
  );
}
