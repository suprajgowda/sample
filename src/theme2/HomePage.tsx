import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  Container,
  FormControl,
  InputAdornment,
  InputLabel,
  Link,
  Menu,
  MenuItem,
  MenuProps,
  OutlinedInput,
} from "@mui/material";
import Footer from "./Footer";
import HomePage2 from "../assets/Home-Page-2.jpg";
import MapleLogo from "../assets/logo-img.jpeg";
import "./HomePage.css";
import ReactGA from "react-ga4";
import MapleTransparent from "../assets/maple_transparent.jpeg";
import homepageBanner2 from "../assets/homepageBanner2.jpeg";
import homepg1 from "../assets/homepg1.png";
import homepg2 from "../assets/homepg2.png";
import homepg3 from "../assets/homepg3.png";
import homepg4 from "../assets/homepg4.png";

const imgList = [homepg1, homepg2, homepg3, homepg4];

export function HeaderNew() {
  return (
    <>
      <NewHeader />
      <NewHeader2 />
    </>
  );
}

export default function HomePage() {
  const navigate = useNavigate();

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
        <img src={HomePage2} alt="Home Page" className="hmp1" />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            px: { xs: "10%", sm: 6 },
            pl: { xs: "10%", sm: 6 },
            py: { xs: "10%" },
            mt: { xs: 5, sm: 0 },
            boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.29)",
            position: { xs: "absolute", sm: "static" },
            zIndex: { xs: 1 },
            backgroundColor: "white",
            width: { xs: "80%", sm: "auto" },
            bottom: { xs: "20%", sm: "0" },
            left: { xs: "0", sm: "0" },
          }}
        >
          <Typography
            variant="h3"
            component="div"
            sx={{
              pb: 4,
              fontWeight: 700,
              fontSize: { xs: "1.75rem", sm: "2.5rem" },
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            Welcome to Maple
          </Typography>

          <Typography
            variant="h5"
            component="div"
            sx={{
              fontWeight: 700,
              fontSize: { xs: "1rem", sm: "1.25rem" },
              textAlign: { xs: "center", sm: "left" },
              pb: 2,
            }}
          >
            Where Innovation Meets Opportunity! - Explore our projects in{" "}
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontWeight: 700,
              fontSize: { xs: "0.8rem", sm: "0.8rem" },
              pb: 2,
              color: "#fc6c47",
            }}
          >
            BE / MTECH / MCA / BCA / MSC / DIPLOMA / INTERNSHIP / MINI PROJECT
          </Typography>

          <Button
            sx={{
              backgroundColor: "#006983",
              color: "#fff",
              px: 1,
              py: 1,
              mt: { xs: 2, sm: 2 },
              borderRadius: "0.65rem",
              fontWeight: 700,
              fontSize: "0.8rem",
              width: { xs: "100%", sm: "30%" },
              textTransform: "capitalize",
              "&:hover": {
                backgroundColor: "#004455",
              },
            }}
            onClick={() => navigate("/about-us")}
          >
            Read More
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-evenly",
          py: 4,
          my: { xs: 2, md: 6 },
          mx: { xs: 2, md: 0 },
        }}
      >
        <Box
          sx={{ backgroundColor: "#fdb2c2", py: 2, px: 8, borderRadius: "5px" }}
        >
          <Typography
            variant="h5"
            gutterBottom
            component="a"
            href="/projects"
            sx={{
              fontWeight: 700,
              fontSize: "1rem",
              marginBottom: 0,
              textDecoration: "none",
              color: "#000",
            }}
          >
            Projects
          </Typography>
        </Box>

        <Box
          sx={{
            backgroundColor: "#ef9780",
            my: { xs: 2, md: 0 },
            py: 2,
            px: 8,
            borderRadius: "5px",
          }}
        >
          <Typography
            variant="h5"
            gutterBottom
            component="a"
            href="/projects"
            sx={{
              fontWeight: 700,
              fontSize: "1rem",
              marginBottom: 0,
              textDecoration: "none",
              color: "#000",
            }}
          >
            Training
          </Typography>
        </Box>

        <Box
          sx={{ backgroundColor: "#d6e3c5", py: 2, px: 8, borderRadius: "5px" }}
        >
          <Typography
            variant="h5"
            gutterBottom
            sx={{ fontWeight: 700, fontSize: "1rem", marginBottom: 0 }}
          >
            How to apply
          </Typography>
        </Box>
      </Box>

      <Box>
        <Box
          sx={{
            mx: "10%",
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontWeight: 700,
              fontSize: "22px",
              marginBottom: 0,
              color: "#006983",
            }}
          >
            Latest News
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", md: "center" },
            mx: "10%",
            mb: 4,
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              fontWeight: 700,
              marginBottom: 0,
              fontSize: { xs: "1.75rem", md: "2.5rem" },
            }}
          >
            What's happening at Maple Tech X
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              width: { xs: "100%", md: "auto" },
              flexWrap: { xs: "wrap", md: "wrap" },
              mt: { xs: 1, md: 0 },
            }}
          >
            <IconButton
              aria-label="delete"
              size="large"
              sx={{
                backgroundColor: "#006983",
                borderRadius: "15px",
                boxShadow: "5px 5px 0px 0px #EF9780",
                mr: 2,
                p: 1,
                mt: { xs: 2, sm: 0 },
                "&:hover": {
                  backgroundColor: "#006983",
                },
                maxHeight: "50px",
              }}
              href="https://www.facebook.com/people/Maple-TechX/61556152647517/"
              target="_blank"
            >
              <FacebookIcon fontSize="inherit" sx={{ color: "#fff" }} />
            </IconButton>

            <IconButton
              aria-label="delete"
              size="large"
              sx={{
                backgroundColor: "#006983",
                borderRadius: "15px",
                boxShadow: "5px 5px 0px 0px #FDB2C2",
                mr: 2,
                p: 1,
                mt: { xs: 2, sm: 0 },
                "&:hover": {
                  backgroundColor: "#006983",
                },
                maxHeight: "50px",
              }}
              href="https://www.instagram.com/mapletechx/"
              target="_blank"
            >
              <InstagramIcon fontSize="inherit" sx={{ color: "#fff" }} />
            </IconButton>

            <IconButton
              aria-label="delete"
              size="large"
              sx={{
                backgroundColor: "#006983",
                borderRadius: "15px",
                boxShadow: "5px 5px 0px 0px #D6E3C5",
                mr: 2,
                p: 1,
                mt: { xs: 2, sm: 0 },
                "&:hover": {
                  backgroundColor: "#006983",
                },
                maxHeight: "50px",
              }}
            >
              <YouTubeIcon fontSize="inherit" sx={{ color: "#fff" }} />
            </IconButton>

            <Button
              sx={{
                backgroundColor: "#006983",
                color: "#fff",
                px: 3,
                py: 1.1,
                mt: { xs: 2, sm: 0 },
                fontSize: "1rem",
                borderRadius: "0.65rem",
                fontWeight: 700,
                "&:hover": {
                  backgroundColor: "#004455",
                },
              }}
            >
              See all news
            </Button>
          </Box>
        </Box>
        <Box>
          <Box
            sx={{
              display: "flex",
              boxShadow: "0px 3px 35px 0px rgba(0, 0, 0, 0.29)",
              mx: "10%",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Box>
              <img
                alt="Home Page Banner"
                src={homepageBanner2}
                className="hom1"
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                flexWrap: "wrap",
                justifyContent: "center",
                px: { xs: 2, md: 5 },
                py: { xs: 2, md: 0 },
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontSize: { xs: "18px", md: "20px" }, fontWeight: 700 }}
              >
                Status update on the December application round
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontSize: { xs: "0.85rem", md: "1rem" },
                  fontWeight: 500,
                  mt: { xs: 2, md: 4 },
                }}
              >
                The processing phase of the December application round is still
                ongoing. Interview invitations will be sent out by January 12th,
                2024. Our school's holiday break
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              mx: { xs: "5%", md: "10%" },
              my: 8,
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            {[
              { id: 1, img: homepg1 },
              { id: 2, img: homepg2 },
              { id: 3, img: homepg3 },
              { id: 4, img: homepg4 },
              { id: 5, img: homepg1 },
              { id: 6, img: homepg2 },
            ].map((e) => (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  maxWidth: "450px",
                  borderRadius: "50px",
                  boxShadow: "0px 3px 35px 0px rgba(0, 0, 0, 0.29)",
                  mx: 2,
                  my: 3,
                }}
              >
                <Box
                  sx={{
                    backgroundSize: "120% 100%",
                    backgroundPositionY: "center",
                    backgroundImage: `url(${e.img})`,
                    height: "200px",
                    width: { xs: "100%", sm: "100%" },
                    borderRadius: {
                      xs: "50px 0px 0px 0px",
                      sm: "0px 0px 0px 50px",
                    },
                  }}
                ></Box>
                <Box
                  sx={{
                    backgroundColor: "#fff",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    p: 2.5,
                    borderRadius: {
                      xs: "0px 0px 50px 0px",
                      sm: "0px 50px 0px 0px",
                    },
                    width: { xs: "auto", sm: "100%" },
                  }}
                >
                  <Typography
                    variant="body2"
                    gutterBottom
                    sx={{
                      textAlign: "center",
                      color: "#000",
                      fontSize: { xs: "15px", sm: "18px" },
                      fontWeight: "700",
                    }}
                  >
                    Christmas graduation ceremony on Friday 22 December 2023 at
                    9.00
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
}

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About Us",
    link: "/about-us",
  },
  {
    title: "Skills",
    link: "/skills",
  },
  {
    title: "Events",
    link: "/events",
  },
  {
    title: "Contact Us",
    link: "/contact-us",
  },
];

