import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

interface FullWidthTextFieldInterface {
  label: string;
  id: string;
  value: string;
  onChangeFunc?: any;
}

export default function FullWidthTextField(props: FullWidthTextFieldInterface) {
  const { label, id, value, onChangeFunc } = props;

  return (
    <Box
      sx={{
        width: 500,
        maxWidth: "100%",
        mb: 4,
      }}
    >
      <TextField
        fullWidth
        label={label}
        value={value}
        id={id}
        onChange={onChangeFunc}
      />
    </Box>
  );
}
