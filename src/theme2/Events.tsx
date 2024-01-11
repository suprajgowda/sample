import React from "react";
import { DrawerAppBar } from "./HomePage";
import Footer from "./Footer";
import { Box, Typography } from "@mui/material";

export default function Events() {
  return (
    <>
      <DrawerAppBar />

      <Box
        sx={{
          mx: "10%",
        }}
      >
        <Typography
          variant="h3"
          component="div"
          sx={{ pb: 4, fontWeight: 700 }}
        >
          Events
        </Typography>
      </Box>

      <Footer />
    </>
  );
}
