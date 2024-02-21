import { styled } from "@mui/material/styles";

import { Box } from "@mui/material";

const DotArrowContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "198px",
  transform: "translate(0, -50%)",
}));

export default function DotArrow() {
  return (
    <DotArrowContainer>
      <Box component="img" src="./assets/dot-arrow.svg" />
    </DotArrowContainer>
  );
}
