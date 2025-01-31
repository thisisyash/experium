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
const GroupBooking = ({garden}) => {
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
      
    </Box>
  )
}

export default GroupBooking
