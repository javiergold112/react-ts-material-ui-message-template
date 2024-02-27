import { Stack, Typography, IconButton, CardContent, Box, Card } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';

import HeaderSection from './HeaderSection';
import BodySection from './BodySection';
import FooterSection from './FooterSection';
import ButtonsSection from './ButtonsSection';

export default function SideBarContent() {
  const theme = useTheme();

  const cardContentStyles = {
    padding: theme.spacing(3),
    paddingBottom: '8px !important',
  };

  const scrollableContentStyles = {
    height: `calc(100vh - 250px)`,
    overflowY: 'auto',
    pt: 2,
    WebkitOverflowScrolling: 'touch',
    scrollbarWidth: 'thin',
    '&::-webkit-scrollbar': {
      width: '8px',
    },
    '&::-webkit-scrollbar-thumb': {
      background: 'transparent',
      borderRadius: '4px',
    },
    '&:hover': {
      '&::-webkit-scrollbar-thumb': {
        background: '#888',
      },
    },
  };

  const closeButtonStyles = {
    mr: 2,
    color: '#0000008A',
    backgroundColor: '#F5F5F5',
    width: 40,
    height: 40,
  };

  return (
    <Card sx={{ boxShadow: 'none', borderRadius: 0 }}>
      <CardContent sx={cardContentStyles}>
        <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={2}>
          <Typography variant="h5">Edit Message</Typography>
          <IconButton size="large" edge="start" color="inherit" aria-label="close" sx={closeButtonStyles}>
            <CloseIcon />
          </IconButton>
        </Stack>
        <Box sx={scrollableContentStyles}>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#000000DE' }}>
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
