import React from "react";
import { Box, Typography } from "@mui/material";
import HomeSlider from "./assets/home_slider_1.jpg";
import ResponsiveAppBar2 from "./ResponsiveAppBar2";
import ResponsiveAppBar from "./ResponsiveAppBar";
import Footer from "./Footer";
import NewsLetter from "./NewsLetter";
import HomePageBanner2 from "./assets/homepage_banner_2.jpg";
import HomePageBanner3 from "./assets/homepage_banner_3.jpg";
import HomePageBanner4 from "./assets/homepage_banner_4.jpg";

function Home() {
  return (
    <>
      <ResponsiveAppBar />
      <ResponsiveAppBar2 />

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
        Welcome to Maple - Where Innovation Meets Opportunity!
      </Typography>
      <Box
        sx={{
          minHeight: "500px",
          width: "100%",
          minWidth: "100%",
          backgroundSize: "150% 140%",
          backgroundPositionY: "90%",
          backgroundImage: `url(${HomeSlider})`,
        }}
      />

      <Box>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ textAlign: "center", color: "#384158", mb: 2, mt: 11 }}
        >
          Welcome to Maple - Where Innovation Meets Opportunity!
        </Typography>

        <Typography
          variant="h6"
          gutterBottom
          sx={{
            textAlign: "center",
            color: "#76777a",
            mx: 5,
            mt: 5,
            mb: 10,
            fontWeight: "lighter",
          }}
        >
          At MAPLE , we extend a warm and enthusiastic welcome to all aspiring
          minds ready to embark on a transformative journey. We believe in the
          power of innovation and the endless possibilities that arise when
          curiosity meets real-world experience.
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box
            sx={{
              backgroundPositionY: "30%",
              backgroundImage: `url(${HomePageBanner2})`,
              minHeight: "350px",
              backgroundSize: "100% 200%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "black",
                opacity: 0.65,
                minHeight: "350px",
                position: "absolute",
              }}
            >
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  textAlign: "center",
                  color: "#FFF",
                  mx: 5,
                  my: 5,
                  fontWeight: "lighter",
                }}
              >
                As you step into our digital space, you enter a realm where
                theoretical knowledge transforms into practical skills, and
                classrooms extend beyond walls into the dynamic landscapes of
                AI, Machine Learning, Blockchain, Robotics, and more. Here, we
                are not just a startup; we are a community of forward-thinkers,
                tech enthusiasts, and learners ready to shape the future.
              </Typography>
            </Box>
          </Box>
        </Box>

        <Typography
          variant="h6"
          gutterBottom
          sx={{
            textAlign: "center",
            color: "#76777a",
            mx: 5,
            mt: 15,
            mb: 15,
            fontWeight: "lighter",
          }}
        >
          Our commitment is simple: to provide students with live projects that
          go beyond traditional learning. These are not mere assignments; they
          are opportunities to explore, experiment, and contribute to the
          ever-evolving world of technology. Whether you are passionate about
          unraveling the mysteries of Neural Networks, exploring the potential
          of Blockchain, or pushing the boundaries of Cloud Computing,MAPLE is
          your platform for growth.
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box
            sx={{
              backgroundPositionY: "center",
              backgroundImage: `url(${HomePageBanner3})`,
              minHeight: "350px",
              backgroundSize: "100% 150%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "black",
                opacity: 0.65,
                minHeight: "350px",
                position: "absolute",
              }}
            >
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  textAlign: "center",
                  color: "#FFF",
                  mx: 5,
                  my: 5,
                  fontWeight: "lighter",
                }}
              >
                We invite you to discover the domains of expertise that await
                you, guided by industry experts and a collaborative learning
                environment. Our projects are designed not only to equip you
                with industry-relevant skills but also to ignite your passion
                for innovation.
              </Typography>
            </Box>
          </Box>
        </Box>

        <Typography
          variant="h6"
          gutterBottom
          sx={{
            textAlign: "center",
            color: "#76777a",
            mx: 5,
            my: 15,
            fontWeight: "lighter",
          }}
        >
          Join us on this exciting journey where ideas take flight, and the
          future is shaped by the collective brilliance of aspiring minds.
          Welcome toMAPLE - where learning knows no boundaries, and your
          potential becomes the driving force for tomorrow's technology.
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box
            sx={{
              backgroundPositionY: "35%",
              backgroundImage: `url(${HomePageBanner4})`,
              minHeight: "350px",
              backgroundSize: "100% 185%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "black",
                opacity: 0.65,
                minHeight: "350px",
                position: "absolute",
                width: "100%",
              }}
            >
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  textAlign: "center",
                  color: "#FFF",
                  mx: 5,
                  my: 5,
                  fontWeight: "lighter",
                }}
              >
                Let's embark on this adventure together. Ignite your mind, power
                your future!
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* <Grid
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
      </Box> */}

      <NewsLetter />
      <Footer />
    </>
  );
}

export default Home;
