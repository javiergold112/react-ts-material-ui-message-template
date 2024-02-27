import React from "react";
import { useAtom } from "jotai";

import { Stack, Button, ButtonProps } from "@mui/material";

import { state } from "../../store";

// Define a type for the action buttons that extends the ButtonProps
// to include the 'label' property.
interface ActionButton extends Pick<ButtonProps, "variant" | "color"> {
  label: string;
}

export default function ActionSection() {
  const [messageInfo] = useAtom(state);
  // Explicitly type the actionButtons array with the ActionButton type.
  const actionButtons: ActionButton[] = [
    { variant: "contained", color: "primary", label: "Save" },
    { variant: "outlined", color: "primary", label: "Delete" },
  ];

  const handleSubmitTemplate = (button: ActionButton) => {
    if (button.label === "Save") {
      console.log(messageInfo);
    }

    if (button.label === "Delete") {
      console.log("Deleting the message");
    }
  };

  return (
    <Stack spacing={2} sx={{ px: 3 }}>
      {actionButtons.map((button, index) => (
        <Button
          key={index}
          variant={button.variant}
          color={button.color}
          onClick={() => handleSubmitTemplate(button)}
          fullWidth
        >
          {button.label}
        </Button>
      ))}
    </Stack>
  );
}
