import React from "react";
import ResponsiveAppBar from "./ResponsiveAppBar";
import ResponsiveAppBar2 from "./ResponsiveAppBar2";
import NewsLetter from "./NewsLetter";
import Footer from "./Footer";
import { Box, Typography } from "@mui/material";
import Adaptability from "./assets/Adaptability.jpg";
import Empowerment from "./assets/Empowerment.jpg";
import Career_Acceleration from "./assets/Career_Acceleration.jpg";
import Continuous_Learning from "./assets/Continuous-Learning.jpg";
import Collaborative from "./assets/Collaborative Learning Environment.jpg";
import Endless_Possibilities from "./assets/Endless-Possibilities.jpg";
import Expert_Guidance from "./assets/Expert-Guidance.jpg";
import Fun_and_Enjoyment from "./assets/Fun-and-Enjoyment.jpg";
import Industry_Relevant_Skills from "./assets/Industry-Relevant-Skills.jpg";
import Live_Projects from "./assets/Live_Projects.jpg";
import Collaboration from "./assets/Collaboration.png";
import Excellence from "./assets/Excellence.png";
import Innovation from "./assets/Innovation.png";
import Integrity from "./assets/Integrity.png";
import Student_Centric_Focus from "./assets/Student_Centric_Focus.png";
import AboutUsBanner from "./assets/aboutusbanner.jpg";
import "./AboutUs.css";

const listOfAboutUs = [
  {
    key1: "Excellence",
    key2: " Striving for and delivering the highest standards in education.",
    img: Excellence,
  },
  {
    key1: "Integrity",
    key2: " Upholding honesty, transparency, and ethical conduct.",
    img: Integrity,
  },
  {
    key1: "Innovation",
    key2: " Embracing creativity and staying at the forefront of educational advancements.",
    img: Innovation,
  },
  {
    key1: "Collaboration",
    key2: " Fostering teamwork, open communication, and diverse perspectives.",
    img: Collaboration,
  },
  {
    key1: "Student-Centric Focus",
    key2: " Prioritizing the needs and growth of our students.",
    img: Student_Centric_Focus,
  },
];

const listOfAboutUs1 = [
  {
    key1: "Inclusivity:",
    key2: " Celebrating diversity and creating an inclusive environment.",
    image: Empowerment,
  },
  {
    key1: "Continuous Learning:",
    key2: " Encouraging ongoing knowledge-seeking and adaptability.",
    image: Continuous_Learning,
  },
  {
    key1: "Empowerment:",
    key2: " Fostering autonomy, initiative, and leadership.",
    image: Empowerment,
  },
  {
    key1: "Flexibility and Adaptability:",
    key2: " Navigating change with resilience and responsivenes.",
    image: Adaptability,
  },
  {
    key1: "Fun and Enjoyment:",
    key2: " Creating a positive and enjoyable atmosphere for a vibrant community.",
    image: Fun_and_Enjoyment,
  },
];

const listOfAboutUs2 = [
  {
    key1: "Live Projects, Real Experience:",
    key2: "We understand the importance of practical knowledge in today's fast-evolving tech landscape. Our live projects ensure that students don't just learn theories but also get hands-on experience in solving real-world challenges.",
    image: Live_Projects,
  },
  {
    key1: "Diverse Domains, Endless Possibilities:",
    key2: "Our projects span across diverse domains, including AI, ML, Neural Networks, Robotics, and Thermal Technology. This variety allows students to explore their interests and choose projects that align with their career goals.",
    image: Endless_Possibilities,
  },
  {
    key1: "Expert Guidance:",
    key2: "At MAPLE , we have a team of experienced professionals and mentors who guide students throughout their project journey. Our experts bring industry insights and academic expertise to ensure a comprehensive learning experience.",
    image: Expert_Guidance,
  },
  {
    key1: "Collaborative Learning Environment:",
    key2: "We believe in the power of collaboration. Our projects are designed to encourage teamwork, communication, and innovation. Students work together, share ideas, and learn from each other, fostering a collaborative learning environment.",
    image: Collaborative,
  },
  {
    key1: "Industry-Relevant Skills:",
    key2: "Our projects are carefully curated to equip students with skills that are highly sought after in the industry. Whether it's programming in Python, designing neural networks, or developing robotic systems, our projects focus on building practical, industry-relevant skills.",
    image: Industry_Relevant_Skills,
  },
  {
    key1: "Career Acceleration:",
    key2: "MAPLE isn't just about completing projects; it's about accelerating your career. The experience gained through our live projects sets students apart in the job market, making them stand out to potential employers.",
    image: Career_Acceleration,
  },
];

