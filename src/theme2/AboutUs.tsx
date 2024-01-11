import React from "react";
import { DrawerAppBar } from "./HomePage";
import { Box, Typography } from "@mui/material";
import Footer from "./Footer";

export default function AboutUs() {
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
          AboutUs
        </Typography>
      </Box>

      <Footer />
    </>
  );
}
