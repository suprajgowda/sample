import React, { useEffect } from "react";
import { HeaderNew } from "./HomePage";
import { Box, Link, Typography } from "@mui/material";
import Footer from "./Footer";
import Excellence from "../assets/Excellence.png";
import Integrity from "../assets/Integrity.png";
import Innovation from "../assets/Innovation.png";
import Collaboration from "../assets/Collaboration.png";
import Student_Centric_Focus from "../assets/Student_Centric_Focus.png";
import Adaptability from "../assets/Adaptability.jpg";
import Empowerment from "../assets/Empowerment.jpg";
import Continuous_Learning from "../assets/Continuous-Learning.jpg";
import Fun_and_Enjoyment from "../assets/Fun-and-Enjoyment.jpg";
import AboutUsNewBanner from "../assets/aboutUsBanner2.jpg";
import ThreeD from "../assets/3DPrinter.jpg";
import HomePage2 from "../assets/Home-Page-2.jpg";
import Robotics from "../assets/robotics.jpg";
import "./HomePage.css";
import ReactGA from "react-ga4";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

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

const listAbtUs1 = [
  {
    title: "Final Year Engineering Projects",
    desc: "Embark on a journey of discovery with our comprehensive range of engineering projects tailored to various academic levels. From foundational projects for BCA and Diploma students to advanced projects for MTech and MSc scholars, we cater to the diverse needs of the engineering community.",
    image: Continuous_Learning,
  },
  {
    title: "Internship Opportunities",
    desc: "Fuel your academic journey with hands-on experience through our carefully curated internship programs. Gain exposure to real-world challenges, collaborate with industry professionals, and build a solid foundation for your future career.",
    image: Fun_and_Enjoyment,
  },
  {
    title: "Mini Projects",
    desc: "Perfect for those looking to delve into focused, practical applications of engineering concepts, our mini projects offer a condensed yet comprehensive learning experience. These projects are designed to enhance your understanding and skills in specific areas of interest.",
    image: Robotics,
  },
  {
    title: "Meticulous Guidance",
    desc: "At Maple TechX, we understand the importance of guidance in the academic journey. Our team of mentors is committed to providing personalized support, ensuring that you not only complete your projects successfully but also gain valuable insights along the way.",
    image: HomePage2,
  },
];

const listAbtUs2 = [
  {
    title: "Expert Guidance:",
    desc: "Benefit from the wealth of experience our mentors bring to the table.",
    image: Fun_and_Enjoyment,
  },
  {
    title: "Cutting-Edge Projects:",
    desc: "Stay ahead with projects that reflect the latest industry trends and technological advancements.",
    image: ThreeD,
  },
  {
    title: "Holistic Learning:",
    desc: "Our programs are designed to go beyond textbooks, providing a holistic learning experience.",
    image: Continuous_Learning,
  },
  {
    title: "Industry Connections:",
    desc: "Forge valuable connections through our internship programs and industry collaborations.",
    image: Empowerment,
  },
];

