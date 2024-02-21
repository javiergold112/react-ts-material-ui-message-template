import React from "react";
import { Stack, Button, ButtonProps } from "@mui/material";

// Define a type for the action buttons that extends the ButtonProps
// to include the 'label' property.
interface ActionButton extends Pick<ButtonProps, "variant" | "color"> {
  label: string;
}

export default function ActionSection() {
  // Explicitly type the actionButtons array with the ActionButton type.
  const actionButtons: ActionButton[] = [
    { variant: "contained", color: "primary", label: "Save" },
    { variant: "outlined", color: "primary", label: "Delete" },
  ];

  return (
    <Stack spacing={2} sx={{ px: 3 }}>
      {actionButtons.map((button, index) => (
        <Button
          key={index}
          variant={button.variant}
          color={button.color}
          fullWidth
        >
          {button.label}
        </Button>
      ))}
    </Stack>
  );
}
