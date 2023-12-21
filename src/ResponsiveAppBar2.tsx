import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";

const homeList = ["Welcome Message", "Overview of Maple TechX"];
const aboutUs = ["Vision", "Mission", "Value and Culture", "Why choose us"];
const skills = ["Overview of Live Projects", "Project domains"];
const eventsList = ["Hackathons", "Workshops", "Conference"];

function NavDropdown(props: any) {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const drpDwnList =
    props.drpDwnList && props.drpDwnList.length > 0 ? props.drpDwnList : [];
  const mainBtnTxt = props.mainBtnTxt;

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
            <NavDropdown mainBtnTxt={"Home"} drpDwnList={homeList} />
            <NavDropdown mainBtnTxt={"About Us"} drpDwnList={aboutUs} />
            <NavDropdown mainBtnTxt={"Skills"} drpDwnList={skills} />
            <NavDropdown mainBtnTxt={"Events"} drpDwnList={eventsList} />

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
