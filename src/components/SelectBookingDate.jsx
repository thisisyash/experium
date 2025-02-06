import React from "react";
import { Card, CardContent, Typography, Button,Grid, Box } from "@mui/material";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import SideImage from "../assets/05_img.png";

const SelectDate = ({ onNext, onBack }) => (
  <Grid container spacing={4} justifyContent="center" style={{ padding: 20 }}>
    {/* Left Image Section */}
    <Grid item xs={12} md={5}>
      <img 
        src={SideImage} 
        alt="Side Illustration"
        style={{ 
          maxWidth: '100%', 
          minHeight: '100%',  
          borderRadius: '8px' 
        }} 
      />
    </Grid>

    {/* Right Card - Calendar & Buttons */}
    <Grid item xs={12} md={5}>
      <Card 
        sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center', 
          padding: 2,
          textAlign: 'center',
          minHeight: '350px'
        }}
      >
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Select Date
          </Typography>
          
          <Box sx={{ display: 'flex', justifyContent: 'center',}}>
            <Calendar
              tileClassName={({ date, view }) => {
                if (date.getDay() === 0 || date.getDay() === 6) {
                  return 'unavailable';
                }
                return '';
              }}
            />
          </Box>

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
            {/* <Button 
              onClick={onBack} 
              variant="outlined" 
              color="secondary" 
              sx={{ marginRight: 2 }}
            >
              Back
            </Button> */}
            <Button 
              onClick={onNext} 
              variant="contained" 
              color="primary"
            >
              Confirm
            </Button>
          </div>
        </CardContent>
      </Card>
    </Grid>
  </Grid>
);

export default SelectDate;
