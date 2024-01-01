import React from "react";
import { Box, Typography } from "@mui/material";
import ResponsiveAppBar from "./ResponsiveAppBar";
import ResponsiveAppBar2 from "./ResponsiveAppBar2";
import NewsLetter from "./NewsLetter";
import Footer from "./Footer";
import HackthonImage from "./assets/hackathon.jpg";
import Skill from "./assets/skillDevelopment.jpg";
import Networking from "./assets/networking.jpg";
import ProblemSolving from "./assets/problemSolving.jpg";
import TeamCollImage from "./assets/Team_Collaboration.jpg";
import TimeBound from "./assets/Time_Bound_Challenges.jpg";
import Innovation from "./assets/Innovation_and_Creativity.jpg";
import LearningOpp from "./assets/Learning_Opportunities.jpg";
import ProjectShowcase from "./assets/Project_Showcase.jpg";
import PriceAndRecognition from "./assets/price_and_recognition.jpg";

export default function Events() {
  return (
    <>
      <ResponsiveAppBar />
      <ResponsiveAppBar2 />

      <Box sx={{ display: "flex", flexDirection: "column", mx: "10%" }}>
        <Box
          sx={{
            mx: "-12.5%",
            backgroundSize: "100% 250%",
            backgroundPositionY: "center",
            backgroundImage: `url(${HackthonImage})`,
            minHeight: "350px",
          }}
        >
          <Box
            sx={{
              backgroundColor: "black",
              opacity: 0.7,
              minHeight: "350px",
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
                  xs: "2rem",
                  md: "3rem",
                },
              }}
            >
              What is a Hackathon ?
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ textAlign: "center", color: "#FFF", mx: 5, mb: 5 }}
            >
              Welcome to the InnovateCode Hackathon, where innovation meets
              collaboration! If you're new to the concept of a hackathon, you're
              in for an exciting journey into the heart of creative
              problem-solving and technological exploration.
            </Typography>
          </Box>
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
            Defining the Hackathon Experience
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
            sx={{
              textAlign: "center",
              color: "#76777a",
              mx: {
                xs: 0,
                md: 5,
              },
              mb: 5,
            }}
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
            width: "100%",
            display: "flex",
            flexDirection: "column",
            bgcolor: "background.paper",
            my: 6,
          }}
        >
          <Box
            sx={{
              mb: 4,
              display: "flex",
              flexDirection: {
                xs: "column",
                md: "row",
              },
              alignItems: {
                xs: "center",
                md: "start",
              },
            }}
          >
            <Box>
              <img
                src={TeamCollImage}
                alt={"Team Collaboration"}
                style={{ maxWidth: "300px", borderRadius: "5px" }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                ml: {
                  xs: 0,
                  md: 3,
                },
              }}
            >
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  textAlign: {
                    xs: "center",
                    md: "left",
                  },
                }}
              >
                Team Collaboration
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  sx={{
                    color: "#76777a",
                    textAlign: {
                      xs: "center",
                      md: "left",
                    },
                  }}
                >
                  Participants form teams, bringing together their unique skills
                  and perspectives.
                </Typography>
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  sx={{
                    color: "#76777a",
                    textAlign: {
                      xs: "center",
                      md: "left",
                    },
                  }}
                >
                  Collaboration is encouraged, fostering an environment of
                  shared learning and creativity.
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              mb: 4,
              display: "flex",
              flexDirection: {
                xs: "column",
                md: "row",
              },
              alignItems: {
                xs: "center",
                md: "start",
              },
            }}
          >
            <Box>
              <img
                src={TimeBound}
                alt={"Time-Bound Challenges"}
                style={{ maxWidth: "300px", borderRadius: "5px" }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                ml: {
                  xs: 0,
                  md: 3,
                },
              }}
            >
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  textAlign: {
                    xs: "center",
                    md: "left",
                  },
                }}
              >
                Time-Bound Challenges
              </Typography>
              <Box>
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  sx={{
                    color: "#76777a",
                    textAlign: {
                      xs: "center",
                      md: "left",
                    },
                  }}
                >
                  Hackathons typically run for a fixed period, often spanning a
                  weekend or a specific number of hours.
                </Typography>
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  sx={{
                    color: "#76777a",
                    textAlign: {
                      xs: "center",
                      md: "left",
                    },
                  }}
                >
                  The time constraint adds an element of urgency, pushing
                  participants to think on their feet and deliver results
                  quickly.
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              mb: 4,
              display: "flex",
              flexDirection: {
                xs: "column",
                md: "row",
              },
              alignItems: {
                xs: "center",
                md: "start",
              },
            }}
          >
            <Box>
              <img
                src={Innovation}
                alt={"Innovation and Creativity"}
                style={{ maxWidth: "300px", borderRadius: "5px" }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                ml: {
                  xs: 0,
                  md: 3,
                },
              }}
            >
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  textAlign: {
                    xs: "center",
                    md: "left",
                  },
                }}
              >
                Innovation and Creativity
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  sx={{
                    color: "#76777a",
                    textAlign: {
                      xs: "center",
                      md: "left",
                    },
                  }}
                >
                  Participants are challenged to think innovatively and
                  creatively to solve problems.
                </Typography>
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  sx={{
                    color: "#76777a",
                    textAlign: {
                      xs: "center",
                      md: "left",
                    },
                  }}
                >
                  The freedom to explore new technologies and ideas often leads
                  to groundbreaking solutions.
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              mb: 4,
              display: "flex",
              flexDirection: {
                xs: "column",
                md: "row",
              },
              alignItems: {
                xs: "center",
                md: "start",
              },
            }}
          >
            <Box>
              <img
                src={LearningOpp}
                alt={"Learning Opportunities"}
                style={{ maxWidth: "300px", borderRadius: "5px" }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                ml: { xs: 0, md: 3 },
              }}
            >
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  textAlign: {
                    xs: "center",
                    md: "left",
                  },
                }}
              >
                Learning Opportunities
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  sx={{
                    color: "#76777a",
                    textAlign: {
                      xs: "center",
                      md: "left",
                    },
                  }}
                >
                  Workshops, mentorship sessions, and expert talks provide
                  valuable learning opportunities.
                </Typography>
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  sx={{
                    color: "#76777a",
                    textAlign: {
                      xs: "center",
                      md: "left",
                    },
                  }}
                >
                  Participants can enhance their skills, learn about the latest
                  technologies, and gain insights from industry professionals.
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              mb: 4,
              display: "flex",
              flexDirection: {
                xs: "column",
                md: "row",
              },
              alignItems: {
                xs: "center",
                md: "start",
              },
            }}
          >
            <Box>
              <img
                src={ProjectShowcase}
                alt={"Project Showcase and Judging"}
                style={{ maxWidth: "300px", borderRadius: "5px" }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                ml: { xs: 0, md: 3 },
              }}
            >
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  textAlign: {
                    xs: "center",
                    md: "left",
                  },
                }}
              >
                Project Showcase and Judging
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  sx={{
                    color: "#76777a",
                    textAlign: {
                      xs: "center",
                      md: "left",
                    },
                  }}
                >
                  Teams present their projects to a panel of judges or industry
                  experts.
                </Typography>
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  sx={{
                    color: "#76777a",
                    textAlign: {
                      xs: "center",
                      md: "left",
                    },
                  }}
                >
                  Projects are evaluated based on criteria such as creativity,
                  functionality, and overall impact.
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              mb: 4,
              display: "flex",
              flexDirection: {
                xs: "column",
                md: "row",
              },
              alignItems: {
                xs: "center",
                md: "start",
              },
            }}
          >
            <Box>
              <img
                src={PriceAndRecognition}
                alt={"Prizes and Recognition"}
                style={{ maxWidth: "300px", borderRadius: "5px" }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                ml: { xs: 0, md: 3 },
              }}
            >
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  textAlign: {
                    xs: "center",
                    md: "left",
                  },
                }}
              >
                Prizes and Recognition
              </Typography>
              <Box>
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  sx={{
                    color: "#76777a",
                    textAlign: {
                      xs: "center",
                      md: "left",
                    },
                  }}
                >
                  Exciting prizes and recognition are awarded to winning teams.
                </Typography>
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  sx={{
                    color: "#76777a",
                    textAlign: {
                      xs: "center",
                      md: "left",
                    },
                  }}
                >
                  Sponsors often contribute prizes, creating additional
                  motivation for participants.
                </Typography>
              </Box>
            </Box>
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
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                textAlign: {
                  xs: "center",
                  md: "left",
                },
              }}
            >
              Why Participate in a Hackathon?
            </Typography>
          </Box>

          <Box
            sx={{
              mb: 4,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: {
                xs: "column-reverse",
                md: "row",
              },
            }}
          >
            <Box sx={{ mr: { xs: 0, md: 2 } }}>
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  textAlign: {
                    xs: "center",
                    md: "left",
                  },
                }}
              >
                Skill Development:
              </Typography>{" "}
              <Typography
                variant="subtitle1"
                gutterBottom
                sx={{
                  color: "#76777a",
                  textAlign: {
                    xs: "center",
                    md: "left",
                  },
                }}
              >
                Hackathons offer a hands-on learning experience, allowing
                participants to sharpen their technical and teamwork skills.
              </Typography>
            </Box>
            <Box>
              <img
                src={Skill}
                alt={"Skill development"}
                style={{ maxWidth: "300px", borderRadius: "5px" }}
              />
            </Box>
          </Box>

          <Box
            sx={{
              mb: 4,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: {
                xs: "column",
                md: "row",
              },
            }}
          >
            <Box>
              <img
                src={Networking}
                alt={"Networking"}
                style={{ maxWidth: "300px", borderRadius: "5px" }}
              />
            </Box>
            <Box sx={{ ml: { xs: 0, md: 2 } }}>
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  textAlign: {
                    xs: "center",
                    md: "left",
                  },
                }}
              >
                Networking:
              </Typography>{" "}
              <Typography
                variant="subtitle1"
                gutterBottom
                sx={{
                  color: "#76777a",
                  textAlign: {
                    xs: "center",
                    md: "left",
                  },
                }}
              >
                Connect with like-minded individuals, industry professionals,
                and potential collaborators.
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              mb: 4,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: {
                xs: "column-reverse",
                md: "row",
              },
            }}
          >
            <Box sx={{ mr: { xs: 0, md: 2 } }}>
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  textAlign: {
                    xs: "center",
                    md: "left",
                  },
                }}
              >
                Real-World Problem Solving:
              </Typography>{" "}
              <Typography
                variant="subtitle1"
                gutterBottom
                sx={{
                  color: "#76777a",
                  textAlign: {
                    xs: "center",
                    md: "left",
                  },
                }}
              >
                Tackle real-world challenges and contribute to innovative
                solutions that may have a positive impact.
              </Typography>
            </Box>
            <Box>
              <img
                src={ProblemSolving}
                alt={"Problem Solving"}
                style={{ maxWidth: "300px", borderRadius: "5px" }}
              />
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            my: 6,
          }}
        >
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              textAlign: "center",
              color: "#384158",
              mb: 2,
              fontSize: {
                xs: "1rem",
                md: "1.5rem",
              },
            }}
          >
            InnovateCode Hackathon: Your Gateway to Innovation!
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
            sx={{ textAlign: "center", color: "#76777a", mx: 5 }}
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
            my: 6,
          }}
        >
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              textAlign: "center",
              color: "#384158",
              mb: 2,
              fontSize: {
                xs: "1rem",
                md: "1.5rem",
              },
            }}
          >
            Welcome to [Your Organization's] Hackathon Collaboration
            Opportunity!{" "}
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
            sx={{
              textAlign: "center",
              color: "#76777a",
              mx: { xs: 1, md: 5 },
              mb: 5,
            }}
          >
            Are you passionate about fostering innovation, supporting emerging
            talent, and contributing to the ever-evolving landscape of
            technology? If so, collaborating with us in our upcoming hackathon
            could be the perfect opportunity for you and your organization.
          </Typography>
        </Box>
      </Box>

      <NewsLetter />
      <Footer />
    </>
  );
}
