import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import HomeSlider from "./assets/home_slider_1.jpg";
import Award from "./assets/award.png";
import Book from "./assets/book.png";
import Courses from "./assets/courses.png";
import Experts from "./assets/experts.png";
import MediaCard from "./MediaCard";
import Course1 from "./assets/course_1.jpg";
import Course2 from "./assets/course_2.jpg";
import Course3 from "./assets/course_3.jpg";
import CourseBk from "./assets/courses_background.jpg";

function Home() {
  const imgBoxStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    mt: 5,
  };

  const imageStyle = {
    minHeight: "50px",
    width: "50px",
    minWidth: "50px",
  };

  return (
    <>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          textAlign: "center",
          color: "#384158",
          position: "absolute",
          top: "35%",
          left: "15%",
        }}
      >
        Welcome to Maple - Where Innovation Meets Opportinity!
      </Typography>
      <Box
        // component="img"
        sx={{
          minHeight: "500px",
          width: "100%",
          minWidth: "100%",
          backgroundSize: "150% 140%",
          backgroundPositionY: "90%",
          backgroundImage: `url(${HomeSlider})`,
        }}
        // alt="The house from the offer."
        // src={HomeSlider}
      />

      <Box>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ textAlign: "center", color: "#384158", mb: 2, mt: 11 }}
        >
          Welcome To Unicat E-Learning
        </Typography>
        <Typography
          variant="body2"
          gutterBottom
          sx={{ textAlign: "center", color: "#76777a", mb: 5 }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
          gravida arcu. Vestibulum feugiat, sapien ultrices fermentum congue,
          quam velit venenatis sem
        </Typography>
      </Box>

      <Grid
        container
        spacing={{ xs: 2, md: 4 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{ mb: 10 }}
      >
        <Grid item xs={2} sm={3} md={3}>
          <Box sx={imgBoxStyle}>
            <Box
              component="img"
              sx={imageStyle}
              alt="The house from the offer."
              src={Experts}
            />

            <Typography
              variant="h6"
              gutterBottom
              sx={{ color: "#384158", textAlign: "center" }}
            >
              The Experts
            </Typography>

            <Typography
              variant="body2"
              gutterBottom
              sx={{ textAlign: "center", color: "#76777a" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={2} sm={3} md={3}>
          <Box sx={imgBoxStyle}>
            <Box
              component="img"
              sx={imageStyle}
              alt="The house from the offer."
              src={Book}
            />

            <Typography
              variant="h6"
              gutterBottom
              sx={{ color: "#384158", textAlign: "center" }}
            >
              Book & Library
            </Typography>

            <Typography
              variant="body2"
              gutterBottom
              sx={{ textAlign: "center", color: "#76777a" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={2} sm={3} md={3}>
          <Box sx={imgBoxStyle}>
            <Box
              component="img"
              sx={imageStyle}
              alt="The house from the offer."
              src={Courses}
            />

            <Typography
              variant="h6"
              gutterBottom
              sx={{ color: "#384158", textAlign: "center" }}
            >
              Best Courses
            </Typography>

            <Typography
              variant="body2"
              gutterBottom
              sx={{ textAlign: "center", color: "#76777a" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={2} sm={3} md={3}>
          <Box sx={imgBoxStyle}>
            <Box
              component="img"
              sx={imageStyle}
              alt="The house from the offer."
              src={Award}
            />

            <Typography
              variant="h6"
              gutterBottom
              sx={{ color: "#384158", textAlign: "center" }}
            >
              Award & Reward
            </Typography>

            <Typography
              variant="body2"
              gutterBottom
              sx={{ textAlign: "center", color: "#76777a" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundImage: `url(${CourseBk})`,
          pb: 10,
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{ textAlign: "center", color: "#384158", mb: 2, mt: 11 }}
        >
          Popular Online Courses
        </Typography>
        <Typography
          variant="body2"
          gutterBottom
          sx={{ textAlign: "center", color: "#76777a", mb: 5 }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
          gravida arcu. Vestibulum feugiat, sapien ultrices fermentum congue,
          quam velit venenatis sem
        </Typography>

        <Grid
          container
          spacing={{ xs: 2, md: 4 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          sx={{
            justifyContent: "space-evenly",
          }}
        >
          <Grid item xs={2} sm={3} md={3}>
            <MediaCard cardImg={Course1} />
          </Grid>
          <Grid item xs={2} sm={3} md={3}>
            <MediaCard cardImg={Course2} />
          </Grid>
          <Grid item xs={2} sm={3} md={3}>
            <MediaCard cardImg={Course3} />
          </Grid>
        </Grid>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: 4,
            pt: 2,
          }}
        >
          <Button variant="contained" sx={{ maxWidth: "15%" }}>
            View All Courses
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default Home;
