import React from "react";
import { HeaderNew } from "./HomePage";
import { Box, Button, Typography } from "@mui/material";
import Footer from "./Footer";
import FullWidthTextField from "../FullWidthTextField";
import ContactUsImage from "../assets/ContactUs.jpg";

export default function ContactUs() {
  return (
    <>
      <HeaderNew />

      <Box
        sx={{
          mx: "10%",
          mt: { xs: "75px", md: "8%" },
          mb: { xs: "75px", md: "8%" },
          py: 4,
          backgroundSize: "150% 100%",
          backgroundPositionY: "center",
          backgroundImage: `url(${ContactUsImage})`,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            mb: 4,
          }}
        >
          {/* <Box sx={{ display: "flex" }}>
            <img
              src={ContactUsImage}
              alt="Contact Us"
              style={{ width: "100%" }}
            />
          </Box> */}

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#fff",
              opacity: "0.9",
            }}
          >
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                textAlign: "center",
                color: "#384158",
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
              <FullWidthTextField label={"College"} id={"College"} />

              <Button
                variant="contained"
                sx={{
                  width: { xs: "100%", sm: "70%" },
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
        </Box>
      </Box>

      <Footer />
    </>
  );
}