export const DrawerAppBar = (props: Props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", backgroundColor: "#006983" }}
    >
      <Link href="/" color="inherit" underline="none">
        <Typography variant="h6" sx={{ my: 2 }}>
          Maple Tech X
        </Typography>
      </Link>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={() => {
                console.log(":ink = ", item.link);
                navigate(item.link);
              }}
            >
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box sx={{ display: "flex", backgroundColor: "#006983" }}>
        <CssBaseline />
        <AppBar
          component="nav"
          sx={{ backgroundColor: "#006983", boxShadow: "none" }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              <Link href="/" color="inherit" underline="none">
                Maple Tech X
              </Link>
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <Link
                  href={item.link}
                  color="inherit"
                  underline="none"
                  sx={{ mx: 2 }}
                >
                  {item.title}
                </Link>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              backgroundColor: "#006983",
              boxShadow: "none",
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
      </Box>
    </>
  );
};

function NewHeader() {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#EFEFEF",
        boxShadow: "none",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              display: { xs: "flex", md: "flex" },
              // display: { xs: "none", md: "flex" },
            }}
          >
            {/* <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                flexGrow: 1,
                fontWeight: 700,
                color: "#000",
                textDecoration: "none",
              }}
            >
              Maple Tech X
            </Typography> */}
            <Typography variant="h5" noWrap component="a" href="/">
              <img alt="Logo" src={MapleTransparent} className="homeLogo" />
            </Typography>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <Typography
              variant="body2"
              gutterBottom
              component="a"
              href="/about-us"
              sx={{
                m: 0,
                color: "#000",
                fontWeight: 500,
                fontSize: "0.8rem",
                textDecoration: "none",
              }}
            >
              About Us
            </Typography>

            <Typography
              variant="body2"
              gutterBottom
              sx={{
                my: 0,
                mx: 4,
                color: "#000",
                fontWeight: 500,
                fontSize: "0.8rem",
                textDecoration: "none",
              }}
              component="a"
              href="/skills"
            >
              Projects
            </Typography>

            <FormControl
              sx={{
                m: 0,
                width: "25ch",
                "& label": {
                  lineHeight: "10px",
                  fontSize: "12px",
                },
                "&.Mui-focused": {
                  color: "#006983",
                },
                "& div": {
                  "& div": {
                    "& button": {
                      "& svg": {
                        fontSize: "1rem",
                      },
                    },
                  },
                  "& input": {
                    fontSize: "10px",
                    padding: "12px",
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#006983 !important",
                  },
                },
              }}
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Search
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={"text"}
                size="small"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      edge="end"
                    >
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                }
                label="Search"
              />
            </FormControl>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

