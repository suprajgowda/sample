import React from "react";
import { Box, Typography } from "@mui/material";
import { DrawerAppBar } from "./HomePage";
import Footer from "./Footer";
import AI from "../assets/ai3.jpg";
import Natural from "../assets/nlp.png";
import Block from "../assets/block-chain.jpg";
import Machine from "../assets/machineLearning2.jpg";
import Neural from "../assets/neural-network.jpg";
import Cloud from "../assets/cloud-computing.jpg";
import Web from "../assets/webprojects.jpg";
import Aero from "../assets/aerospace.jpg";
import Robotics from "../assets/robotics.jpg";
import ThreeD from "../assets/3DPrinter.jpg";
import "./HomePage.css";

const skillsList = [
  {
    title: "Real-World Impact:",
    desc: "Our live projects go beyond the realm of hypothetical scenarios. Participants have the opportunity to work on projects that address actual challenges faced by industries today. From developing AI solutions to implementing blockchain technology, our projects have a tangible impact.",
  },
  {
    title: "Diverse Domains:",
    desc: "Choose from a diverse range of project domains, including Artificial Intelligence, Natural Language Detection, Blockchain, Machine Learning, Neural Networks, Cloud Computing, Web-Based Projects, and Aerospace and Thermal. Whether you're interested in revolutionizing communication or exploring the outer reaches of aerospace engineering, there's a project for you.",
  },
  {
    title: "Guidance from Industry Experts:",
    desc: "Our projects are guided by industry experts and seasoned professionals who bring invaluable insights to the learning experience. Benefit from mentorship that goes beyond textbooks, providing you with practical knowledge and a deeper understanding of the industry.",
  },
  {
    title: "Collaborative Learning Environment:",
    desc: "Engage in a collaborative learning environment where teamwork and communication are paramount. Our projects are designed to encourage participants to share ideas, solve challenges together, and foster a sense of camaraderie that extends beyond the project duration.",
  },
  {
    title: "Career Acceleration:",
    desc: "MAPLE is not just a platform for learning; it's a launchpad for your career. The skills acquired through our live projects set you apart in the competitive job market, giving you a distinct advantage when entering the professional world.",
  },
  {
    title: "How It Works:",
    desc: "The process is seamless. Participants choose a project domain of interest, engage in hands-on project work, collaborate with peers, and receive guidance from industry experts. The result? A portfolio of real-world projects that showcase your skills and demonstrate your ability to tackle complex challenges.",
  },
  {
    title: "Ready to Ignite Your Potential?",
    desc: "Join MAPLE and unlock the door to a world of innovation and growth. Our live projects are more than just learning experiences; they are opportunities to shape the future of technology. Ignite your curiosity, power your future. Welcome to Live Projects at MAPLE - where ideas turn into action, and learning becomes an adventure. Explore, create, and transform with us!",
  },
];

const projectDomainList = [
  {
    header: "Artificial Intelligence (AI):",
    key: "ai",
    list: [
      {
        key1: "Description:",
        value:
          " Explore the vast landscape of AI, delving into machine learning algorithms, computer vision, and natural language processing.",
      },
      {
        key1: "Project Examples:",
        value:
          " Develop chatbots, image recognition systems, and predictive analytics models.",
      },
      {
        key1: "Skills Gained:",
        value: " Programming in Python, machine learning, data analysis.",
      },
    ],
    img: AI,
  },
  {
    header: "Natural Language Detection:",
    key: "nlp",
    list: [
      {
        key1: "Description:",
        value:
          " Focus on projects that involve understanding and interpreting human language, opening doors to applications like chatbots and sentiment analysis.",
      },
      {
        key1: "Project Examples:",
        value:
          " Build language detection systems, sentiment analysis models, and language translation tools.",
      },
      {
        key1: "Skills Gained:",
        value:
          " Natural language processing, text analysis, algorithm development.",
      },
    ],
    img: Natural,
  },
  {
    header: "Blockchain:",
    key: "block",
    list: [
      {
        key1: "Description:",
        value:
          " Immerse yourself in the secure and decentralized world of blockchain technology, exploring applications beyond cryptocurrencies.",
      },
      {
        key1: "Project Examples:",
        value:
          " Develop blockchain solutions for supply chain management, healthcare, and finance.",
      },
      {
        key1: "Skills Gained:",
        value:
          " Smart contract development, decentralized application (DApp) creation, blockchain architecture.",
      },
    ],
    img: Block,
  },
  {
    header: "Machine Learning:",
    key: "machine",
    list: [
      {
        key1: "Description:",
        value:
          " Journey into the fundamentals of machine learning, covering predictive modeling, data analysis, and algorithm implementation.",
      },
      {
        key1: "Project Examples:",
        value:
          " Create machine learning models for prediction, classification, and clustering.",
      },
      {
        key1: "Skills Gained:",
        value:
          " Data preprocessing, model training, evaluation, and optimization.",
      },
    ],
    img: Machine,
  },
  {
    header: "Neural Network:",
    key: "neural",
    list: [
      {
        key1: "Description:",
        value:
          " Unleash the potential of neural networks, designing and training systems for applications like image recognition and speech processing.",
      },
      {
        key1: "Project Examples:",
        value: " Build and implement neural networks for various tasks.",
      },
      {
        key1: "Skills Gained:",
        value: " Deep learning, neural network architecture, model tuning.",
      },
    ],
    img: Neural,
  },
  {
    header: "Cloud Computing:",
    key: "cloud",
    list: [
      {
        key1: "Description:",
        value:
          " Explore the possibilities of cloud computing, developing solutions that leverage the scalability and flexibility of cloud platforms.",
      },
      {
        key1: "Project Examples:",
        value:
          " Design cloud-based applications, deploy services on cloud platforms.",
      },
      {
        key1: "Skills Gained:",
        value: " Cloud architecture, deployment, and management.",
      },
    ],
    img: Cloud,
  },
  {
    header: "Web-Based Projects:",
    key: "web",
    list: [
      {
        key1: "Description:",
        value:
          " Engage in full-stack development, creating interactive and user-friendly web applications.",
      },
      {
        key1: "Project Examples:",
        value:
          " Build dynamic websites, e-commerce platforms, and web-based tools.",
      },
      {
        key1: "Skills Gained:",
        value: " Front-end and back-end development, database management.",
      },
    ],
    img: Web,
  },
  {
    header: "Aerospace and Thermal:",
    key: "aero",
    list: [
      {
        key1: "Description:",
        value:
          " Embark on projects that explore the challenges and innovations in aerospace engineering and thermal technology.",
      },
      {
        key1: "Project Examples:",
        value:
          " Design aircraft systems, optimize thermal efficiency in engineering applications.",
      },
      {
        key1: "Skills Gained:",
        value: " Aerospace engineering principles, thermal system design.",
      },
    ],
    img: Aero,
  },
  {
    header: "Robotics",
    key: "Robotics",
    list: [],
    img: Robotics,
  },
  {
    header: "3D Printer",
    key: "3D Printer",
    list: [],
    img: ThreeD,
  },
];

