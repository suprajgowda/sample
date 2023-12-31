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
          left: { xs: "5%", md: "15%" },
          fontSize: { xs: "1.5rem", md: "2.125rem" },
        }}
      >
        Welcome to Maple - Where Innovation Meets Opportunity!
      </Typography>
      <Box
        sx={{
          minHeight: { xs: "400px", md: "500px" },
          width: "100%",
          minWidth: "100%",
          backgroundSize: { xs: "230% 100%", md: "150% 140%" },
          backgroundPositionY: "90%",
          backgroundImage: `url(${HomeSlider})`,
        }}
      />

      <Box>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            textAlign: "center",
            color: "#384158",
            mb: 2,
            mt: 11,
            fontSize: { xs: "1.5rem", md: "2.125rem" },
          }}
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
            fontSize: { xs: "0.9rem", md: "1.25rem" },
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
              minHeight: {
                xs: "250px",
                md: "350px",
              },
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
                minHeight: {
                  xs: "250px",
                  md: "350px",
                },
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
                  fontSize: { xs: "0.9rem", md: "1.25rem" },
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
            fontSize: { xs: "0.9rem", md: "1.25rem" },
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
              minHeight: {
                xs: "250px",
                md: "350px",
              },
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
                minHeight: {
                  xs: "250px",
                  md: "350px",
                },
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
                  fontSize: { xs: "0.9rem", md: "1.25rem" },
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
            fontSize: { xs: "0.9rem", md: "1.25rem" },
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
              minHeight: {
                xs: "250px",
                md: "350px",
              },
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
                minHeight: {
                  xs: "250px",
                  md: "350px",
                },
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
                  fontSize: { xs: "0.9rem", md: "1.25rem" },
                }}
              >
                Let's embark on this adventure together. Ignite your mind, power
                your future!
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <NewsLetter />
      <Footer />
    </>
  );
}

export default Home;
