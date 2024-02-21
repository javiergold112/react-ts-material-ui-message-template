import { FC, ReactNode } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import {
  Stack,
  Typography,
  Box,
  Chip,
  Avatar,
  Divider,
  Link,
  Card,
  CardContent,
} from '@mui/material';
import MessageIcon from '@mui/icons-material/Message';

const MessagePreviewCard = styled(Card)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  right: '0',
  transform: 'translate(0, -50%)',
  maxWidth: 345,
  boxShadow: theme.shadows[3], // Use theme for shadows
}));

const StyledDivider = styled(Divider)(({ theme }) => ({
  margin: theme.spacing(1, 0),
  marginTop: theme.spacing(0.625),
  borderStyle: 'dashed',
  borderColor: '#25D366',
}));

interface ContentBlockProps {
  label: string;
  children: ReactNode;
}

const ContentBlock: FC<ContentBlockProps> = ({ label, children }) => (
  <>
    <Chip
      label={label}
      sx={{
        fontSize: '12px',
        borderRadius: 1,
        color: '#41C352',
        backgroundColor: '#F5F5F5',
        mb: 1,
      }}
    />
    {children}
  </>
);

export default function RecipeReviewCard() {
  const theme = useTheme();
  
  return (
    <MessagePreviewCard>
      <CardContent>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Avatar sx={{ bgcolor: theme.palette.primary.main }} aria-label="message">
            <MessageIcon />
          </Avatar>
          <Typography variant="subtitle1" fontWeight="bold">
            Message Example
          </Typography>
        </Stack>
        <Box
          sx={{
            padding: theme.spacing(3),
            backgroundColor: '#F5F5F5',
            borderRadius: theme.shape.borderRadius,
            mt: theme.spacing(2),
          }}
        >
          <Card>
            <CardContent sx={{ p: theme.spacing(1), pb: '8px !important' }}>
              <Box component="img" src="./assets/message-preview.png" sx={{ width: '100%', height: 'auto' }} />
              <StyledDivider />
              <ContentBlock label="Body Message">
                <Typography variant="body2">
                  We have an exciting offer. Are you interested in hearing more?
                </Typography>
              </ContentBlock>
              <StyledDivider /> 
              <ContentBlock label="Footer">
                <Typography sx={{ color: theme.palette.text.secondary, fontSize: '14px' }}>
                  Reply ‘STOP’ to opt out
                </Typography>
              </ContentBlock>
            </CardContent>
          </Card>

          <Card sx={{ mt: theme.spacing(1) }}>
            <CardContent sx={{ p: theme.spacing(1), textAlign: 'center', pb: '8px !important' }}>
              <Link href="#" sx={{ textDecoration: 'none', fontSize: '14px' }}>
                Talk to a styling expert
              </Link>
            </CardContent>
          </Card>
        </Box>
      </CardContent>
    </MessagePreviewCard>
  );
}
