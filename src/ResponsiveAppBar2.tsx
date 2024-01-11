import * as React from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";

const homeLink = "/v1/home";
const eventsLink = "/v1/events";
const aboutUsLink = "/v1/about-us";
const skillsLink = "/v1/skills";
const contactUsLink = "/v1/contact-us";

const homeList = {
  link: homeLink,
  list: ["Welcome Message", "Overview of Maple TechX"],
};

const aboutUs = {
  link: aboutUsLink,
  list: ["Vision", "Mission", "Value and Culture", "Why choose us"],
};

const skills = {
  link: skillsLink,
  list: ["Overview of Live Projects", "Project domains"],
};

const eventsList = {
  link: eventsLink,
  list: ["Hackathons", "Workshops", "Conference"],
};

function NavDropdown(props: any) {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const drpDwnList =
    props.drpDwnList && props.drpDwnList.length > 0 ? props.drpDwnList : [];
  const mainBtnTxt = props.mainBtnTxt;

  const navLink = props.link;
  const navigate = useNavigate();

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    navigate(navLink);
    setAnchorElUser(null);
  };

  return (
    <>
      <IconButton
        onClick={handleOpenUserMenu}
        sx={{
          p: 2,
          fontSize: "0.875rem",
          textTransform: "uppercase",
          color: "#384158",
          fontWeight: 500,
          borderRadius: 0,
        }}
      >
        {mainBtnTxt}
      </IconButton>
      <Menu
        sx={{ mt: "55px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {drpDwnList.map((event: string) => (
          <MenuItem key={event} onClick={handleCloseUserMenu}>
            <Typography textAlign="center">{event}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

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
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        alignItems: "center",
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
          color: "#000",
          textDecoration: "none",
        }}
      >
        Maple Mobile
      </Typography>

      <Box
        sx={{
          flexGrow: 1,
          display: { xs: "flex", md: "none" },
          justifyContent: "flex-end",
        }}
      >
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          sx={{
            color: "black",
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
          sx={{
            "& div": {
              "& ul": {
                display: { xs: "flex", md: "none" },
                flexDirection: { xs: "column", md: "none" },
                justifyContent: { xs: "center", md: "none" },
              },
            },
          }}
        >
          <NavDropdown
            mainBtnTxt={"Home"}
            link={homeLink}
            drpDwnList={homeList.list}
          />
          <NavDropdown
            mainBtnTxt={"About Us"}
            link={aboutUsLink}
            drpDwnList={aboutUs.list}
          />
          <NavDropdown
            mainBtnTxt={"Skills"}
            link={skillsLink}
            drpDwnList={skills.list}
          />
          <NavDropdown
            mainBtnTxt={"Events"}
            link={eventsLink}
            drpDwnList={eventsList.list}
          />

          <IconButton
            onClick={() => navigate(contactUsLink)}
            sx={{
              p: 2,
              fontSize: "0.875rem",
              textTransform: "uppercase",
              color: "#384158",
              fontWeight: 500,
              borderRadius: 0,
            }}
          >
            Contact Us
          </IconButton>
        </Menu>
      </Box>
    </Box>
  );
}

function ResponsiveAppBar2() {
  const navigate = useNavigate();

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "white", boxShadow: "0px 2px 5px #eee" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            onClick={() => navigate(homeLink)}
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              textDecoration: "none",
              color: "#384158",
            }}
          >
            Maple TechX
          </Typography>

          <MobileHeader />

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              flexGrow: 1,
              justifyContent: "flex-end",
            }}
          >
            <NavDropdown
              mainBtnTxt={"Home"}
              link={homeLink}
              drpDwnList={homeList.list}
            />
            <NavDropdown
              mainBtnTxt={"About Us"}
              link={aboutUsLink}
              drpDwnList={aboutUs.list}
            />
            <NavDropdown
              mainBtnTxt={"Skills"}
              link={skillsLink}
              drpDwnList={skills.list}
            />
            <NavDropdown
              mainBtnTxt={"Events"}
              link={eventsLink}
              drpDwnList={eventsList.list}
            />

            <IconButton
              onClick={() => navigate(contactUsLink)}
              sx={{
                p: 2,
                fontSize: "0.875rem",
                textTransform: "uppercase",
                color: "#384158",
                fontWeight: 500,
                borderRadius: 0,
              }}
            >
              Contact Us
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar2;
