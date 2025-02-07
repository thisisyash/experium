import React, { useState } from "react";
import { Card, CardContent, Typography, Button, Box, Grid, CardMedia } from "@mui/material";
import Calendar from "react-calendar"; // Import react-calendar
import "react-calendar/dist/Calendar.css"; // Import react-calendar's default styles
import "./calendar.css"; // Import the custom CSS for calendar styles
import dates from "./dates.json"; // Import dates.json
import SideImage from "../assets/05_img.png";

const SelectDate = ({ onNext, onBack }) => {
  const today = new Date(); // Get today's date
  const yearEnd = new Date(new Date().getFullYear(), 11, 31); // December 31st of the current year

  // Default selected date (can be modified)
  const [selectedDate, setSelectedDate] = useState(today); // Default: today

  // Function to determine the status of each date
  const getDateStatus = (date) => {
    const dateString = date.toISOString().split('T')[0]; // Format date to YYYY-MM-DD

    // If the date is today, check its group and return the correct status
    if (date.toDateString() === today.toDateString()) {
      // If today is in the "booked" (sold out) list
      if (dates.booked.includes(dateString)) return "soldOut"; // Red (Sold Out)
      
      // If today is in the "holidays" (unavailable) list
      if (dates.holidays.includes(dateString)) return "unavailable"; // Grey (Unavailable)

      // If today is in the "fastFilling" (fast filling) list
      if (dates.fastFilling.includes(dateString)) return "fastFilling"; // Orange (Fast Filling)

      // Otherwise, if today is not in any list, it is available
      return "available"; // Green (Available)
    }

    // Skip any previous dates by checking if the date is before today
    if (date < today) return "closed"; // You can use a custom class or style for previous dates

    // Check if the date is in the "booked" (sold out) list
    if (dates.booked.includes(dateString)) return "soldOut"; // Red (Sold Out)

    // Check if the date is in the "holidays" (unavailable) list
    if (dates.holidays.includes(dateString)) return "unavailable"; // Grey (Unavailable)

    // Check if the date is in the "fastFilling" list
    if (dates.fastFilling.includes(dateString)) return "fastFilling"; // Orange (Fast Filling)

    // Otherwise, it's available
    return "available"; // Green (Available)
  };

  // Handle date selection
  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };

  return (
    <Grid container spacing={1} justifyContent="center" style={{ padding: 10 }}>
      {/* Left Content Section - Plan Your Visit */}
      <Grid item xs={12} md={6}>
        <Card 
          sx={{
            padding: 6,
            backgroundColor: "#fff",
            borderRadius: "8px",
            boxShadow: 3,
            textAlign: "center",
            paddingY: "25px",
          }}
        >
          <Typography variant="h4" sx={{ fontFamily: "Righteous" }} gutterBottom>
            Plan Your Visit
          </Typography>
          <Typography  sx={{ fontFamily: "Righteous", fontWeight:'200 !important', marginBottom:'25px' }} >
            Discover nature, adventure, and luxury at Experium Eco Park. Let's begin by selecting your visit date.
          </Typography>
          <Card sx={{ 
    maxWidth: "100%", 
    minHeight: "100%",  
    borderRadius: "8px", 
    objectFit: "contain"
}}>
  <CardMedia
    component="img"
    src={SideImage}  // Use this for the image source
    alt="Side Illustration"
    sx={{
      maxWidth: "100%",
      minHeight: "100%",
      borderRadius: "8px",
      objectFit: "cover"
    }}
  />
</Card>

        </Card>
      </Grid>

      {/* Right Calendar Section */}
      <Grid item xs={12} md={6}>
        <Card 
          sx={{ 
            display: "flex", 
            flexDirection: "row", 
            alignItems: "center", 
            justifyContent: "center", 
            textAlign: "center",
            borderRadius: "15px",
            boxShadow: 3,
            fontFamily: "Righteous",
            paddingY: "10px",
          }}
        >
          <CardContent>
            <Typography variant="h6" sx={{ fontFamily: "Righteous" }} gutterBottom>
              Select Date
            </Typography>

            <Box sx={{ display: "flex", justifyContent: "center", fontFamily: "Righteous" }}>
              <Calendar
                value={selectedDate}
                onChange={handleDateChange}
                minDate={today}
                maxDate={yearEnd}
                tileClassName={({ date }) => getDateStatus(date)} // Set custom tile class based on date status
              />
            </Box>

            {/* Selected Date Display */}
          

            {/* Labels below the calendar */}
            <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
              <Typography variant="body2" sx={{ marginRight: 2 }}>
                <span className="available-label">Available</span>
              </Typography>
              <Typography variant="body2" sx={{ marginRight: 2 }}>
                <span className="fastFilling-label">Fast Filling</span>
              </Typography>
              <Typography variant="body2">
                <span className="soldOut-label">Sold Out</span>
              </Typography>
              <Typography variant="body2" sx={{ marginLeft: 2 }}>
                <span className="unavailable-label">Unavailable</span>
              </Typography>
            </Box>
            <Box sx={{ marginTop: 2 }}>
              <Typography  sx={{ fontFamily: "Righteous", fontWeight: "100" }}>
                Selected Date: {selectedDate.toLocaleDateString()}
              </Typography>
            </Box>
            <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
              <Button 
                onClick={onNext} 
                variant="contained" 
                color="primary"
                sx={{
                  fontWeight: "bold",
                  borderRadius: "18px",
                  boxShadow: 2,
                }}
              >
                Confirm
              </Button>
            </div>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default SelectDate;