export default function Skills() {
  return (
    <>
      <DrawerAppBar />

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          mt: { xs: "55px", md: "5%" },
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
            Skills
          </Typography>
          <Typography
            variant="h5"
            component="div"
            sx={{ pb: 2, fontWeight: 700 }}
          >
            Overview of Live Projects at MAPLE
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{ fontWeight: 400, fontSize: { xs: "1rem", sm: "1.25rem" } }}
          >
            Embark on a transformative journey where theoretical knowledge meets
            real-world application through our Live Projects at MAPLE. Our
            projects are carefully crafted to provide participants with hands-on
            experience in cutting-edge domains, fostering innovation, and
            preparing them for the dynamic landscape of the tech industry.
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          mx: { xs: "5%", sm: "10%" },
          mt: "8%",
        }}
      >
        {skillsList.map((skill) => {
          return (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                my: { xs: 5, sm: 10 },
              }}
            >
              <Typography
                variant="h5"
                component="div"
                sx={{ pb: 4, fontWeight: 700 }}
              >
                {skill.title}
              </Typography>

              <Typography
                variant="h6"
                component="div"
                sx={{
                  fontWeight: 400,
                  fontSize: { xs: "1rem", sm: "1.25rem" },
                }}
              >
                {skill.desc}
              </Typography>
            </Box>
          );
        })}

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            my: { xs: 5, sm: 10 },
          }}
        >
          <Typography
            variant="h5"
            component="div"
            sx={{ pb: 4, fontWeight: 700 }}
          >
            Explore Our Project Domains in Detail
          </Typography>

          <Typography
            variant="h6"
            component="div"
            sx={{ fontWeight: 400, fontSize: { xs: "1rem", sm: "1.25rem" } }}
          >
            At MAPLE , we offer a spectrum of project domains, each designed to
            immerse participants in the latest technologies and industry trends.
            Choose your area of interest and dive into a hands-on learning
            experience that goes beyond textbooks. Here's a detailed overview of
            each project domain:
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
          {projectDomainList.map((proj) => {
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
                  src={proj.img}
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
                  {proj.header}
                </Typography>

                {proj.list.map((prjLs) => {
                  return (
                    <>
                      <Typography
                        variant="subtitle1"
                        gutterBottom
                        sx={{
                          textAlign: "left",
                          px: { xs: 2, sm: 4 },
                          mb: 1,
                          fontWeight: 500,
                          fontSize: { xs: "0.75rem", sm: "1rem" },
                        }}
                      >
                        {prjLs.key1}
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
                        {prjLs.value}
                      </Typography>
                    </>
                  );
                })}
              </Box>
            );
          })}
        </Box>

        <Typography
          variant="h6"
          component="div"
          sx={{
            fontWeight: 400,
            mb: 6,
            fontSize: { xs: "1rem", sm: "1.25rem" },
          }}
        >
          Each project domain at MAPLE offers a unique learning experience,
          providing participants with the skills and knowledge necessary to
          excel in their chosen field. Join us on this journey of exploration,
          innovation, and growth!
        </Typography>
      </Box>

      <Footer />
    </>
  );
}
