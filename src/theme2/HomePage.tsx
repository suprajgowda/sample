import React from "react";
import Footer from "./Footer";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
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

export default function HomePage() {
  return (
    <>
      <DrawerAppBar />
      <Box sx={{ display: "flex" }}>
        <img
          src="https://vamia.fi/wp-content/uploads/2023/06/brooke-cagle-uHVRvDr7pg-unsplash.jpg"
          alt="Home Page"
          style={{ width: "65%", marginTop: "2%" }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            pl: 6,
          }}
        >
          <Typography
            variant="h3"
            component="div"
            sx={{ pb: 4, fontWeight: 700 }}
          >
            Welcome to Maple
          </Typography>
          <Typography variant="h5" component="div" sx={{ fontWeight: 700 }}>
            Where Innovation Meets Opportunity!
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{ display: "flex", justifyContent: "space-evenly", py: 4, my: 6 }}
      >
        <Box
          sx={{ backgroundColor: "#fdb2c2", py: 2, px: 8, borderRadius: "5px" }}
        >
          <Typography
            variant="h5"
            gutterBottom
            sx={{ fontWeight: 700, fontSize: "1rem", marginBottom: 0 }}
          >
            Programmes
          </Typography>
        </Box>

        <Box
          sx={{ backgroundColor: "#ef9780", py: 2, px: 8, borderRadius: "5px" }}
        >
          <Typography
            variant="h5"
            gutterBottom
            sx={{ fontWeight: 700, fontSize: "1rem", marginBottom: 0 }}
          >
            VamiaGuide
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
            alignItems: "center",
            mx: "10%",
            mb: 4,
          }}
        >
          <Typography
            variant="h2"
            gutterBottom
            sx={{ fontWeight: 700, marginBottom: 0 }}
          >
            What's happening at Maplex
          </Typography>

          <Box>
            <IconButton
              aria-label="delete"
              size="large"
              sx={{
                backgroundColor: "#006983",
                borderRadius: "15px",
                boxShadow: "5px 5px 0px 0px #EF9780",
                mr: 2,
                "&:hover": {
                  backgroundColor: "#006983",
                },
              }}
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
                "&:hover": {
                  backgroundColor: "#006983",
                },
              }}
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
                "&:hover": {
                  backgroundColor: "#006983",
                },
              }}
            >
              <YouTubeIcon fontSize="inherit" sx={{ color: "#fff" }} />
            </IconButton>

            <Button
              sx={{
                backgroundColor: "#006983",
                color: "#fff",
                px: 5,
                py: 1.5,
                fontSize: "1.25rem",
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
            }}
          >
            <Box>
              <img
                src="https://vamia.fi/wp-content/uploads/2023/10/DM0A2435-1024x683.jpg"
                style={{ maxWidth: "700px", height: "500px" }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                flexWrap: "wrap",
                justifyContent: "center",
                px: 5,
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontSize: "20px", fontWeight: 700 }}
              >
                Status update on the December application round
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontSize: "1rem", fontWeight: 500, mt: 4 }}
              >
                The processing phase of the December application round is still
                ongoing. Interview invitations will be sent out by January 12th,
                2024. Our school's holiday break
              </Typography>
            </Box>
          </Box>
          <Box></Box>
        </Box>
      </Box>
      <div>HomePage2</div>
      <Footer />
    </>
  );
}

const pages = ["Products", "Pricing", "Blog"];

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
      sx={{ backgroundColor: "#efefef", boxShadow: "none" }}
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
              color: "black",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>

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
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
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
              color: "black",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "black", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
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
const navItems = ["Home", "About", "Contact"];

function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", backgroundColor: "#006983" }}
    >
      <Typography variant="h6" sx={{ my: 2 }}>
        Maple Tech
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
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
            Maple Tech
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "#fff" }}>
                {item}
              </Button>
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
  );
}
