import React from "react";
import { HeaderNew } from "./HomePage";
import { Box, Button, TextField, Typography } from "@mui/material";
import Footer from "./Footer";
import FullWidthTextField from "../FullWidthTextField";
import ContactUsImage from "../assets/ContactUsBanner.jpg";

export default function ContactUs() {
  return (
    <>
      <HeaderNew />

      <Box
        sx={{
          mx: "10%",
          mt: { xs: "0", md: "8%" },
          mb: { xs: "0", md: "8%" },
          py: 4,
          // backgroundSize: "150% 100%",
          // backgroundPositionY: "center",
          // backgroundImage: `url(${ContactUsImage})`,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            mb: 4,
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#fff",
              opacity: "0.9",
              border: { xs: "1px solid #d6d5d0", sm: "5px solid #d6d5d0" },
              borderRight: { xs: "1px solid #d6d5d0", sm: "none" },
              p: { xs: 2, sm: 0 },
            }}
          >
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                textAlign: "center",
                color: "#000",
                left: { xs: "5%", md: "15%" },
                fontSize: { xs: "25px", md: "50px" },
                fontWeight: 700,
                pt: 4,
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
                mx: { xs: "0%", md: "10%" },
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FullWidthTextField label={"Name"} id={"Name"} />
              <FullWidthTextField label={"Email"} id={"Email"} />
              <FullWidthTextField label={"Phone Number"} id={"Phone Number"} />
              <FullWidthTextField
                label={"Designation / Branch"}
                id={"Branch"}
              />
              <FullWidthTextField
                label={"Organization / College"}
                id={"College"}
              />
              <TextField
                id="outlined-multiline-static"
                label="Message"
                multiline
                rows={4}
                sx={{
                  width: "100%",
                }}
              />

              <Button
                variant="contained"
                sx={{
                  width: { xs: "100%", sm: "70%" },
                  backgroundColor: "#006983",
                  "&:hover": {
                    backgroundColor: "#006983",
                  },
                  boxShadow: "5px 5px 0px 0px #bed89d",
                  py: 2,
                  my: 2,
                }}
              >
                Contact Me
              </Button>
            </Box>
          </Box>
          <Box sx={{ display: "flex" }}>
            <img
              src={ContactUsImage}
              alt="Contact Us"
              style={{ width: "100%" }}
            />
          </Box>
        </Box>
      </Box>

      <Footer />
    </>
  );
}