const homeLink = "/";
const eventsLink = "/events";
const skillsLink = "/skills";
const contactUsLink = "/contact-us";

const skillsTraining = {
  link: skillsLink,
  list: [
    { value: "Internship", link: skillsLink },
    { value: "Projects", link: "/projects" },
    { value: "M-SpaceX", link: "/m-space-x" },
    { value: "M-AirX", link: skillsLink },
  ],
};

const eventsList = {
  link: eventsLink,
  list: [
    { value: "Hackathons", link: "/events/hackathons" },
    { value: "Workshops", link: "/events/workshops" },
    { value: "Conference", link: "/events/conference" },
  ],
};

const StyledMenu = (props: MenuProps) => {
  return (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      {...props}
    />
  );
};

function MobileHeader() {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorElNav(event.currentTarget);

  const handleCloseNavMenu = () => setAnchorElNav(null);

  return (
    <Box
      sx={{
        display: { xs: "flex", sm: "none" },
        justifyContent: "space-between",
        width: "100%",
        alignItems: "center",
        backgroundColor: "#006983",
      }}
    >
      <Typography
        variant="h5"
        noWrap
        component="a"
        href="/"
        sx={{
          mr: 2,
          display: { xs: "flex", md: "none" },
          flexGrow: 1,
          fontSize: "1em",
          fontWeight: 700,
          letterSpacing: ".13rem",
          color: "#fff",
          textDecoration: "none",
        }}
      >
        Maple Tech X
      </Typography>

      <Box
        sx={{
          flexGrow: 1,
          display: { xs: "flex", md: "none" },
          justifyContent: "flex-end",
          backgroundColor: "#006983",
        }}
      >
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          sx={{
            color: "#fff",
          }}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          disableScrollLock={true}
          sx={{
            "& div": {
              "& ul": {
                display: { xs: "flex", md: "none" },
                flexDirection: { xs: "column", md: "none" },
                justifyContent: { xs: "center", md: "none" },
              },
            },
            "& div.MuiPaper-root": {
              backgroundColor: "#006983",
              borderRadius: "0px",
            },
          }}
        >
          <CustomNavDropDown
            btnTitle={"Skills and Training"}
            drpDwnList={skillsTraining.list}
          />

          <CustomNavDropDown btnTitle={"Events"} drpDwnList={eventsList.list} />

          <IconButton
            onClick={() => navigate(contactUsLink)}
            sx={{
              p: 2,
              fontSize: "0.85rem",
              textTransform: "uppercase",
              color: "#fff",
              fontWeight: 500,
              borderRadius: 0,
            }}
          >
            Contact Info
          </IconButton>

          <IconButton
            onClick={() => navigate(homeLink)}
            sx={{
              p: 2,
              fontSize: "0.85rem",
              textTransform: "uppercase",
              color: "#fff",
              fontWeight: 500,
              borderRadius: 0,
            }}
          >
            Students
          </IconButton>
        </Menu>
      </Box>
    </Box>
  );
}

