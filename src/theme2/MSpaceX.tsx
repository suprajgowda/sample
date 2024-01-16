import React from "react";
import { Box, Typography } from "@mui/material";
import { HeaderNew } from "./HomePage";
import Footer from "./Footer";
import Spacex from "../assets/spacex.jpg";
import GalaticDiscovery from "../assets/GalaticDiscovery.jpg";
import Mission_to_Mars from "../assets/Mission_to_Mars.jpg";
import AstronautTraining from "../assets/AstronautTraining.jpg";
import StellarExplorations from "../assets/StellarExplorations.jpg";

const WeekList = [
  {
    header: 'Week 1: "Galactic Discovery"',
    list: [
      "Introduction to the solar system",
      "Planetarium visit",
      "Model rocket building and launch",
    ],
    img: GalaticDiscovery,
  },
  {
    header: 'Week 2: "Mission to Mars"',
    list: [
      "Mars rover simulations",
      "Martian landscape diorama creation",
      "Guest speaker from the space industry",
    ],
    img: Mission_to_Mars,
  },
  {
    header: 'Week 3: "Astronaut Training"',
    list: [
      "Virtual reality spacewalk experience",
      "Build a mini space station",
      "Q&A session with an astronaut (virtual or in-person)",
    ],
    img: AstronautTraining,
  },
  {
    header: 'Week 4: "Stellar Explorations"',
    list: [
      "Star-gazing night",
      "DIY telescope construction",
      "Design your own alien life form",
    ],
    img: StellarExplorations,
  },
];

export default function MSpaceX() {
  return (
    <>
      <HeaderNew />

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          // mt: { xs: "55px", md: "5%" },
        }}
      >
        <img src={Spacex} alt="Events Page" className="hmp12" />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            p: 3,
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              textAlign: "left",
              color: "#384158",
              left: { xs: "5%", md: "15%" },
              fontSize: { xs: "25px", md: "40px" },
              fontWeight: 700,
              pb: 2,
              mt: 2,
            }}
          >
            Ready to Reach for the Stars ?
          </Typography>

          <Typography
            variant="h6"
            component="div"
            sx={{
              fontWeight: 400,
              fontSize: { xs: "1rem", sm: "1.25rem" },
              textAlign: "justify",
            }}
          >
            Secure your spot in Astro Explores and embark on a transformative
            journey that will redefine your perspective of the universe. Whether
            you dream of becoming an astronaut, contributing to space research,
            or simply experiencing the thrill of space travel, our program is
            your launchpad to the cosmos.
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          mx: "10%",
          mt: "8%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontWeight: 700,
              fontSize: { xs: "1rem", sm: "1.25rem" },
              textAlign: "center",
              mb: { xs: 0, sm: 5 },
            }}
          >
            Apply Now and Ignite Your Passion for Space Exploration!
          </Typography>

          <Typography
            variant="h6"
            component="div"
            sx={{
              fontWeight: 400,
              fontSize: { xs: "1rem", sm: "1.25rem" },
              textAlign: { xs: "justify", sm: "center" },
              mb: { xs: 5, sm: 5 },
            }}
          >
            Overview: Immerse your kids in an out-of-this-world adventure with
            our Astro Explorers Summer Camp! This dynamic program combines fun
            and educational activities to ignite their curiosity about space and
            science.
          </Typography>
        </Box>

        {/* <Box sx={{ mb: 3, mx: { xs: 0, sm: 4 } }}> */}
        <Box
          sx={{
            display: "flex",
            // mx: { xs: "5%", md: "10%" },
            my: 8,
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          {WeekList.map((week) => {
            return (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  maxWidth: "450px",
                  borderRadius: "50px",
                  boxShadow: "0px 3px 35px 0px rgba(0, 0, 0, 0.29)",
                  mx: { xs: 0, sm: 2 },
                  my: 4,
                  width: { xs: "100%", sm: "50%" },
                }}
              >
                <Box
                  sx={{
                    backgroundSize: "150% 100%",
                    backgroundPositionY: "center",
                    backgroundImage: `url(${week.img})`,
                    height: { xs: "250px", sm: "auto" },
                    width: { xs: "100%", sm: "100%" },
                    borderRadius: {
                      xs: "50px 0px 0px 0px",
                      sm: "0px 0px 0px 50px",
                    },
                    backgroundRepeat: "no-repeat",
                    backgroundPositionX: "40%",
                  }}
                ></Box>
                <Box
                  sx={{
                    backgroundColor: "#fff",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    p: 2.5,
                    borderRadius: {
                      xs: "0px 0px 50px 0px",
                      sm: "0px 50px 0px 0px",
                    },
                    width: { xs: "auto", sm: "100%" },
                    height: "300px",
                  }}
                >
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{
                      fontWeight: 700,
                      fontSize: { xs: "1rem", sm: "1.15rem" },
                      mb: { xs: 0, sm: 2 },
                    }}
                  >
                    {week.header}
                  </Typography>

                  <ul>
                    {week.list.map((wk) => (
                      <li style={{ marginBottom: 10 }}>{wk}</li>
                    ))}
                  </ul>
                </Box>
              </Box>
            );
          })}
        </Box>
        {/* </Box> */}

        <Typography
          variant="h6"
          component="div"
          sx={{
            fontWeight: 400,
            fontSize: { xs: "1rem", sm: "1.25rem" },
            textAlign: { xs: "justify", sm: "center" },
            mb: { xs: 1, sm: 5 },
          }}
        >
          Each week includes hands-on projects, interactive learning, and
          collaborative challenges. Our goal is to inspire future scientists,
          engineers, and space enthusiasts. Join us for a summer of astronomical
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            mx: { xs: 0, sm: 2 },
            mb: 4,
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontWeight: 700,
              fontSize: { xs: "1rem", sm: "1.25rem" },
              textAlign: "left",
              mb: { xs: 1, sm: 1 },
            }}
          >
            Who Should Apply?
          </Typography>

          <Box sx={{ mx: { xs: 0, sm: 2 } }}>
            <ul>
              <li style={{ marginBottom: 20 }}>
                <b>Space Enthusiasts:</b> If you've always dreamt of reaching
                for the stars and exploring the unknown, this program is for
                you.
              </li>

              <li style={{ marginBottom: 20 }}>
                <b>Students and Graduates:</b> Pursue a career in space science,
                engineering, or astronautics and gain a competitive edge in the
                industry.
              </li>

              <li style={{ marginBottom: 20 }}>
                <b>Professionals Seeking a Challenge:</b> Take a break from the
                ordinary and challenge yourself with an experience that
                transcends the boundaries of Earth.
              </li>
            </ul>
          </Box>
        </Box>
      </Box>

      <Footer />
    </>
  );
}
