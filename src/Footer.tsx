import * as React from "react";
import {
  Box,
  Container,
  Fab,
  Grid,
  IconButton,
  Link,
  Typography,
} from "@mui/material";
import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FooterBg from "./assets/footer_background.png";

function Copyright(props: any) {
  return (
    <Grid
      container
      spacing={2}
      justifyContent="space-between"
      sx={{
        borderTop: `1px solid #353a49`,
      }}
    >
      <Grid item xs={6} sm={3}>
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          sx={{
            mt: 2,
            display: "flex",
            justifyContent: "flex-start",
            color: "#b5b8be",
            fontSize: {
              xs: "0.5rem",
              md: "0.875rem",
            },
            flexDirection: {
              xs: "row",
              md: "row",
            },
          }}
        >
          {"Copyright © "}
          <Link color="inherit" sx={{ mr: 0.25, color: "#b5b8be" }}>
            Maple TechX
          </Link>
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Grid>

      <Grid item xs={6} sm={3}>
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          sx={{
            mt: 2,
            textDecoration: "none",
            display: "flex",
            justifyContent: "flex-end",
            color: "#b5b8be",
            fontSize: {
              xs: "0.5rem",
              md: "0.875rem",
            },
          }}
        >
          <Link
            color="inherit"
            sx={{ textDecoration: "none", mr: 2, color: "#b5b8be" }}
          >
            Terms of Use
          </Link>
          <Link
            color="inherit"
            sx={{ textDecoration: "none", color: "#b5b8be" }}
          >
            Privacy Policy
          </Link>
        </Typography>
      </Grid>
    </Grid>
  );
}

function Footer() {
  const footerStyle = {
    borderTop: `1px solid black`,
    pt: 5,
    pb: 3,
    px: 6,
    backgroundColor: "#1e2434",
    backgroundImage: `url(${FooterBg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };

  return (
    <Container
      maxWidth="xl"
      component="footer"
      className="footerComp"
      sx={footerStyle}
    >
      <Fab color="primary" aria-label="add">
        <WhatsAppIcon />
      </Fab>
      <Grid container spacing={4} className="" justifyContent="space-evenly">
        <Grid item xs={12} sm={12} md={3} key={"Company"}>
          <Typography
            variant="h6"
            color="text.primary"
            sx={{
              color: "#fff",
              fontSize: {
                xs: "1rem",
                md: "1.25rem",
              },
            }}
            gutterBottom
          >
            Maple TechX
          </Typography>
          <ul
            style={{
              listStyle: "none",
              paddingLeft: 0,
              color: "#fff",
            }}
          >
            <li>
              <Link
                variant="subtitle1"
                color="text.secondary"
                sx={{
                  textDecoration: "none",
                  color: "#fff",
                  fontSize: {
                    xs: "0.8rem",
                    md: "1rem",
                  },
                }}
              >
                Let's embark on this adventure together. Ignite your mind, power
                your future!
              </Link>
            </li>
            <li>
              <IconButton color="primary" aria-label="add to shopping cart">
                <FacebookSharpIcon />
              </IconButton>
              <IconButton color="primary" aria-label="add to shopping cart">
                <TwitterIcon />
              </IconButton>
              <IconButton color="primary" aria-label="add to shopping cart">
                <InstagramIcon />
              </IconButton>
              <IconButton color="primary" aria-label="add to shopping cart">
                <WhatsAppIcon />
              </IconButton>
            </li>
          </ul>
        </Grid>

        <Grid item xs={12} sm={12} md={3} key={"Company"}>
          <Typography
            variant="h6"
            color="text.primary"
            sx={{
              color: "#fff",
              fontSize: {
                xs: "1rem",
                md: "1.25rem",
              },
            }}
            gutterBottom
          >
            Contact Us
          </Typography>
          <ul
            style={{
              listStyle: "none",
              paddingLeft: 0,
              color: "#fff",
            }}
          >
            <li>
              <Link
                variant="subtitle1"
                color="text.secondary"
                sx={{
                  textDecoration: "none",
                  color: "#b5b8be",
                  fontSize: {
                    xs: "0.8rem",
                    md: "1rem",
                  },
                }}
              >
                Email: Info.deercreative@gmail.com
              </Link>
            </li>
            <li>
              <Link
                variant="subtitle1"
                color="text.secondary"
                sx={{
                  textDecoration: "none",
                  color: "#b5b8be",
                  fontSize: {
                    xs: "0.8rem",
                    md: "1rem",
                  },
                }}
              >
                Phone: +(88) 111 555 666
              </Link>
            </li>
            <li>
              <Link
                variant="subtitle1"
                color="text.secondary"
                sx={{
                  textDecoration: "none",
                  color: "#b5b8be",
                  fontSize: {
                    xs: "0.8rem",
                    md: "1rem",
                  },
                }}
              >
                40 Baria Sreet 133/2 New York City, United States
              </Link>
            </li>
          </ul>
        </Grid>

        <Grid item xs={12} sm={12} md={3} key={"Company"}>
          <Typography
            variant="h6"
            color="text.primary"
            sx={{
              color: "#fff",
              fontSize: {
                xs: "1rem",
                md: "1.25rem",
              },
            }}
            gutterBottom
          >
            Contact Us
          </Typography>

          <Box sx={{ display: "flex", mb: 4 }}>
            <ul
              style={{
                listStyle: "none",
                paddingLeft: 0,
                color: "#fff",
              }}
            >
              <li>
                <Link
                  variant="subtitle1"
                  color="text.secondary"
                  sx={{
                    textDecoration: "none",
                    color: "#b5b8be",
                    fontSize: {
                      xs: "0.8rem",
                      md: "1rem",
                    },
                  }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  variant="subtitle1"
                  color="text.secondary"
                  sx={{
                    textDecoration: "none",
                    color: "#b5b8be",
                    fontSize: {
                      xs: "0.8rem",
                      md: "1rem",
                    },
                  }}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  variant="subtitle1"
                  color="text.secondary"
                  sx={{
                    textDecoration: "none",
                    color: "#b5b8be",
                    fontSize: {
                      xs: "0.8rem",
                      md: "1rem",
                    },
                  }}
                >
                  Skills
                </Link>
              </li>
            </ul>

            <ul
              style={{
                listStyle: "none",
                paddingLeft: 0,
                color: "#fff",
                marginLeft: "4rem",
              }}
            >
              <li>
                <Link
                  variant="subtitle1"
                  color="text.secondary"
                  sx={{
                    textDecoration: "none",
                    color: "#b5b8be",
                    fontSize: {
                      xs: "0.8rem",
                      md: "1rem",
                    },
                  }}
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  variant="subtitle1"
                  color="text.secondary"
                  sx={{
                    textDecoration: "none",
                    color: "#b5b8be",
                    fontSize: {
                      xs: "0.8rem",
                      md: "1rem",
                    },
                  }}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </Box>
        </Grid>
      </Grid>

      <Copyright />
    </Container>
  );
}

export default Footer;
