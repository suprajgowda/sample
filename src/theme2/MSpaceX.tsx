import React from "react";
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import { HeaderNew } from "./HomePage";
import Footer from "./Footer";
import EventsBanner from "../assets/events-banner.jpg";
import Spacex from "../assets/spacex.jpg";

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

        <Box sx={{ mb: 3, mx: { xs: 0, sm: 4 } }}>
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontWeight: 700,
              fontSize: { xs: "1rem", sm: "1.25rem" },
              mb: { xs: 0, sm: 2 },
            }}
          >
            Week 1: "Galactic Discovery"
          </Typography>
          <ul>
            <li style={{ marginBottom: 10 }}>
              Introduction to the solar system
            </li>

            <li style={{ marginBottom: 10 }}>Planetarium visit</li>

            <li style={{ marginBottom: 10 }}>
              Model rocket building and launch
            </li>
          </ul>

          <Typography
            variant="h6"
            component="div"
            sx={{
              fontWeight: 700,
              fontSize: { xs: "1rem", sm: "1.25rem" },
              mb: { xs: 0, sm: 2 },
            }}
          >
            Week 2: "Mission to Mars"
          </Typography>
          <ul>
            <li style={{ marginBottom: 10 }}>Mars rover simulations</li>

            <li style={{ marginBottom: 10 }}>
              Martian landscape diorama creation
            </li>

            <li style={{ marginBottom: 10 }}>
              Guest speaker from the space industry
            </li>
          </ul>

          <Typography
            variant="h6"
            component="div"
            sx={{
              fontWeight: 700,
              fontSize: { xs: "1rem", sm: "1.25rem" },
              mb: { xs: 0, sm: 2 },
            }}
          >
            Week 3: "Astronaut Training"
          </Typography>
          <ul>
            <li style={{ marginBottom: 10 }}>
              Virtual reality spacewalk experience
            </li>

            <li style={{ marginBottom: 10 }}>Build a mini space station</li>

            <li style={{ marginBottom: 10 }}>
              Q&A session with an astronaut (virtual or in-person)
            </li>
          </ul>

          <Typography
            variant="h6"
            component="div"
            sx={{
              fontWeight: 700,
              fontSize: { xs: "1rem", sm: "1.25rem" },
              mb: { xs: 0, sm: 2 },
            }}
          >
            Week 4: "Stellar Explorations"
          </Typography>
          <ul>
            <li style={{ marginBottom: 10 }}>Star-gazing night</li>

            <li style={{ marginBottom: 10 }}>DIY telescope construction</li>

            <li style={{ marginBottom: 10 }}>
              Design your own alien life form
            </li>
          </ul>
        </Box>

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