export default function AboutUs() {
  useEffect(() => {
    ReactGA._gaCommandSendPageview(window.location.pathname, "");
  }, []);

  return (
    <>
      <HeaderNew />

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <img src={AboutUsNewBanner} alt="Home Page" className="hmp12" />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            p: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Link href="/" underline="none" sx={{ color: "#006983" }}>
              Home
            </Link>
            <ArrowRightIcon sx={{ color: "#f4587a" }} />
            <Typography
              variant="h6"
              component="div"
              sx={{ fontWeight: 400, fontSize: { xs: "0.75rem", sm: "1rem" } }}
            >
              About Us
            </Typography>
          </Box>
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
            About Us
          </Typography>
          <Typography
            variant="h5"
            component="div"
            sx={{ pb: 2, fontWeight: 700 }}
          >
            Welcome to Maple TechX- Your Gateway to Engineering Excellence!
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{ fontWeight: 400, fontSize: { xs: "1rem", sm: "1.25rem" } }}
          >
            At Maple TechX we are on a mission to revolutionize the way
            engineering projects are conceived, developed, and executed. With a
            focus on fostering innovation and cultivating talent, we offer a
            diverse range of services tailored to students pursuing BE, MTech,
            MCA, BCA, MSc, Diploma, and those seeking valuable internships and
            mini-projects.
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
            sx={{ pb: 4, fontWeight: 700, textAlign: "center" }}
          >
            Our Vision
          </Typography>

          <Typography
            variant="h6"
            component="div"
            sx={{
              fontWeight: 400,
              textAlign: "justify",
              fontSize: { xs: "1rem", sm: "1.25rem" },
            }}
          >
            Empowering the next generation of engineers and technologists, Maple
            TechX envisions a future where creativity knows no bounds and
            engineering solutions redefine possibilities.
          </Typography>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", my: 10 }}>
          <Typography
            variant="h5"
            component="div"
            sx={{ pb: 4, fontWeight: 700, textAlign: "center" }}
          >
            Who We Are
          </Typography>

          <Typography
            variant="h6"
            component="div"
            sx={{
              fontWeight: 400,
              textAlign: "justify",
              fontSize: { xs: "1rem", sm: "1.25rem" },
            }}
          >
            Driven by a team of seasoned professionals and passionate educators,
            Maple TechX brings together a wealth of experience in the
            engineering and technology domain. Our experts are dedicated to
            nurturing the skills and talents of aspiring engineers, guiding them
            towards academic success and career excellence.
          </Typography>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", my: 10 }}>
          <Typography
            variant="h3"
            component="div"
            sx={{
              fontWeight: 700,
              textAlign: "center",
              fontSize: { xs: "1.85rem", md: "2.25rem" },
            }}
          >
            Services We Offer
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            {listAbtUs1.map((abt) => {
              return (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: { xs: "100%", sm: "43%" },
                    justifyContent: "space-between",
                    alignItems: "start",
                    border: "1px solid #4b4b4b29",
                    borderTop: "5px solid #006983",
                    boxShadow: "0px 3px 6px #00000029",
                    mx: { xs: 0, sm: 4 },
                    my: { xs: 2, sm: 4 },
                  }}
                >
                  <img
                    src={abt.image}
                    alt={abt.title}
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
                    {abt.title}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    sx={{
                      textAlign: "left",
                      px: { xs: 2, sm: 4 },
                      mb: 3,
                      fontWeight: 400,
                      fontSize: { xs: "0.75rem", sm: "1rem" },
                    }}
                  >
                    {abt.desc}
                  </Typography>
                </Box>
              );
            })}
            {/* {listOfAboutUs.map((aboutUs) => {
              return (
                <Box
                  sx={{
                    my: 4,
                    px: 2,
                    py: 2,
                    mx: { xs: 0, sm: 4 },
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    borderRadius: "5px",
                    boxShadow: "5px 5px 5px #eee",
                    border: "1px solid #dedede",
                    maxWidth: "250px",
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
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{
                      fontSize: { xs: "1rem", sm: "1.25rem" },
                    }}
                  >
                    {aboutUs.key1}
                  </Typography>{" "}
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    sx={{
                      color: "#76777a",
                      fontSize: { xs: "0.75rem", sm: "1rem" },
                    }}
                  >
                    {aboutUs.key2}
                  </Typography>
                </Box>
              );
            })} */}
          </Box>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", my: 0 }}>
          <Typography
            variant="h3"
            component="div"
            sx={{
              fontWeight: 700,
              textAlign: "center",
              fontSize: { xs: "1.85rem", md: "2.25rem" },
            }}
          >
            Why Choose Us?
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            mt: 3,
            mb: 6,
          }}
        >
          {listAbtUs2.map((about) => {
            return (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: { xs: "100%", sm: "43%" },
                  justifyContent: "space-between",
                  alignItems: "start",
                  border: "1px solid #4b4b4b29",
                  borderTop: "5px solid #006983",
                  boxShadow: "0px 3px 6px #00000029",
                  mx: { xs: 0, sm: 4 },
                  my: { xs: 2, sm: 4 },
                }}
              >
                <img
                  src={about.image}
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
                    px: { xs: 2, sm: 4 },
                    my: 2,
                    fontSize: { xs: "1.25rem", sm: "1.5rem" },
                  }}
                >
                  {about.title}
                </Typography>
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  sx={{
                    textAlign: "left",
                    px: { xs: 2, sm: 4 },
                    mb: 3,
                    fontWeight: 400,
                    fontSize: { xs: "0.75rem", sm: "1rem" },
                  }}
                >
                  {about.desc}
                </Typography>
              </Box>
            );
          })}
        </Box>

        <Typography
          variant="h6"
          component="div"
          sx={{
            fontWeight: 400,
            mb: 4,
            fontSize: { xs: "1rem", sm: "1.25rem" },
            textAlign: "center",
          }}
        >
          Join us at Maple TechX and unlock the door to a world of engineering
          possibilities. Let's shape the future together!
        </Typography>

        <Typography
          variant="h6"
          component="div"
          sx={{
            fontWeight: 400,
            mb: 4,
            fontSize: { xs: "1rem", sm: "1.25rem" },
            textAlign: "center",
          }}
        >
          For more information or to get started on your engineering journey,{" "}
          <Link href="/contact-us" underline="none" sx={{ color: "#006983" }}>
            Contact Us.
          </Link>
        </Typography>
      </Box>

      <Footer />
    </>
  );
}
