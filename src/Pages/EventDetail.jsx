import React, { useState } from "react"
import {
  Box,
  Typography,
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
} from "@mui/material"
import Header from "../components/Header.jsx"
import Album from "../assets/album.png"
const EventDetailPage = () => {
  const [personCount, setPersonCount] = useState(1)
  const [includeFood, setIncludeFood] = useState(false)

  // Handle person count increase and decrease
  const handleIncrease = () => setPersonCount(personCount + 1)
  const handleDecrease = () => setPersonCount(Math.max(1, personCount - 1)) // Prevent negative count
  const pageData = {
    imageUrl: Album, // The imported image
    title: "Title of the show",
    description:
      "Join us for an unforgettable event filled with fun, excitement, and amazing experiences. us for an unforgettable event filled with fun, excitement, and amazing experiences. Book your spot today!",
    bookingOptions: {
      persons: {
        label: "Select No. of Persons",
        min: 1,
        max: 10,
      },
      includeFood: "Include Food",
      confirmButtonText: "Confirm Booking",
    },
    date: "12th January 2025",
    timings: "10:00 AM - 5:00 PM",
  }

  return (
    <Box
      sx={{
        position: "absolute",
        display: "flex",
        width: "100%",
        top: "14vh",
        overflow: "hidden",
        paddingTop: "30px",
        height: "63%",
      }}
    >
      <Header pageId={"events"}/>
      {/* First Section: Image */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "90%",
          marginLeft: "100px", // Moves the entire container to the right
        }}
      >
        <Box
          component="img"
          src={Album} // Use the imported image
          alt="Album"
          sx={{
            width: "100%", // Adjust as needed for responsiveness
            height: "100%", // Adjust as needed
            borderRadius: "8px", // Optional: Adds rounded corners
          }}
        />
      </Box>

      {/* Second Section: Details */}
      <Box
        sx={{
          flex: 1,
          paddingLeft: "2rem",
          paddingTop: "2rem",
          display: "flex",
          flexDirection: "column",
          
        }}
      >
        {/* Title */}
        <Typography fontFamily="Righteous" fontSize="1.8rem" fontWeight="bold" sx={{marginBottom:'20px'}}>
          <Box component="span" sx={{ color: "black" }}>
            Booking for:
          </Box>{" "}
          <Box component="span" sx={{ color: "#C0029D" }}>
            {pageData.title}
          </Box>
        </Typography>

        {/* Description */}
        <Typography
          sx={{
            fontSize: "0.9rem",
            lineHeight: "18px",
            fontWeight: "400",
            fontFamily: "Cabin",
            marginBottom:'20px',
            color:'#888888'
          }}
        >
          {pageData.description}
        </Typography>
        <Box></Box>
        {/* Number of Persons */}
        <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" ,marginBottom:'20px'}}>
          <Typography
            fontWeight="400"
            sx={{ fontFamily: "Poppins" }}
            fontSize={"1.1rem"}
          >
            Select NO. Of persons:
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
            <Button
              variant="outlined"
              onClick={handleDecrease}
              sx={{ minWidth: "30px", border: "0px", color: "black" }}
            >
              -
            </Button>
            <Typography
              sx={{
                textAlign: "center",
                border: "0px",
                fontWeight: "400",
                fontSize: "o.5rem",
                fontFamily: "Poppins",
                color: "#C0029D",
              }}
              readOnly
              inputProps={{
                readOnly: true,
                style: { textAlign: "center" },
              }}
            >
              {personCount < 10 ? "0" + personCount : personCount}
            </Typography>
            <Button
              variant="outlined"
              onClick={handleIncrease}
              sx={{ minWidth: "30px", border: "0px", color: "black" }}
            >
              +
            </Button>
          </Box>
        </Box>

        {/* Food Option */}

        <Box
          sx={{
            display: "flex",
            marginBottom:'20px',
            alignItems: "center", // Align checkbox and text vertically
            gap: "0.5rem", // Add spacing between the checkbox and text
          }}
        >
          <Checkbox
            checked={includeFood}
            onChange={(e) => setIncludeFood(e.target.checked)}
            color="primary"
          />
          <Typography
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: "400",
              fontSize: "1rem",
              color: "#C0029D",
            }}
          >
            Include Food in your Ticket
          </Typography>
        </Box>

        {/* Confirm Booking Button */}
        <Box
          sx={{
            background: "#C0029D",
            fontFamily: "Poppins, sans-serif",
            width: "50%",
            borderRadius: "15px",
            color: "white",
            textAlign: "center",
          }}
          size="large"
        >
          <Typography
            sx={{
              fontFamily: "Poppins, sans-serif",
              color: "white",
              padding: "10px",
              fontWeight: "400",
            }}
          >
            Confirm Booking
          </Typography>
        </Box>
      </Box>

      {/* Third Section: Date and Timing */}
      <Box
        sx={{
          flex: 1,
          padding: "2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          fontFamily: "Poppins",
          fontSize: "1rem",
        }}
      >
        {/* Date */}
        <Box
          sx={{
            display: "flex",

            marginBottom: "0.3rem",
            marginTop: "1.2rem",
            gap: "1rem", // Adds spacing between label and value
          }}
        >
          <Typography fontWeight="400" fontFamily="Poppins">
            Date:
          </Typography>
          <Typography fontFamily="Poppins" sx={{ color: "#C0029D" }}>
            {pageData.date}
          </Typography>
        </Box>

        {/* Show Timings */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginBottom: "1rem",
            gap: "1rem", // Adds spacing between label and value
          }}
        >
          <Typography fontWeight="400" fontFamily="Poppins">
            Show Timings:
          </Typography>
          <Typography sx={{ color: "#C0029D" }} fontFamily="Poppins">
            {pageData.timings}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default EventDetailPage
