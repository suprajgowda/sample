import React, { useState } from "react";
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
import Footer from "./Footer";
import "./HomePage.css";
import { Link } from "@mui/material";

export default function HomePage() {
  return (
    <>
      <DrawerAppBar />
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          mt: { xs: "55px", md: "5%" },
        }}
      >
        <img
          src="https://vamia.fi/wp-content/uploads/2023/06/brooke-cagle-uHVRvDr7pg-unsplash.jpg"
          alt="Home Page"
          className="hmp1"
        />
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
            bottom: { xs: "36%", sm: "0" },
            left: { xs: "8%", sm: "0" },
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
            }}
          >
            Where Innovation Meets Opportunity!
          </Typography>
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
            sx={{ fontWeight: 700, fontSize: "1rem", marginBottom: 0 }}
          >
            Programmes
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
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Typography
            variant="h3"
            gutterBottom
            sx={{ fontWeight: 700, marginBottom: 0 }}
          >
            What's happening at Maplex
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              width: { xs: "100%", md: "auto" },
              flexWrap: { xs: "wrap", md: "nowrap" },
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
                p: 1,
                mt: { xs: 2, sm: 0 },
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
                p: 1,
                mt: { xs: 2, sm: 0 },
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
                src="https://vamia.fi/wp-content/uploads/2023/10/DM0A2435-1024x683.jpg"
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
              mx: "10%",
              my: 8,
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            {[1, 2, 3, 4, 5, 6].map((e) => (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  maxWidth: "450px",
                  borderRadius: "50px",
                  boxShadow: "0px 3px 35px 0px rgba(0, 0, 0, 0.29)",
                  mx: 2,
                  my: 4,
                }}
              >
                <Box
                  sx={{
                    backgroundSize: "100% 100%",
                    backgroundPositionY: "center",
                    backgroundImage: `url(https://vamia.fi/wp-content/uploads/2023/11/Kopio-Kopio-Valmistujaisjuhla-23.png)`,
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
                    width: { xs: "100%", sm: "100%" },
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

// const pages = ["Products", "Pricing", "Blog"];

// function ResponsiveAppBar() {
//   const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(
//     null
//   );

//   const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorElNav(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   return (
//     <AppBar
//       position="static"
//       sx={{ backgroundColor: "#efefef", boxShadow: "none" }}
//     >
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           <Typography
//             variant="h6"
//             noWrap
//             component="a"
//             sx={{
//               mr: 2,
//               display: { xs: "none", md: "flex" },
//               fontFamily: "monospace",
//               fontWeight: 700,
//               letterSpacing: ".3rem",
//               color: "black",
//               textDecoration: "none",
//             }}
//           >
//             LOGO
//           </Typography>

//           <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: "bottom",
//                 horizontal: "left",
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: "top",
//                 horizontal: "left",
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: "block", md: "none" },
//               }}
//             >
//               {pages.map((page) => (
//                 <MenuItem key={page} onClick={handleCloseNavMenu}>
//                   <Typography textAlign="center">{page}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>

//           <Typography
//             variant="h5"
//             noWrap
//             component="a"
//             href="#app-bar-with-responsive-menu"
//             sx={{
//               mr: 2,
//               display: { xs: "flex", md: "none" },
//               flexGrow: 1,
//               fontFamily: "monospace",
//               fontWeight: 700,
//               letterSpacing: ".3rem",
//               color: "black",
//               textDecoration: "none",
//             }}
//           >
//             LOGO
//           </Typography>
//           <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
//             {pages.map((page) => (
//               <Button
//                 key={page}
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: "black", display: "block" }}
//               >
//                 {page}
//               </Button>
//             ))}
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }

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
          Maple Tech
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
              Maple Tech
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
  );
};
