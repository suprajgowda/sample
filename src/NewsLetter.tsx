import * as React from "react";
import { Box, Typography } from "@mui/material";
import NewsLetterImg from "./assets/newsletter.jpg";

function NewsLetter() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          backgroundImage: `url(${NewsLetterImg})`,
          px: 8,
          py: 2.5,
        }}
      >
        <Typography variant="h6" gutterBottom sx={{ color: "white" }}>
          SIGN UP FOR NEWS AND OFFERS
        </Typography>

        <Typography variant="subtitle1" gutterBottom sx={{ color: "white" }}>
          Subcribe to lastest news & great deals we offer
        </Typography>
      </Box>
    </>
  );
}

export default NewsLetter;
