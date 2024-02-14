import React from "react";
import { Box, Fab, IconButton, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./Footer.css";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CallIcon from "@mui/icons-material/Call";

export default function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        pt: { xs: 3, md: 8 },
        px: { xs: 3, md: 20 },
        pb: { xs: 3, md: 8 },
        borderTop: "11px solid #006983",
      }}
    >
      <Box
        sx={{
          mb: 5,
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "start", sm: "center" },
        }}
      >
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            color: "#006983",
            m: 0,
            fontWeight: 700,
            mr: 4,
            fontSize: { xs: "1.75rem", md: "2.5rem" },
          }}
        >
          Maple Tech X
        </Typography>

        <Box sx={{ my: 0 }}>
          <IconButton
            aria-label="delete"
            size="large"
            sx={{
              backgroundColor: "#006983",
              borderRadius: "15px",
              boxShadow: "5px 5px 0px 0px #EF9780",
              mr: 2,
              p: 1,
              mt: { xs: 2, sm: 0 },
              "&:hover": {
                backgroundColor: "#006983",
              },
            }}
            href="https://www.facebook.com/people/Maple-TechX/61556152647517/"
            target="_blank"
          >
            <FacebookIcon fontSize="inherit" sx={{ color: "#fff" }} />
          </IconButton>

          <IconButton
            aria-label="delete"
            size="large"
            sx={{
              backgroundColor: "#006983",
              borderRadius: "15px",
              boxShadow: "5px 5px 0px 0px #FDB2C2",
              mr: 2,
              p: 1,
              mt: { xs: 2, sm: 0 },
              "&:hover": {
                backgroundColor: "#006983",
              },
            }}
            href="https://www.instagram.com/mapletechx/"
            target="_blank"
          >
            <InstagramIcon fontSize="inherit" sx={{ color: "#fff" }} />
          </IconButton>

          <IconButton
            aria-label="delete"
            size="large"
            sx={{
              backgroundColor: "#006983",
              borderRadius: "15px",
              boxShadow: "5px 5px 0px 0px #D6E3C5",
              mr: 2,
              p: 1,
              mt: { xs: 2, sm: 0 },
              "&:hover": {
                backgroundColor: "#006983",
              },
            }}
          >
            <YouTubeIcon fontSize="inherit" sx={{ color: "#fff" }} />
          </IconButton>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ flex: 2, mb: { xs: 5, md: 0 }, mr: { xs: 0, sm: 6 } }}>
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              color: "#006983",
              mb: 3,
              fontWeight: 700,
              fontSize: { xs: "1.25rem", md: "1.5rem" },
            }}
          >
            Contact Information
          </Typography>
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              color: "#006983",
              fontWeight: 500,
              fontSize: { xs: "1rem", md: "1.25rem" },
            }}
          >
            Brahmi Building, 218/19, 28th Cross Road, 2nd Block, Rajajinagar,
            Bengaluru, Karnataka 560010
          </Typography>
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              color: "#006983",
              fontWeight: 500,
              fontSize: { xs: "1rem", md: "1.25rem" },
            }}
          >
            Info: Mon - Fri 8.00-6.00
          </Typography>
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              color: "#006983",
              fontWeight: 500,
              fontSize: { xs: "1rem", md: "1.25rem" },
            }}
          >
            Tel. +91 8310973377
          </Typography>
        </Box>

        <Box sx={{ flex: 2, mb: { xs: 5, md: 0 } }}>
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              color: "#006983",
              mb: 3,
              fontWeight: 700,
              fontSize: { xs: "1.25rem", md: "1.5rem" },
            }}
          >
            Browse our selection
          </Typography>

          <Typography variant="h6" gutterBottom>
            <Typography
              variant="h6"
              gutterBottom
              component="a"
              href="/skills"
              sx={{
                color: "#006983",
                fontWeight: 500,
                fontSize: { xs: "1rem", md: "1.25rem", textDecoration: "none" },
              }}
            >
              Skills and Training
            </Typography>
          </Typography>

          <Typography variant="h6" gutterBottom>
            <Typography
              variant="h6"
              gutterBottom
              component="a"
              href="/events"
              sx={{
                color: "#006983",
                fontWeight: 500,
                fontSize: { xs: "1rem", md: "1.25rem", textDecoration: "none" },
              }}
            >
              Events
            </Typography>
          </Typography>

          <Typography variant="h6" gutterBottom>
            <Typography
              variant="h6"
              gutterBottom
              component="a"
              href="/skills"
              sx={{
                color: "#006983",
                fontWeight: 500,
                fontSize: { xs: "1rem", md: "1.25rem", textDecoration: "none" },
              }}
            >
              Projects
            </Typography>
          </Typography>
        </Box>

        <Box sx={{ flex: 1, mb: { xs: 5, md: 0 } }}>
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              color: "#006983",
              mb: 3,
              fontWeight: 700,
              fontSize: { xs: "1.25rem", md: "1.5rem", textDecoration: "none" },
            }}
          >
            Useful links
          </Typography>

          <Typography variant="h6" gutterBottom>
            <Typography
              variant="h6"
              gutterBottom
              component="a"
              href="/contact-us"
              sx={{
                color: "#006983",
                fontWeight: 500,
                fontSize: { xs: "1rem", md: "1.25rem", textDecoration: "none" },
              }}
            >
              Contact us
            </Typography>
          </Typography>

          <Typography variant="h6" gutterBottom>
            <Typography
              variant="h6"
              gutterBottom
              component="a"
              href="/about-us"
              sx={{
                color: "#006983",
                fontWeight: 500,
                fontSize: { xs: "1rem", md: "1.25rem", textDecoration: "none" },
              }}
            >
              About us
            </Typography>
          </Typography>
        </Box>
      </Box>

      <Fab
        size="medium"
        color="secondary"
        aria-label="add"
        sx={{
          position: "fixed",
          bottom: "5%",
          left: "2%",
          backgroundColor: "#0dc043",
          "&:hover": {
            backgroundColor: "#0dc043",
          },
        }}
        href="https://wa.me/8310973377"
      >
        <WhatsAppIcon />
      </Fab>

      <Fab
        size="medium"
        color="secondary"
        aria-label="add"
        sx={{
          position: "fixed",
          bottom: "5%",
          right: "2%",
          backgroundColor: "#267bc0",
          "&:hover": {
            backgroundColor: "#267bc0",
          },
        }}
        href="tel:8310973377"
      >
        <CallIcon />
      </Fab>
    </Box>
  );
}
