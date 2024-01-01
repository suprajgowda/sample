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
          px: {
            xs: 5,
            md: 8,
          },
          py: 2.5,
        }}
      >
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            color: "white",
            fontSize: {
              xs: "1rem",
              md: "1.25rem",
            },
          }}
        >
          SIGN UP FOR NEWS AND OFFERS
        </Typography>

        <Typography
          variant="subtitle1"
          gutterBottom
          sx={{
            color: "white",
            fontSize: {
              xs: "0.8rem",
              md: "1rem",
            },
          }}
        >
          Subcribe to lastest news & great deals we offer
        </Typography>
      </Box>
    </>
  );
}

export default NewsLetter;
