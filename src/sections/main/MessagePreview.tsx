import { styled, useTheme } from "@mui/material/styles";

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
} from "@mui/material";

import MessageIcon from "@mui/icons-material/Message";

const MessagePreviewCard = styled(Card)(() => ({
  position: "absolute",
  top: "50%",
  right: "0",
  transform: "translate(0, -50%)",
  maxWidth: 345,
}));

export default function RecipeReviewCard() {
  const theme = useTheme();
  return (
    <MessagePreviewCard>
      <CardContent>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Avatar sx={{ bgcolor: "#7986CB" }} aria-label="recipe">
            <MessageIcon />
          </Avatar>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
            Message Example
          </Typography>
        </Stack>
        <Box
          sx={{
            padding: 3,
            backgroundColor: "#F5F5F5",
            borderRadius: 1,
            mt: 2,
          }}
        >
          <Card>
            <CardContent sx={{ padding: 1, paddingBottom: "8px !important" }}>
              <Box
                component="img"
                src="./assets/message-preview.png"
                sx={{ width: "100%", height: "auto" }}
              />
              <Divider
                sx={{
                  my: 1,
                  marginTop: "5px",
                  borderStyle: "dashed",
                  borderColor: "#25D366",
                }}
              />
              <Chip
                label="Body Message"
                sx={{
                  fontSize: "12px",
                  borderRadius: 1,
                  color: "#41C352",
                  backgroundColor: "#F5F5F5",
                }}
              />
              <Typography variant="body2">
                We have an exciting offer. Are you interested in hearing more?
              </Typography>
              <Divider
                sx={{
                  my: 1,
                  marginTop: "5px",
                  borderStyle: "dashed",
                  borderColor: "#25D366",
                }}
              />
              <Chip
                label="Footer"
                sx={{
                  fontSize: "12px",
                  borderRadius: 1,
                  color: "#41C352",
                  backgroundColor: "#F5F5F5",
                  mb: 1,
                }}
              />
              <Typography sx={{ color: "#0000008A", fontSize: "14px" }}>
                Reply ‘STOP’ to opt out
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{ marginTop: theme.spacing(1) }}>
            <CardContent
              sx={{
                padding: theme.spacing(1),
                textAlign: "center",
                paddingBottom: "8px !important",
              }}
            >
              <Link href="#" sx={{ textDecoration: "none", fontSize: "14px" }}>
                Talk to a styling expert
              </Link>
            </CardContent>
          </Card>
        </Box>
      </CardContent>
    </MessagePreviewCard>
  );
}
