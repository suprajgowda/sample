import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { HeaderNew } from "./HomePage";
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
import SkillsBanner2 from "../assets/skills-banner-2.jpg";
import "./HomePage.css";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { textDB } from "../App";
import ReactGA from "react-ga4";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

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
    title: "Ready to Ignite Your Potential ?",
    desc: "Join MAPLE and unlock the door to a world of innovation and growth. Our live projects are more than just learning experiences; they are opportunities to shape the future of technology. Ignite your curiosity, power your future. Welcome to Live Projects at MAPLE - where ideas turn into action, and learning becomes an adventure. Explore, create, and transform with us!",
  },
];

export const PROJECT_DOMAIN_LIST = [
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
          "Embark on projects that explore the challenges and innovations in aerospace engineering and thermal technology.",
      },
      {
        key1: "Project Examples:",
        value:
          "Design aircraft systems, optimize thermal efficiency in engineering applications.",
      },
      {
        key1: "Skills Gained:",
        value: "Aerospace engineering principles, thermal system design.",
      },
    ],
    img: Aero,
  },
  {
    header: "Robotics",
    key: "Robotics",
    list: [
      {
        key1: "Description:",
        value:
          "Develop a web-based control system for a robot, allowing users to remotely control its movements, interact with sensors, and monitor its status.",
      },
      {
        key1: "Project Examples:",
        value:
          "Build a robotic arm control system, a mobile robot with camera integration, or a drone control platform.",
      },
      {
        key1: "Skills Gained:",
        value:
          "Front-end development for the control interface, back-end for processing user commands and interfacing with the robot's hardware, and database management for storing sensor data.",
      },
    ],
    img: Robotics,
  },
  {
    header: "3D Printer",
    key: "3D Printer",
    list: [
      {
        key1: "Description:",
        value:
          "Create a web-based platform for managing and controlling 3D printers. Users should be able to upload, customize, and monitor their 3D printing jobs remotely.",
      },
      {
        key1: "Project Examples:",
        value:
          "Develop a cloud-based 3D printing service, a platform for managing multiple 3D printers, or a collaborative environment for sharing 3D printing projects.",
      },
      {
        key1: "Skills Gained:",
        value:
          "Front-end for job submission and monitoring, back-end for handling print job processing and communication with 3D printers, and database management for job tracking.",
      },
    ],
    img: ThreeD,
  },
];

export default function Skills() {
  const [open, setOpen] = React.useState(false);
  const [triggerType, setTriggerType] = React.useState("");

  const handleClickOpen = (trigger: any) => {
    setTriggerType(trigger);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
          // mt: { xs: "55px", md: "5%" },
        }}
      >
        <img src={SkillsBanner2} alt="Skills Page" className="hmp12" />
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
              Skills
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
              mt: 2,
            }}
          >
            Final Year Projects
          </Typography>

          <Typography
            variant="h6"
            component="div"
            sx={{
              fontWeight: 700,
              fontSize: { xs: "1rem", sm: "1rem" },
              pb: 2,
              color: "#fc6c47",
            }}
          >
            BE / MTECH / MCA / BCA / MSC / DIPLOMA / INTERNSHIP / MINI PROJECT
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
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          mt: { xs: 5, sm: 8 },
          mb: { xs: 0, sm: 0 },
          mx: { xs: "5%", sm: "10%" },
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
          mx: { xs: "5%", sm: "10%" },
          mt: "3%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            my: 6,
          }}
        >
          {PROJECT_DOMAIN_LIST.map((proj) => {
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
                <img src={proj.img} alt={proj.header} className="skillsImg" />

                <Typography
                  variant="h5"
                  component="div"
                  sx={{
                    fontWeight: 700,
                    textAlign: "left",
                    width: { xs: "auto", sm: "100%" },
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

                <Box
                  sx={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "center",
                    mb: 4,
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#006983",
                      width: { xs: "50%", sm: "30%" },
                      "&:hover": {
                        backgroundColor: "#006983",
                      },
                    }}
                    onClick={() => handleClickOpen(proj.header)}
                  >
                    Apply
                  </Button>
                </Box>
              </Box>
            );
          })}
        </Box>

        {skillsList.map((skill) => {
          return (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                my: { xs: 4, sm: 4 },
              }}
            >
              <Typography
                variant="h5"
                component="div"
                sx={{ pb: 1, fontWeight: 700 }}
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

      <FormDialogue
        open={open}
        setOpen={setOpen}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
        formType={"skills"}
        triggerType={triggerType}
      />
    </>
  );
}