export default function AboutUs() {
  return (
    <>
      <ResponsiveAppBar />
      <ResponsiveAppBar2 />

      <Box sx={{ display: "flex", flexDirection: "column", mx: "10%" }}>
        <Box
          sx={{
            mx: "-12.5%",
            backgroundSize: { xs: "145% 100%", md: "100% 250%" },
            backgroundPositionY: "center",
            backgroundPositionX: "center",
            backgroundImage: `url(${AboutUsBanner})`,
            minHeight: "350px",
          }}
        >
          <Box
            sx={{
              backgroundColor: "black",
              opacity: 0.65,
              minHeight: "350px",
              position: "absolute",
            }}
          >
            <Typography
              variant="h3"
              gutterBottom
              sx={{ textAlign: "center", color: "#FFF", mb: 2, mt: 11 }}
            >
              Vision
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ textAlign: "center", color: "#FFF", mx: 5, mb: 5 }}
            >
              "Empowering Tomorrow's Industry Leaders: Our vision is to provide
              industry-ready education that transcends traditional boundaries,
              shaping graduates who lead with expertise and hands-on skills."
            </Typography>
          </Box>
        </Box>

        <Box>
          <Typography
            variant="h3"
            gutterBottom
            sx={{ textAlign: "center", color: "#384158", mb: 2, mt: 11 }}
          >
            Mission
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
            sx={{ textAlign: "center", color: "#76777a", mx: 5, mb: 5 }}
          >
            "At Maple TechX, we are on a mission to revolutionize education with
            hands-on, skill-based learning. Our commitment is to equip students
            with practical expertise, ensuring they thrive in real-world
            industry scenarios and make a significant impact."
          </Typography>
        </Box>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            bgcolor: "background.paper",
            my: 6,
          }}
        >
          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h3"
              gutterBottom
              sx={{ textAlign: "center", color: "#384158" }}
            >
              Values
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            {listOfAboutUs.map((aboutUs) => {
              return (
                <Box
                  sx={{
                    my: 4,
                    px: 2,
                    py: 2,
                    mx: 4,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    borderRadius: "5px",
                    boxShadow: "5px 5px 5px #eee",
                    maxWidth: "200px",
                  }}
                >
                  <img
                    src={aboutUs.img}
                    alt={aboutUs.key1}
                    style={{
                      maxWidth: "50px",
                      borderRadius: "5px",
                      margin: "25px",
                    }}
                  />
                  <Typography variant="h6" gutterBottom>
                    {aboutUs.key1}
                  </Typography>{" "}
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    sx={{ color: "#76777a" }}
                  >
                    {aboutUs.key2}
                  </Typography>
                </Box>
              );
            })}
          </Box>
        </Box>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            bgcolor: "background.paper",
            my: 6,
          }}
        >
          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" gutterBottom>
              Culture
            </Typography>
          </Box>

          {listOfAboutUs1.map((aboutUs, index) => {
            let imageBoxStyle: any = {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            };

            if (index % 2 === 0) {
              imageBoxStyle["pr"] = 2;
            } else {
              imageBoxStyle["pl"] = 2;
            }

            return (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mb: 8,
                  flexDirection: {
                    xs: "column",
                    md: index % 2 === 0 ? "row" : "row-reverse",
                  },
                }}
              >
                <Box sx={imageBoxStyle}>
                  <img
                    src={aboutUs.image}
                    alt={aboutUs.key1}
                    className="cultureImg"
                  />
                </Box>
                <Box
                  sx={{
                    mb: 4,
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <Typography variant="h6" gutterBottom>
                    {aboutUs.key1}
                  </Typography>{" "}
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    sx={{ color: "#76777a" }}
                  >
                    {aboutUs.key2}
                  </Typography>
                </Box>
              </Box>
            );
          })}
        </Box>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            bgcolor: "background.paper",
            my: 6,
          }}
        >
          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" gutterBottom>
              Why Choose MAPLE TechX ?
            </Typography>
          </Box>

          {listOfAboutUs2.map((aboutUs, index) => {
            let imageBoxStyle: any = {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            };

            if (index % 2 === 0) {
              imageBoxStyle["pr"] = 2;
            } else {
              imageBoxStyle["pl"] = 2;
            }

            let boxStyle: any = {
              display: "flex",
              justifyContent: "space-between",
              mb: 8,
              p: 2,
              flexDirection: {
                xs: "column",
                md: index % 2 === 0 ? "row" : "row-reverse",
              },
            };

            if (index % 2 === 0) {
              boxStyle["boxShadow"] = "6px 5px 5px #e7f3f7";
              boxStyle["backgroundColor"] = "#f7fdff";
              boxStyle["borderRadius"] = "5px";
            }

            return (
              <Box sx={boxStyle}>
                <Box sx={imageBoxStyle}>
                  <img
                    src={aboutUs.image}
                    alt={aboutUs.key1}
                    className="chooseMapleImg"
                  />
                </Box>
                <Box
                  sx={{
                    mb: 4,
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <Typography variant="h6" gutterBottom>
                    {aboutUs.key1}
                  </Typography>{" "}
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    sx={{ color: "#76777a" }}
                  >
                    {aboutUs.key2}
                  </Typography>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>

      <NewsLetter />
      <Footer />
    </>
  );
}
