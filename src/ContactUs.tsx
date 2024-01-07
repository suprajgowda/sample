import React from "react";
import { Box, Button, Typography } from "@mui/material";
import FullWidthTextField from "./FullWidthTextField";
import NewsLetter from "./NewsLetter";
import Footer from "./Footer";
import ResponsiveAppBar from "./ResponsiveAppBar";
import ResponsiveAppBar2 from "./ResponsiveAppBar2";

export default function ContactUs() {
  return (
    <>
      <ResponsiveAppBar />
      <ResponsiveAppBar2 />

      <Box sx={{ py: 5 }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            textAlign: "center",
            color: "#384158",
            left: { xs: "5%", md: "15%" },
            fontSize: { xs: "1.5rem", md: "2.125rem" },
          }}
        >
          Contact Us
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          mb: 5,
          px: { xs: 2, md: 0 },
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FullWidthTextField label={"Name"} id={"Name"} />
        <FullWidthTextField label={"Email"} id={"Email"} />
        <FullWidthTextField label={"Phone Number"} id={"Phone Number"} />
        <FullWidthTextField label={"College"} id={"College"} />

        <Button
          variant="contained"
          sx={{
            width: { xs: "50%", md: "30%" },
            backgroundColor: "#14bdee",
            "&:hover": {
              backgroundColor: "#2cb3da",
            },
          }}
        >
          Contact Me
        </Button>
      </Box>

      <NewsLetter />
      <Footer />
    </>
  );
}
