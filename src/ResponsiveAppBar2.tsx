import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";

const homeLink = "/";
const eventsLink = "/events";
const aboutUsLink = "/about-us";
const skillsLink = "/skills";

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

          {/* Mobile View */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Maple Mobile
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
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
              onClick={() => console.log("----Contact Us------")}
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
