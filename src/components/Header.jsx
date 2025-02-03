import React, { useState } from "react";
import { Box, Typography,Button, Link, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../assets/experium-logo.png";


const Header = ({ pageId }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const menuItems = [
    { title: "Home", path: "" },
    { title: "Events", path: "events" },
    { title: "Group Bookings", path: "packages" },
    { title: "Visit Us", path: "visitUs" },
  ];

  return (
    <>
      <Box
        sx={{
          height: "15vh",
          width: "100%",
          backgroundColor: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 1000,
          paddingX: "1rem",
        }}
      >
        {/* Desktop & Tablet: Left Section (Logo + Menu) */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "2rem",
            display: { xs: "none", md: "flex" },
          }}
        >
          {/* Logo */}
          <img
            src={Logo}
            alt="Experium Logo"
            style={{ height: "15vh", width: "20vw"  }}
          />

          {/* Menu Items (Home, Events, Group Bookings) - Shown only on Desktop & Tablet */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: "2.5rem",
              fontFamily: "League Spartan",
            }}
          >
            {menuItems.slice(0, 3).map((item, index) => (
              <Typography
                key={index}
                onClick={() => (window.location.href = `/${item.path.toLowerCase()}`)}
                sx={{
                  fontSize: "1.4rem",
                  fontWeight: "600",
                  cursor: "pointer",
                  lineHeight: "18px",
                  color: pageId === item.path ? "#C0029D" : "#d945b4",
                  fontFamily: "League Spartan",
                  transition: "all 0.3s ease",
                  transform: pageId === item.path ? "scale(1.2)" : "none",
                  "&:hover": {
                    color: "#C0029D",
                    transform: "scale(1.2)",
                  },
                }}
              >
                {item.title}
              </Typography>
            ))}
          </Box>
        </Box>

        {/* Desktop & Tablet: Right Section (Visit Us & Book Now) */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            gap: "2rem",
            fontFamily: "League Spartan",
            margin:'25px'
          }}
        >
          <Link
            href="/visitUs"
            underline="none"
            sx={{
              fontFamily: "League Spartan",
              fontSize: "1.2rem",
              fontWeight: "500",
              color: "#C0029D",
            }}
          >
            Visit Us
          </Link>
          <Box
          
          >
            <Button   sx={{
              fontWeight: "400",
              background: "linear-gradient(171.21deg, #EB1DC5 7.36%, #350793 94.96%)",
              fontFamily: "Michroma",
              borderRadius: "20px",
              fontSize: "0.8rem",
              color: "white",
              cursor: "pointer",
              padding: "10px 18px",
              "&:hover": {
                background: "linear-gradient(171.21deg, #D015B0 7.36%, #2D066F 94.96%)",
              },
            }} href="/groupBooking">Book Now</Button>
            
          </Box>
        </Box>

        {/* Mobile: Hamburger Menu on Left & Book Now on Right */}
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          {/* Hamburger Menu (Left Side) */}
          <IconButton
            onClick={() => setDrawerOpen(true)}
            sx={{ ml: 1, color: "#C0029D" }}
          >
            <MenuIcon sx={{ fontSize: "3rem" }} />
          </IconButton>

          {/* Center: Logo */}
          <img
            src={Logo}
            alt="Experium Logo"
            style={{ height: "15vh", width: "50vw" ,marginBottom:'10px'}}
          />

          {/* Book Now (Right Side) */}
          <Box>
          <Button
            sx={{
              fontWeight: "400",
              background: "linear-gradient(171.21deg, #EB1DC5 7.36%, #350793 94.96%)",
              fontFamily: "Michroma",
              borderRadius: "20px",
              fontSize: "2vw",
              color: "white",
              height:'3rem',
              cursor: "pointer",
              padding: "8px 14px",
              marginRight:'10px',
              "&:hover": {
                background: "linear-gradient(171.21deg, #D015B0 7.36%, #2D066F 94.96%)",
              },
              mr: 2,
            }}
            href="/groupBooking"
          >
            Book Now
          </Button>
          </Box>
        </Box>
      </Box>

      {/* Drawer Menu (Mobile) */}
     {/* Drawer Menu (Mobile) */}
<Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
  <Box
    sx={{
      width: 250,
      height: "100vh",
      background: "white",
      color: "white",
      padding: "1rem",
     
    }}
  >
    

    <List sx={{ paddingTop: "1rem" }}>
      {menuItems.map((item, index) => (
        <ListItem
          button
          key={index}
          onClick={() => {
            setDrawerOpen(false);
            window.location.href = `/${item.path.toLowerCase()}`;
          }}
          sx={{
           
            padding: "10px 20px",
        
           
        
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.2)",
            },
          }}
        >
          <Typography
           
            sx={{
              textAlign: "center",
              color:'#C0029D',
              fontSize: "1.4rem",
              fontWeight: "600",
              fontFamily: "League Spartan",
            }}
          >{item.title}</Typography>
          
        </ListItem>
      ))}
    </List>
  </Box>
</Drawer>

    </>
  );
};

export default Header;
