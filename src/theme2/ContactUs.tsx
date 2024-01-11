import React from "react";
import { DrawerAppBar } from "./HomePage";
import { Box, Button, Typography } from "@mui/material";
import Footer from "./Footer";
import FullWidthTextField from "../FullWidthTextField";

export default function ContactUs() {
  return (
    <>
      <DrawerAppBar />

      <Box
        sx={{
          mx: "10%",
          mt: "8%",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            textAlign: "center",
            color: "#384158",
            left: { xs: "5%", md: "15%" },
            fontSize: { xs: "30px", md: "60px" },
            fontWeight: 700,
          }}
        >
          Contact Us
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            mt: 4,
            mb: 5,
            mx: "10%",
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
              width: { xs: "50%", md: "40%" },
              backgroundColor: "#006983",
              "&:hover": {
                backgroundColor: "#006983",
              },
              py: 2,
              my: 2,
            }}
          >
            Contact Me
          </Button>
        </Box>
      </Box>

      <Footer />
    </>
  );
}
