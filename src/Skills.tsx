import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import ResponsiveAppBar from "./ResponsiveAppBar";
import ResponsiveAppBar2 from "./ResponsiveAppBar2";
import NewsLetter from "./NewsLetter";
import Footer from "./Footer";
import AI from "./assets/ai3.jpg";
import Natural from "./assets/nlp.png";
import Block from "./assets/block-chain.jpg";
import Machine from "./assets/machineLearning2.jpg";
import Neural from "./assets/neural-network.jpg";
import Cloud from "./assets/cloud-computing.jpg";
import Web from "./assets/webprojects.jpg";
import Aero from "./assets/aerospace.jpg";
import Robotics from "./assets/robotics.jpg";
import ThreeD from "./assets/3DPrinter.jpg";
import SkillsBanner from "./assets/skillsbanner.jpg";
import "./AboutUs.css";

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
  },
];

const ListOfProjects = (props: any) => {
  const { handleClickOpen } = props;
  return (
    <>
      {projectDomainList.map((domain, index) => {
        let imageFile;

        if (domain.key === "ai") {
          imageFile = (
            <img src={AI} alt={domain.header} className="skillsImg1" />
          );
        } else if (domain.key === "nlp") {
          imageFile = (
            <img src={Natural} alt={domain.header} className="skillsImg1" />
          );
        } else if (domain.key === "block") {
          imageFile = (
            <img src={Block} alt={domain.header} className="skillsImg1" />
          );
        } else if (domain.key === "machine") {
          imageFile = (
            <img src={Machine} alt={domain.header} className="skillsImg1" />
          );
        } else if (domain.key === "neural") {
          imageFile = (
            <img src={Neural} alt={domain.header} className="skillsImg1" />
          );
        } else if (domain.key === "cloud") {
          imageFile = (
            <img src={Cloud} alt={domain.header} className="skillsImg1" />
          );
        } else if (domain.key === "web") {
          imageFile = (
            <img src={Web} alt={domain.header} className="skillsImg1" />
          );
        } else if (domain.key === "aero") {
          imageFile = (
            <img src={Aero} alt={domain.header} className="skillsImg1" />
          );
        }

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
            key={`${domain.header}-${index}`}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mb: 8,
              flexDirection: {
                xs: "column",
                md: index % 2 === 0 ? "row" : "row-reverse",
              },
              alignItems: { xs: "center", md: "normal" },
            }}
          >
            <Box key={`${domain.header}-${index}`} sx={imageBoxStyle}>
              {imageFile}
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: {
                  xs: "center",
                  md: "start",
                },
              }}
            >
              <Box sx={{ mb: 2 }}>
                <Typography variant="h6" gutterBottom>
                  {domain.header}
                </Typography>
              </Box>

              {domain.list.map((dom) => {
                return (
                  <Box
                    sx={{
                      mb: 1,
                      alignItems: {
                        xs: "center",
                        md: "start",
                      },
                      width: "100%",
                    }}
                  >
                    <Typography
                      variant="h6"
                      gutterBottom
                      sx={{
                        textAlign: {
                          xs: "left",
                          md: "left",
                        },
                      }}
                    >
                      {dom.key1}
                    </Typography>{" "}
                    <Typography
                      variant="subtitle1"
                      gutterBottom
                      sx={{
                        color: "#76777a",
                        textAlign: {
                          xs: "left",
                          md: "left",
                        },
                      }}
                    >
                      {dom.value}
                    </Typography>
                  </Box>
                );
              })}
              <Button
                variant="contained"
                sx={{
                  width: { xs: "50%", md: "30%" },
                  backgroundColor: "#14bdee",
                  "&:hover": {
                    backgroundColor: "#2cb3da",
                  },
                }}
                onClick={handleClickOpen}
              >
                Im Intrested
              </Button>
            </Box>
          </Box>
        );
      })}
    </>
  );
};

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
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <ResponsiveAppBar />
      <ResponsiveAppBar2 />

      <Box sx={{ display: "flex", flexDirection: "column", mx: "10%" }}>
        <Box
          sx={{
            mx: "-12.5%",
            backgroundSize: { xs: "100% 100%", md: "100% 250%" },
            backgroundPositionY: "center",
            backgroundImage: `url(${SkillsBanner})`,
            minHeight: { xs: "500px", md: "350px" },
          }}
        >
          <Box
            sx={{
              backgroundColor: "black",
              opacity: 0.7,
              minHeight: { xs: "500px", md: "350px" },
              position: "absolute",
            }}
          >
            <Typography
              variant="h3"
              gutterBottom
              sx={{
                textAlign: "center",
                color: "#FFF",
                mb: 2,
                mt: 11,
                fontSize: {
                  xs: "1.5rem",
                  md: "3rem",
                },
              }}
            >
              Overview of Live final year projects at MAPLE
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ textAlign: "center", color: "#FFF", mx: 5, mb: 5 }}
            >
              Embark on a transformative journey where theoretical knowledge
              meets real-world application through our Live final year projects
              at MAPLE. Our final year projects are carefully crafted to provide
              participants with hands-on experience in cutting-edge domains,
              fostering innovation, and preparing them for the dynamic landscape
              of the tech industry.
            </Typography>
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
          {listOfSkills.map((skills, index) => {
            return (
              <Box key={`${skills.key1}-${index}`} sx={{ mb: 4 }}>
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
            sx={{
              textAlign: "center",
              color: "#384158",
              mb: 2,
              mt: 11,
              fontSize: {
                xs: "1.5rem",
                md: "3rem",
              },
            }}
          >
            Explore Our Project Domains in Detail
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
            sx={{
              textAlign: "center",
              color: "#76777a",
              mx: {
                xs: 1,
                md: 5,
              },
              mb: 5,
            }}
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
          <ListOfProjects handleClickOpen={handleClickOpen} />

          <Box
            sx={{
              mb: 4,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: {
                xs: "column-reverse",
                md: "row",
              },
            }}
          >
            <Typography variant="h6" gutterBottom>
              Robotics
            </Typography>
            <img src={Robotics} alt={"Robotics"} className="skillsImg1" />
          </Box>

          <Box
            sx={{
              mb: 4,
              display: "flex",
              alignItems: "center",
              flexDirection: {
                xs: "column",
                md: "row",
              },
            }}
          >
            <img src={ThreeD} alt={"3D Printer"} className="skillsImg1" />
            <Typography variant="h6" gutterBottom sx={{ ml: 4 }}>
              3D Printer
            </Typography>
          </Box>

          <Box>
            <Typography
              variant="body1"
              gutterBottom
              sx={{
                textAlign: {
                  xs: "center",
                  md: "left",
                },
              }}
            >
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

      <FormDialogue
        open={open}
        setOpen={setOpen}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
      />
    </>
  );
}

const FormDialogue = (props: any) => {
  const { open, handleClose } = props;

  return (
    <React.Fragment>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address and
            Phone Number here. We will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Phone Number"
            type="phone"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};
