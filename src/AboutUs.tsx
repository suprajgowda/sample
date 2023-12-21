import React from "react";
import ResponsiveAppBar from "./ResponsiveAppBar";
import ResponsiveAppBar2 from "./ResponsiveAppBar2";
import NewsLetter from "./NewsLetter";
import Footer from "./Footer";
import { Box, Typography } from "@mui/material";

const listOfAboutUs = [
  {
    key1: "Excellence:",
    key2: " Striving for and delivering the highest standards in education.",
  },
  {
    key1: "Integrity:",
    key2: " Upholding honesty, transparency, and ethical conduct.",
  },
  {
    key1: "Innovation:",
    key2: " Embracing creativity and staying at the forefront of educational advancements.",
  },
  {
    key1: "Collaboration:",
    key2: " Fostering teamwork, open communication, and diverse perspectives.",
  },
  {
    key1: "Student-Centric Focus:",
    key2: " Prioritizing the needs and growth of our students.",
  },
];

const listOfAboutUs1 = [
  {
    key1: "Inclusivity:",
    key2: " Celebrating diversity and creating an inclusive environment.",
  },
  {
    key1: "Continuous Learning:",
    key2: " Encouraging ongoing knowledge-seeking and adaptability.",
  },
  {
    key1: "Empowerment:",
    key2: " Fostering autonomy, initiative, and leadership.",
  },
  {
    key1: "Flexibility and Adaptability:",
    key2: " Navigating change with resilience and responsivenes.",
  },
  {
    key1: "Fun and Enjoyment:",
    key2: " Creating a positive and enjoyable atmosphere for a vibrant community.",
  },
];

const listOfAboutUs2 = [
  {
    key1: "Live Projects, Real Experience:",
    key2: "We understand the importance of practical knowledge in today's fast-evolving tech landscape. Our live projects ensure that students don't just learn theories but also get hands-on experience in solving real-world challenges.",
  },
  {
    key1: "Diverse Domains, Endless Possibilities:",
    key2: "Our projects span across diverse domains, including AI, ML, Neural Networks, Robotics, and Thermal Technology. This variety allows students to explore their interests and choose projects that align with their career goals.",
  },
  {
    key1: "Expert Guidance:",
    key2: "At MAPLE , we have a team of experienced professionals and mentors who guide students throughout their project journey. Our experts bring industry insights and academic expertise to ensure a comprehensive learning experience.",
  },
  {
    key1: "Collaborative Learning Environment:",
    key2: "We believe in the power of collaboration. Our projects are designed to encourage teamwork, communication, and innovation. Students work together, share ideas, and learn from each other, fostering a collaborative learning environment.",
  },
  {
    key1: "Industry-Relevant Skills:",
    key2: "Our projects are carefully curated to equip students with skills that are highly sought after in the industry. Whether it's programming in Python, designing neural networks, or developing robotic systems, our projects focus on building practical, industry-relevant skills.",
  },
  {
    key1: "Career Acceleration:",
    key2: "MAPLE isn't just about completing projects; it's about accelerating your career. The experience gained through our live projects sets students apart in the job market, making them stand out to potential employers.",
  },
];

export default function AboutUs() {
  return (
    <>
      <ResponsiveAppBar />
      <ResponsiveAppBar2 />

      <Box sx={{ display: "flex", flexDirection: "column", mx: "10%" }}>
        <Box>
          <Typography
            variant="h3"
            gutterBottom
            sx={{ textAlign: "center", color: "#384158", mb: 2, mt: 11 }}
          >
            Vision
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
            sx={{ textAlign: "center", color: "#76777a", mx: 5, mb: 5 }}
          >
            "Empowering Tomorrow's Industry Leaders: Our vision is to provide
            industry-ready education that transcends traditional boundaries,
            shaping graduates who lead with expertise and hands-on skills."
          </Typography>
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
            <Typography variant="h5" gutterBottom>
              Values
            </Typography>
          </Box>

          {listOfAboutUs.map((aboutUs) => {
            return (
              <Box sx={{ mb: 4 }}>
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

          {listOfAboutUs1.map((aboutUs) => {
            return (
              <Box sx={{ mb: 4 }}>
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

          {listOfAboutUs2.map((aboutUs) => {
            return (
              <Box sx={{ mb: 4 }}>
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

      <NewsLetter />
      <Footer />
    </>
  );
}
