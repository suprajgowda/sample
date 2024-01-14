import React from "react";
import { HeaderNew } from "./HomePage";
import { Box, Button, Typography } from "@mui/material";
import EventsBanner from "../assets/events-banner.jpg";
import ProjectsBanner from "../assets/ProjectsNewBanner.jpg";
import Footer from "./Footer";
import { FormDialogue, PROJECT_DOMAIN_LIST } from "./Skills";

export default function Projects() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
        <img src={ProjectsBanner} alt="Events Page" className="hmp12" />
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
            Projects
          </Typography>

          <Typography
            variant="h6"
            component="div"
            sx={{ fontWeight: 400, fontSize: { xs: "1rem", sm: "1.25rem" } }}
          >
            At MAPLE , we offer a spectrum of project domains, each designed to
            immerse participants in the latest technologies and industry trends.
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          mx: "10%",
          mt: "8%",
        }}
      >
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
            variant="h6"
            component="div"
            sx={{
              fontWeight: 400,
              fontSize: { xs: "1rem", sm: "1.25rem" },
              textAlign: "center",
            }}
          >
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
                      width: "50%",
                      "&:hover": {
                        backgroundColor: "#006983",
                      },
                    }}
                    onClick={handleClickOpen}
                  >
                    Register
                  </Button>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>

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