const CustomNavDropDown = (props: any) => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (navLink?: string) => {
    setAnchorEl(null);
    if (navLink) navigate(navLink);
  };

  const { btnTitle, drpDwnList } = props;

  return (
    <>
      <Button
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        sx={{
          backgroundColor: "#006983",
          "&:hover": {
            backgroundColor: "#006983",
          },
        }}
      >
        {btnTitle}
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={() => handleClose()}
        sx={{
          "& div.MuiPaper-elevation": {
            boxShadow: "5px 5px #06495a",
          },
        }}
        disableScrollLock={true}
      >
        {drpDwnList.map((event: any) => {
          return (
            <MenuItem onClick={() => handleClose(event.link)} disableRipple>
              {event.value}
            </MenuItem>
          );
        })}
      </StyledMenu>
    </>
  );
};

function NewHeader2() {
  const navigate = useNavigate();

  return (
    <AppBar
      position="sticky"
      sx={{ backgroundColor: "#006983", boxShadow: "none" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ minHeight: "38px !important" }}>
          <MobileHeader />

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              flexGrow: 1,
              justifyContent: "space-evenly",
            }}
          >
            <CustomNavDropDown
              btnTitle={"Skills and Training"}
              drpDwnList={skillsTraining.list}
            />

            <CustomNavDropDown
              btnTitle={"Events"}
              drpDwnList={eventsList.list}
            />

            <IconButton
              onClick={() => navigate(contactUsLink)}
              sx={{
                p: 2,
                fontSize: "0.85rem",
                fontWeight: 500,
                textTransform: "uppercase",
                color: "#fff",
                borderRadius: 0,
              }}
            >
              Contact Info
            </IconButton>

            <IconButton
              onClick={() => navigate(homeLink)}
              sx={{
                p: 2,
                fontSize: "0.85rem",
                fontWeight: 500,
                textTransform: "uppercase",
                color: "#fff",
                borderRadius: 0,
              }}
            >
              Students
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