export const FormDialogue = (props: any) => {
  const { open, handleClose, formType, triggerType } = props;
  const [contactInfo, setContactInfo] = useState<any>({
    name: "",
    email: "",
    phone_number: "",
    branch: "",
    college: "",
    message: "",
    createdAt: "",
  });

  const onChangeFunction = (e: any) => {
    const inputId = e.target.id;
    const inputValue = e.target.value;
    console.log("inputId      = ", inputId);
    console.log("inputValue   = ", inputValue);

    let tempObj: any = {};
    tempObj[inputId] = inputValue;
    console.log("The Existing info in contact info Object = ", tempObj);

    setContactInfo({ ...contactInfo, ...tempObj });
  };

  const onSubmit = async () => {
    console.log("contactInfo to send ------ ", contactInfo);
    if (
      contactInfo.name !== "" &&
      contactInfo.email !== "" &&
      contactInfo.phone_number !== "" &&
      contactInfo.branch !== "" &&
      contactInfo.college !== ""
    ) {
      contactInfo.createdAt = serverTimestamp();

      const valRef = collection(textDB, formType);

      let contactInfo2Save = { ...contactInfo, intrestedIn: triggerType };

      await addDoc(valRef, { contactInfo: contactInfo2Save });

      setContactInfo({
        name: "",
        email: "",
        phone_number: "",
        branch: "",
        college: "",
        message: "",
        createdAt: "",
      });

      alert("Data added successfully");
    } else if (contactInfo.name === "") {
      alert("Please Enter Name");
    } else if (contactInfo.email === "") {
      alert("Please Enter Email");
    } else if (contactInfo.phone_number === "") {
      alert("Please Enter Phone Number");
    } else if (contactInfo.branch === "") {
      alert("Please Enter Branch");
    } else if (contactInfo.college === "") {
      alert("Please Enter College");
    }
    handleClose();
  };

  return (
    <React.Fragment>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ color: "#006983" }}>Apply</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To Apply to this website, please enter your details here. We will
            send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
            sx={{
              "& label.Mui-focused": {
                color: "#006983",
              },
              "& div:after": {
                borderBottom: "2px solid #006983",
              },
            }}
            onChange={onChangeFunction}
          />
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            sx={{
              "& label.Mui-focused": {
                color: "#006983",
              },
              "& div:after": {
                borderBottom: "2px solid #006983",
              },
            }}
            onChange={onChangeFunction}
          />
          <TextField
            autoFocus
            margin="dense"
            id="phone_number"
            label="Phone Number"
            type="phone"
            fullWidth
            variant="standard"
            sx={{
              "& label.Mui-focused": {
                color: "#006983",
              },
              "& div:after": {
                borderBottom: "2px solid #006983",
              },
            }}
            onChange={onChangeFunction}
          />
          <TextField
            autoFocus
            margin="dense"
            id="branch"
            label="Designation / Branch"
            type="text"
            fullWidth
            variant="standard"
            sx={{
              "& label.Mui-focused": {
                color: "#006983",
              },
              "& div:after": {
                borderBottom: "2px solid #006983",
              },
            }}
            onChange={onChangeFunction}
          />
          <TextField
            autoFocus
            margin="dense"
            id="college"
            label="Organization / College"
            type="text"
            fullWidth
            variant="standard"
            sx={{
              "& label.Mui-focused": {
                color: "#006983",
              },
              "& div:after": {
                borderBottom: "2px solid #006983",
              },
            }}
            onChange={onChangeFunction}
          />
          <TextField
            id="message"
            label="Message"
            multiline
            rows={4}
            variant="standard"
            sx={{ width: "100%" }}
            onChange={onChangeFunction}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={{ color: "#006983" }}>
            Cancel
          </Button>
          <Button onClick={onSubmit} sx={{ color: "#006983" }}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};
