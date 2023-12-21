import React from "react";
import { Box, Typography } from "@mui/material";
import ResponsiveAppBar from "./ResponsiveAppBar";
import ResponsiveAppBar2 from "./ResponsiveAppBar2";
import NewsLetter from "./NewsLetter";
import Footer from "./Footer";

const projectDomainList = [
  {
    header: "Artificial Intelligence (AI):",
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
  },
  {
    header: "Natural Language Detection:",
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
  },
  {
    header: "Blockchain:",
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
  },
  {
    header: "Machine Learning:",
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
  },
  {
    header: "Neural Network:",
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
  },
  {
    header: "Cloud Computing:",
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
  },
  {
    header: "Web-Based Projects:",
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
  },
  {
    header: "Aerospace and Thermal:",
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
  },
];

function listOfProjects() {
  return (
    <>
      {projectDomainList.map((domain) => {
        return (
          <>
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" gutterBottom>
                {domain.header}
              </Typography>
            </Box>

            {domain.list.map((dom) => {
              return (
                <Box sx={{ mb: 4 }}>
                  <Typography variant="h6" gutterBottom>
                    {dom.key1}
                  </Typography>{" "}
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    sx={{ color: "#76777a" }}
                  >
                    {dom.value}
                  </Typography>
                </Box>
              );
            })}
          </>
        );
      })}
    </>
  );
}

const listOfSkills = [
  {
    key1: "Real-World Impact:",
    key2: " Our live projects go beyond the realm of hypothetical scenarios. Participants have the opportunity to work on projects that address actual challenges faced by industries today. From developing AI solutions to implementing blockchain technology, our projects have a tangible impact.",
  },
  {
    key1: "Diverse Domains:",
    key2: " Choose from a diverse range of project domains, including Artificial Intelligence, Natural Language Detection, Blockchain, Machine Learning, Neural Networks, Cloud Computing, Web-Based Projects, and Aerospace and Thermal. Whether you're interested in revolutionizing communication or exploring the outer reaches of aerospace engineering, there's a project for you.",
  },
  {
    key1: "Guidance from Industry Experts:",
    key2: " Our projects are guided by industry experts and seasoned professionals who bring invaluable insights to the learning experience. Benefit from mentorship that goes beyond textbooks, providing you with practical knowledge and a deeper understanding of the industry.",
  },
  {
    key1: "Collaborative Learning Environment:",
    key2: " Engage in a collaborative learning environment where teamwork and communication are paramount. Our projects are designed to encourage participants to share ideas, solve challenges together, and foster a sense of camaraderie that extends beyond the project duration.",
  },
  {
    key1: "Career Acceleration:",
    key2: " MAPLE  is not just a platform for learning; it's a launchpad for your career. The skills acquired through our live projects set you apart in the competitive job market, giving you a distinct advantage when entering the professional world.",
  },
  {
    key1: "How It Works:",
    key2: " The process is seamless. Participants choose a project domain of interest, engage in hands-on project work, collaborate with peers, and receive guidance from industry experts. The result? A portfolio of real-world projects that showcase your skills and demonstrate your ability to tackle complex challenges.",
  },
  {
    key1: "Ready to Ignite Your Potential?",
    key2: " Join MAPLE  and unlock the door to a world of innovation and growth. Our live projects are more than just learning experiences; they are opportunities to shape the future of technology. Ignite your curiosity, power your future. Welcome to Live Projects at MAPLE  - where ideas turn into action, and learning becomes an adventure. Explore, create, and transform with us!",
  },
];

export default function Skills() {
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
            Overview of Live Projects at MAPLE
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
            sx={{ textAlign: "center", color: "#76777a", mx: 5, mb: 5 }}
          >
            Embark on a transformative journey where theoretical knowledge meets
            real-world application through our Live Projects at MAPLE . Our
            projects are carefully crafted to provide participants with hands-on
            experience in cutting-edge domains, fostering innovation, and
            preparing them for the dynamic landscape of the tech industry.
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
          {listOfSkills.map((skills) => {
            return (
              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" gutterBottom>
                  {skills.key1}
                </Typography>{" "}
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  sx={{ color: "#76777a" }}
                >
                  {skills.key2}
                </Typography>
              </Box>
            );
          })}
        </Box>

        <Box>
          <Typography
            variant="h3"
            gutterBottom
            sx={{ textAlign: "center", color: "#384158", mb: 2, mt: 11 }}
          >
            Explore Our Project Domains in Detail
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
            sx={{ textAlign: "center", color: "#76777a", mx: 5, mb: 5 }}
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
            width: "100%",
            display: "flex",
            flexDirection: "column",
            bgcolor: "background.paper",
            my: 6,
          }}
        >
          {listOfProjects()}

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" gutterBottom>
              Robotics
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" gutterBottom>
              3D Printer
            </Typography>
          </Box>

          <Box>
            <Typography variant="body1" gutterBottom>
              Each project domain at MAPLE offers a unique learning experience,
              providing participants with the skills and knowledge necessary to
              excel in their chosen field. Join us on this journey of
              exploration, innovation, and growth!
            </Typography>
          </Box>
        </Box>
      </Box>

      <NewsLetter />
      <Footer />
    </>
  );
}
