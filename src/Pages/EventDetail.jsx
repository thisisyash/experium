import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  Checkbox,
} from "@mui/material";
import Header from "../components/Header.jsx";
import Album from "../assets/album.png";

const EventDetailPage = () => {
  const [personCount, setPersonCount] = useState(1);
  const [includeFood, setIncludeFood] = useState(false);

  const handleIncrease = () => setPersonCount(personCount + 1);
  const handleDecrease = () => setPersonCount(Math.max(1, personCount - 1));

  const pageData = {
    imageUrl: Album,
    title: "Title of the show",
    description:
      "Join us for an unforgettable event filled with fun, excitement, and amazing experiences. Book your spot today!",
    date: "12th January 2025",
    timings: "10:00 AM - 5:00 PM",
  };

  return (
    <Box sx={{ backgroundColor: "#f9f9f9", minHeight: "100vh",marginTop:'15vh', fontFamily: "Poppins" }}>
      <Header pageId={"events"} />

      {/* Main Container - Responsive Layout */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // Stacks on mobile, row on desktop
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: { xs: 3, sm: 4, md: 6 },
          alignItems: "center",
        }}
      >
        {/* First Section: Image */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mb: { xs: 4, md: 0 }, // Adds space on mobile
          }}
        >
          <img
            src={Album}
            alt="Event"
            style={{
              width: "100%",
              maxWidth: "500px",
              height:'60vh',
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          />
        </Box>

        {/* Second Section: Details */}
        <Box
          sx={{
            flex: 1,
            paddingLeft: { md: "2rem" },
            paddingTop: { xs: 0, md: "2rem" },
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", md: "flex-start" },
            textAlign: { xs: "center", md: "left" },
            mb: { xs: 4, md: 0 },
          }}
        >
          <Typography fontSize="1.7rem" fontWeight="bold" sx={{ marginBottom: "20px" }}>
            <Box component="span" sx={{ color: "black" }}>
              Booking for:
            </Box>{" "}
            <Box component="span" sx={{ color: "#C0029D" }}>
              {pageData.title}
            </Box>
            
          </Typography>

          <Typography
            sx={{
              fontSize: "0.9rem",
              lineHeight: "18px",
              fontWeight: "400",
              color: "#888888",
              marginBottom: "20px",
              maxWidth: "80%",
            }}
          >
            {pageData.description}
          </Typography>

          {/* Number of Persons */}
          <Box sx={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "20px" }}>
            <Typography fontWeight="400" fontSize="1.1rem">
              Select No. Of persons:
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                border: "1px solid #C0029D",
                borderRadius: "3px",
              }}
            >
              <Button variant="outlined" onClick={handleDecrease} sx={{ minWidth: "30px", border: "0px", color: "black" }}>
                -
              </Button>
              <Typography
                sx={{
                  textAlign: "center",
                  fontWeight: "400",
                  fontSize: "1rem",
                  color: "#C0029D",
                  padding: "5px",
                }}
              >
                {personCount < 10 ? "0" + personCount : personCount}
              </Typography>
              <Button variant="outlined" onClick={handleIncrease} sx={{ minWidth: "30px", border: "0px", color: "black" }}>
                +
              </Button>
            </Box>
          </Box>

          {/* Food Option */}
          <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "20px" }}>
            <Checkbox checked={includeFood} onChange={(e) => setIncludeFood(e.target.checked)} color="primary" />
            <Typography sx={{ fontWeight: "400", fontSize: "1rem", color: "#C0029D" }}>Include Food in your Ticket</Typography>
          </Box>

          {/* Confirm Booking Button */}
          <Box sx={{ background: "#C0029D", width: { xs: "50%", sm: "50%" }, borderRadius: "15px", color: "white", textAlign: "center" }}>
            <Typography sx={{ color: "white", padding: "10px", fontWeight: "400" }}>Confirm Booking</Typography>
          </Box>
        </Box>

        {/* Third Section: Date and Timing */}
        <Box
          sx={{
            flex: 1,
            padding: "2rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start", // Ensures alignment to the left
            textAlign: "left",
            justifyContent: "flex-start", 
            alignSelf:'baseline'// Moves content to the top
          }}
        >
          {/* Date */}
          <Box sx={{ display: "flex", marginBottom: "0.3rem", marginTop: "1.2rem", gap: "1rem" }}>
            <Typography fontWeight="400">Date:</Typography>
            <Typography sx={{ color: "#C0029D" }}>{pageData.date}</Typography>
          </Box>

          {/* Show Timings */}
          <Box sx={{ display: "flex", alignItems: "center", marginBottom: "1rem", gap: "1rem" }}>
            <Typography fontWeight="400">Show Timings:</Typography>
            <Typography sx={{ color: "#C0029D" }}>{pageData.timings}</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default EventDetailPage;
