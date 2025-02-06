import React, { useState } from "react";
import {  Card, CardContent, Typography, Button, Stepper, Step, StepLabel, TextField, FormControl, Select, MenuItem, InputLabel, Paper, Box } from "@mui/material";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import SelectDate from "../components/SelectBookingDate";
import Grid from "@mui/material/Grid2";
import SelectNumberOfPeople from "../components/BookingPeopleCount";
import SelectAddOns from "../components/Addons";

import Billing from "../components/Billing";
import Header from "../components/Header";
const GroupBooking = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
   
    "Date",
    "Tickets",
    "Add-ons",
    "Billing",
  ];

  const handleNext = () => setActiveStep((prevStep) => prevStep + 1);
  const handleBack = () => setActiveStep((prevStep) => prevStep - 1);

  const renderStepContent = (stepIndex) => {
    switch (stepIndex) {
    
      case 0:
        return <SelectDate onNext={handleNext} onBack={handleBack} />;
      case 1:
        return <SelectNumberOfPeople onNext={handleNext} onBack={handleBack} />;
      case 2:
        return <SelectAddOns onNext={handleNext} onBack={handleBack} />;
      case 3:
        return <Billing onBack={handleBack} />;
      default:
        return "Unknown Step";
    }
  };

  return (
    <Box sx={{ backgroundColor: '#f5effe', fontFamily: 'Italiana',marginTop:'15vh' }}>
        <Box sx={{ position: 'relative', zIndex: 10 }}>
        <Header pageId={""} />
      </Box>
    <Grid container justifyContent="center" spacing={4} >
      <Grid item xs={12} md={5}>
        
          <Typography variant="h5" align="center" gutterBottom>
            The Experium Booking
          </Typography>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label, index) => (
              <Step key={index}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <div >
            {renderStepContent(activeStep)}
          </div>
        
      </Grid>


    </Grid>
    </Box>
  );
};

export default GroupBooking;