import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function FullWidthTextField(props: any) {
  const { label, id } = props;

  return (
    <Box
      sx={{
        width: 500,
        maxWidth: "100%",
        mb: 4,
      }}
    >
      <TextField fullWidth label={label} id={id} />
    </Box>
  );
}
