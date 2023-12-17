import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#14bdee", boxShadow: "none" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
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
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem
                key={"Have any questions?"}
                onClick={handleCloseNavMenu}
              >
                <Typography textAlign="center">Have any questions?</Typography>
              </MenuItem>

              <MenuItem key={"001-1234-88888"} onClick={handleCloseNavMenu}>
                <PhoneIcon />
                <Typography textAlign="center">001-1234-88888</Typography>
              </MenuItem>

              <MenuItem
                key={"info.deercreative@gmail.com"}
                onClick={handleCloseNavMenu}
              >
                <EmailIcon />
                <Typography textAlign="center">
                  info.deercreative@gmail.com
                </Typography>
              </MenuItem>
            </Menu>
          </Box>

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
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Typography variant="body2" gutterBottom sx={{ m: 0 }}>
              Have any questions ?
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                ml: 1,
              }}
            >
              <PhoneIcon sx={{ fontSize: "1rem", mr: 0.25 }} />
              <Typography variant="body2" gutterBottom sx={{ m: 0 }}>
                001-1234-88888
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                ml: 1,
              }}
            >
              <EmailIcon sx={{ fontSize: "1rem", mr: 0.25 }} />
              <Typography variant="body2" gutterBottom sx={{ m: 0 }}>
                info.deercreative@gmail.com
              </Typography>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
