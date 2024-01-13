import React from "react";
import { DrawerAppBar, HeaderNew } from "./HomePage";
import Footer from "./Footer";
import { Box, Typography } from "@mui/material";
import TeamCollImage from "../assets/Team_Collaboration.jpg";
import TimeBound from "../assets/Time_Bound_Challenges.jpg";
import Innovation from "../assets/Innovation_and_Creativity.jpg";
import LearningOpp from "../assets/Learning_Opportunities.jpg";
import ProjectShowcase from "../assets/Project_Showcase.jpg";
import PriceAndRecognition from "../assets/price_and_recognition.jpg";
import Skill from "../assets/skillDevelopment.jpg";
import Networking from "../assets/networking.jpg";
import ProblemSolving from "../assets/problemSolving.jpg";
import "./HomePage.css";

const events1 = [
  {
    img: TeamCollImage,
    title: "Team Collaboration",
    desc: "Participants form teams, bringing together their unique skills and perspectives. Collaboration is encouraged, fostering an environment of shared learning and creativity.",
  },
  {
    img: TimeBound,
    title: "Time-Bound Challenges",
    desc: "Hackathons typically run for a fixed period, often spanning a weekend or a specific number of hours. The time constraint adds an element of urgency, pushing participants to think on their feet and deliver results quickly.",
  },
  {
    img: Innovation,
    title: "Innovation and Creativity",
    desc: "Participants are challenged to think innovatively and creatively to solve problems. The freedom to explore new technologies and ideas often leads to groundbreaking solutions.",
  },
  {
    img: LearningOpp,
    title: "Learning Opportunities",
    desc: "Workshops, mentorship sessions, and expert talks provide valuable learning opportunities. Participants can enhance their skills, learn about the latest technologies, and gain insights from industry professionals.",
  },
  {
    img: ProjectShowcase,
    title: "Project Showcase and Judging",
    desc: "Teams present their projects to a panel of judges or industry experts. Projects are evaluated based on criteria such as creativity, functionality, and overall impact.",
  },
  {
    img: PriceAndRecognition,
    title: "Prizes and Recognition",
    desc: "Exciting prizes and recognition are awarded to winning teams. Sponsors often contribute prizes, creating additional motivation for participants.",
  },
];

const events2 = [
  {
    img: Skill,
    title: "Skill Development:",
    desc: "Hackathons offer a hands-on learning experience, allowing participants to sharpen their technical and teamwork skills.",
  },
  {
    img: Networking,
    title: "Networking:",
    desc: "Connect with like-minded individuals, industry professionals, and potential collaborators.",
  },
  {
    img: ProblemSolving,
    title: "Real-World Problem Solving:",
    desc: "Tackle real-world challenges and contribute to innovative solutions that may have a positive impact.",
  },
];

export default function Events() {
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
        <img
          src="https://vamia.fi/wp-content/uploads/2023/06/brooke-cagle-uHVRvDr7pg-unsplash.jpg"
          alt="Home Page"
          className="hmp1"
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
          <Typography
            variant="h6"
            component="div"
            sx={{ fontWeight: 400, fontSize: { xs: "1rem", sm: "1.25rem" } }}
          >
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

          <Typography
            variant="h6"
            component="div"
            sx={{ fontWeight: 400, fontSize: { xs: "1rem", sm: "1.25rem" } }}
          >
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
          {events1.map((event1) => {
            return (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: { xs: "100%", sm: "43%" },
                  justifyContent: "space-between",
                  alignItems: "center",
                  border: "1px solid #4b4b4b29",
                  borderTop: "5px solid #006983",
                  boxShadow: "0px 3px 6px #00000029",
                  mx: { xs: 0, sm: 4 },
                  my: { xs: 2, sm: 4 },
                }}
              >
                <img
                  src={event1.img}
                  alt={event1.title}
                  style={{ width: "100%", height: "100%" }}
                />

                <Typography
                  variant="h5"
                  component="div"
                  sx={{
                    fontWeight: 700,
                    textAlign: "left",
                    width: "100%",
                    px: { xs: 2, sm: 4 },
                    my: 2,
                    fontSize: { xs: "1.25rem", sm: "1.5rem" },
                  }}
                >
                  {event1.title}
                </Typography>

                <Typography
                  variant="subtitle1"
                  gutterBottom
                  sx={{
                    textAlign: "left",
                    px: { xs: 2, sm: 4 },
                    mb: 4,
                    fontWeight: 500,
                    fontSize: { xs: "0.75rem", sm: "1rem" },
                  }}
                >
                  {event1.desc}
                </Typography>
              </Box>
            );
          })}
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            mt: { xs: 8, sm: 12 },
            mb: 6,
          }}
        >
          <Typography
            variant="h3"
            component="div"
            sx={{
              pb: 0,
              fontWeight: 700,
              fontSize: { xs: "2rem", sm: "3rem" },
            }}
          >
            Why Participate in a Hackathon?
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
              my: { xs: 0, sm: 6 },
            }}
          >
            {events2.map((event2) => {
              return (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: { xs: "100%", sm: "43%" },
                    justifyContent: "space-between",
                    alignItems: "center",
                    border: "1px solid #4b4b4b29",
                    borderTop: "5px solid #006983",
                    boxShadow: "0px 3px 6px #00000029",
                    mx: { xs: 0, sm: 4 },
                    my: { xs: 2, sm: 4 },
                  }}
                >
                  <img
                    src={event2.img}
                    alt={event2.title}
                    style={{ width: "100%", height: "100%" }}
                  />

                  <Typography
                    variant="h5"
                    component="div"
                    sx={{
                      fontWeight: 700,
                      textAlign: "left",
                      width: "100%",
                      px: { xs: 2, sm: 4 },
                      my: 2,
                      fontSize: { xs: "1.25rem", sm: "1.5rem" },
                    }}
                  >
                    {event2.title}
                  </Typography>

                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    sx={{
                      textAlign: "left",
                      px: { xs: 2, sm: 4 },
                      mb: 4,
                      fontWeight: 500,
                      fontSize: { xs: "0.75rem", sm: "1rem" },
                    }}
                  >
                    {event2.desc}
                  </Typography>
                </Box>
              );
            })}
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            my: { xs: 5, md: 10 },
          }}
        >
          <Typography
            variant="h5"
            component="div"
            sx={{
              pb: 4,
              fontWeight: 700,
              fontSize: { xs: "1.25rem", md: "1.5rem" },
            }}
          >
            InnovateCode Hackathon: Your Gateway to Innovation!
          </Typography>

          <Typography
            variant="h6"
            component="div"
            sx={{ fontWeight: 400, fontSize: { xs: "1rem", md: "1.25rem" } }}
          >
            At InnovateCode, we believe in the power of collaboration and the
            limitless potential of creative minds. Our hackathon is designed to
            provide a platform where participants can push their boundaries,
            learn from one another, and turn their ideas into reality. Join us
            on this exciting journey, where innovation knows no bounds, and
            together, we'll shape the future of technology!
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            my: { xs: 5, md: 10 },
          }}
        >
          <Typography
            variant="h5"
            component="div"
            sx={{
              pb: 4,
              fontWeight: 700,
              fontSize: { xs: "1.25rem", md: "1.5rem" },
            }}
          >
            Welcome to [Your Organization's] Hackathon Collaboration
            Opportunity!
          </Typography>

          <Typography
            variant="h6"
            component="div"
            sx={{ fontWeight: 400, fontSize: { xs: "1rem", md: "1.25rem" } }}
          >
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
