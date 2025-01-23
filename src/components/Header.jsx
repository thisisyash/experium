import React from "react";
import { Box, Typography, Link } from "@mui/material";
import Logo from "../assets/experium-logo.png";

const Header = ({ pageId }) => {
  const menuItems = [
    { title: "Home", path: "" },
    { title: "Events", path: "events" },
    { title: "Bulk Bookings", path: "Booking" },
  ];

  return (
    <Box
      sx={{
        height: "13vh",
        width: "100%",
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Bottom shadow
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1000,
      }}
    >
      {/* Left Section: Logo */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          height: "100%",
          paddingLeft: "1rem",
          width: "15rem",
        }}
      >
        <img
          src={Logo} // Adjust the path if needed
          alt="Experium Logo"
          style={{ height: "90%", width: "15rem" }} // Adjusts logo size to 8% of header height
        />
      </Box>

      {/* Middle Section: Menu Bar */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "4rem",
        }}
      >
        {menuItems.map((item, index) => (
          <Typography
            key={index}
            onClick={() => (window.location.href = `/${item.path.toLowerCase()}`)} // Redirect logic
            sx={{
              fontSize: "1.3rem",
              fontWeight: "400",
              cursor: "pointer",
              lineHeight: "18px",
              color: pageId === item.path ? "#C0029D" : "#E4A3D4", // Active item color
              fontFamily: "League Spartan",
              transition: "all 0.3s ease",
              transform: pageId === item.path ? "scale(1.2)" : "none", // Active item zoom
              "&:hover": {
                color: "#C0029D",
                transform: "scale(1.2)", // Smooth zoom effect on hover
              },
            }}
          >
            {item.title}
          </Typography>
        ))}
      </Box>

      {/* Right Section: Link and Button */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "2rem",
          paddingRight: "5rem",
          fontFamily: "League Spartan",
        }}
      >
        <Link
          href="#visit-us"
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
          sx={{
            fontWeight: "400",
            background: "linear-gradient(171.21deg, #EB1DC5 7.36%, #350793 94.96%)",
            fontFamily: "Michroma",
            borderRadius: "20px",
            fontSize: "0.7rem",
            color: "white",
            cursor: "pointer",
            padding: "10px 18px",
            "&:hover": {
              background: "linear-gradient(171.21deg, #D015B0 7.36%, #2D066F 94.96%)",
            },
          }}
        >
          Book Now
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
