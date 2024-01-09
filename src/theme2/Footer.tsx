import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./Footer.css";

export default function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        pt: { xs: 5, md: 8 },
        px: { xs: 10, md: 20 },
        pb: { xs: 5, md: 8 },
        borderTop: "11px solid #006983",
      }}
    >
      <Box sx={{ mb: 5 }}>
        {/* <img
          src={"https://vamia.fi/wp-content/uploads/2023/03/vamia_logo.png"}
          alt={"Footer Logo"}
          className="footerLogo"
          //   style={{ maxWidth: "300px", borderRadius: "5px" }}
        /> */}
        <Typography
          variant="h3"
          gutterBottom
          sx={{ color: "#006983", mb: 3, fontWeight: 700 }}
        >
          Maple Tech
        </Typography>

        <Box sx={{ my: 3 }}>
          <IconButton
            aria-label="delete"
            size="large"
            sx={{
              backgroundColor: "#006983",
              borderRadius: "15px",
              boxShadow: "5px 5px 0px 0px #EF9780",
              mr: 2,
              "&:hover": {
                backgroundColor: "#006983",
              },
            }}
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
              "&:hover": {
                backgroundColor: "#006983",
              },
            }}
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
        <Box sx={{ flex: 1, mb: { xs: 5, md: 0 } }}>
          <Typography
            variant="h5"
            gutterBottom
            sx={{ color: "#006983", mb: 3, fontWeight: 700 }}
          >
            Contact Information
          </Typography>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ color: "#006983", fontWeight: 500 }}
          >
            Ruutikellarintie 2, 65100 VAASA
          </Typography>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ color: "#006983", fontWeight: 500 }}
          >
            Info: Mon - Fri 8.00-15.45
          </Typography>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ color: "#006983", fontWeight: 500 }}
          >
            Tel. +358 6 325 7411
          </Typography>
        </Box>

        <Box sx={{ flex: 1, mb: { xs: 5, md: 0 } }}>
          <Typography
            variant="h5"
            gutterBottom
            sx={{ color: "#006983", mb: 3, fontWeight: 700 }}
          >
            Browse our selection
          </Typography>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ color: "#006983", fontWeight: 500 }}
          >
            Programmes
          </Typography>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ color: "#006983", fontWeight: 500 }}
          >
            About us
          </Typography>
        </Box>

        <Box sx={{ flex: 1, mb: { xs: 5, md: 0 } }}>
          <Typography
            variant="h5"
            gutterBottom
            sx={{ color: "#006983", mb: 3, fontWeight: 700 }}
          >
            Useful links
          </Typography>

          <Typography
            variant="h6"
            gutterBottom
            sx={{ color: "#006983", fontWeight: 500 }}
          >
            VamiaGuide
          </Typography>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ color: "#006983", fontWeight: 500 }}
          >
            Contact us
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
