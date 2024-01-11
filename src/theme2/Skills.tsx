import { Box, Typography } from "@mui/material";
import React from "react";
import { DrawerAppBar } from "./HomePage";
import Footer from "./Footer";

export default function Skills() {
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
          Skills
        </Typography>
      </Box>

      <Footer />
    </>
  );
}
