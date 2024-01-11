import React from "react";
import { DrawerAppBar } from "./HomePage";
import Footer from "./Footer";
import { Box, Typography } from "@mui/material";

export default function Events() {
  return (
    <>
      <DrawerAppBar />

      <Box sx={{ display: "flex", mt: "5%" }}>
        <img
          src="https://vamia.fi/wp-content/uploads/2023/06/brooke-cagle-uHVRvDr7pg-unsplash.jpg"
          alt="Home Page"
          style={{ width: "60%" }}
        />
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
            Events
          </Typography>
          <Typography
            variant="h5"
            component="div"
            sx={{ pb: 2, fontWeight: 700 }}
          >
            What is a Hackathon ?
          </Typography>
          <Typography variant="h6" component="div" sx={{ fontWeight: 400 }}>
            Welcome to the InnovateCode Hackathon, where innovation meets
            collaboration! If you're new to the concept of a hackathon, you're
            in for an exciting journey into the heart of creative
            problem-solving and technological exploration.
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          mx: "10%",
          mt: "8%",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", my: 10 }}>
          <Typography
            variant="h5"
            component="div"
            sx={{ pb: 4, fontWeight: 700 }}
          >
            Defining the Hackathon Experience
          </Typography>

          <Typography variant="h6" component="div" sx={{ fontWeight: 400 }}>
            A hackathon is an intensive, time-limited event that gathers
            individuals with diverse skills, ranging from coding and design to
            entrepreneurship and project management. Participants, often
            referred to as "hackers," come together to form teams and
            collaborate on projects, usually centered around a specific theme or
            problem statement.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            my: 6,
          }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8].map((e) => {
            return (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "43%",
                  justifyContent: "space-between",
                  alignItems: "center",
                  border: "1px solid #4b4b4b29",
                  borderTop: "5px solid #006983",
                  boxShadow: "0px 3px 6px #00000029",
                  mx: 4,
                  my: 4,
                }}
              >
                <img
                  src="https://vamia.fi/wp-content/uploads/2023/06/brooke-cagle-uHVRvDr7pg-unsplash.jpg"
                  alt="Home Page"
                  style={{ width: "100%", height: "100%" }}
                />

                <Typography
                  variant="h5"
                  component="div"
                  sx={{
                    fontWeight: 700,
                    textAlign: "left",
                    width: "100%",
                    px: 4,
                    my: 2,
                  }}
                >
                  Team Collaboration
                </Typography>

                <Typography
                  variant="subtitle1"
                  gutterBottom
                  sx={{ textAlign: "left", px: 4, mb: 4, fontWeight: 500 }}
                >
                  Participants form teams, bringing together their unique skills
                  and perspectives. Collaboration is encouraged, fostering an
                  environment of shared learning and creativity.
                </Typography>
              </Box>
            );
          })}
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", mt: 12, mb: 6 }}>
          <Typography
            variant="h3"
            component="div"
            sx={{ pb: 0, fontWeight: 700 }}
          >
            Why Participate in a Hackathon?
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
              my: 6,
            }}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((e) => {
              return (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "43%",
                    justifyContent: "space-between",
                    alignItems: "center",
                    border: "1px solid #4b4b4b29",
                    borderTop: "5px solid #006983",
                    boxShadow: "0px 3px 6px #00000029",
                    mx: 4,
                    my: 4,
                  }}
                >
                  <img
                    src="https://vamia.fi/wp-content/uploads/2023/06/brooke-cagle-uHVRvDr7pg-unsplash.jpg"
                    alt="Home Page"
                    style={{ width: "100%", height: "100%" }}
                  />

                  <Typography
                    variant="h5"
                    component="div"
                    sx={{
                      fontWeight: 700,
                      textAlign: "left",
                      width: "100%",
                      px: 4,
                      my: 2,
                    }}
                  >
                    Team Collaboration
                  </Typography>

                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    sx={{ textAlign: "left", px: 4, mb: 4, fontWeight: 500 }}
                  >
                    Participants form teams, bringing together their unique
                    skills and perspectives. Collaboration is encouraged,
                    fostering an environment of shared learning and creativity.
                  </Typography>
                </Box>
              );
            })}
          </Box>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", my: 10 }}>
          <Typography
            variant="h5"
            component="div"
            sx={{ pb: 4, fontWeight: 700 }}
          >
            InnovateCode Hackathon: Your Gateway to Innovation!
          </Typography>

          <Typography variant="h6" component="div" sx={{ fontWeight: 400 }}>
            At InnovateCode, we believe in the power of collaboration and the
            limitless potential of creative minds. Our hackathon is designed to
            provide a platform where participants can push their boundaries,
            learn from one another, and turn their ideas into reality. Join us
            on this exciting journey, where innovation knows no bounds, and
            together, we'll shape the future of technology!
          </Typography>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", my: 10 }}>
          <Typography
            variant="h5"
            component="div"
            sx={{ pb: 4, fontWeight: 700 }}
          >
            Welcome to [Your Organization's] Hackathon Collaboration
            Opportunity!
          </Typography>

          <Typography variant="h6" component="div" sx={{ fontWeight: 400 }}>
            Are you passionate about fostering innovation, supporting emerging
            talent, and contributing to the ever-evolving landscape of
            technology? If so, collaborating with us in our upcoming hackathon
            could be the perfect opportunity for you and your organization.
          </Typography>
        </Box>
      </Box>

      <Footer />
    </>
  );
}
