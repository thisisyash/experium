import React, { useState } from "react";
import PropTypes from "prop-types";
import { Stepper, Step, StepLabel, StepConnector, Box, Grid, Button, Typography } from "@mui/material";
import { height, padding, styled } from "@mui/system";
import { Check, EventNote, LocalAtm, AddCircleOutline, LocalActivitySharp, AddCardSharp, CurrencyRupeeSharp, EventAvailableSharp } from "@mui/icons-material";
import { stepConnectorClasses } from '@mui/material/StepConnector';
import SelectDate from "../components/SelectBookingDate";
import SelectNumberOfPeople from "../components/BookingPeopleCount";
import SelectAddOns from "../components/Addons";
import Logo from "../assets/experium-logo.png";
import Billing from "../components/Billing";
import Header from "../components/Header";
// Custom Connector for Stepper
const CustomStepConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 15,
    marginLeft: 0,
    // left: 'calc(-50% + 16px)',
    // right: 'calc(50% + 16px)',
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: 'black',
      borderWidth: 20,
      marginLeft: 3,
      // height: "25px",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: 'black',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: 'lightgrey',
    // borderTopWidth: 2,
    borderWidth: 20,
    marginRight: 3.5,
    marginLeft: 3.5,
  
  },
}));

// Custom StepIcon for active and completed steps
const CustomStepIcon = (props) => {
  const { active, completed, className } = props;
  const icons = {
    1: <EventAvailableSharp />,
    2: <LocalActivitySharp />,
    3: <AddCircleOutline />,
    4: <CurrencyRupeeSharp />,
  };

  return (
    <div
      className={className}
      style={{
       backgroundColor: active ? "lightgreen" : "white",
       background:completed ? "lightgreen" : "white",
        color: '#000',
        borderRadius: '50%',
        width: 30,
        height: 30,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // fontSize: 18,
        border: completed ? '10px solid black' : '10px solid black',
      }}
    >
      {completed ? <Check /> : icons[String(props.icon)]}
    </div>
  );
};

CustomStepIcon.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool,
  className: PropTypes.string,
  icon: PropTypes.node,
};

// Main GroupBooking Component
const GroupBooking = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = ["Date", "Tickets", "Add-ons", "Billing"];

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
    <Box sx={{ backgroundColor: '#f5effe', fontFamily: 'Italiana', marginTop: '15vh' , }}>
    <Header/>
      <Typography variant="h5" align="center" sx={{ paddingTop: '2vh', fontFamily:'Righteous' }} gutterBottom>
        The Experium Booking
      </Typography>

      <Grid container justifyContent="center" spacing={2}>
        <Grid item xs={12} md={10}>
          {/* Stepper with progress bar */}
          <Box sx={{ position: 'relative' }}>
            <Stepper
              activeStep={activeStep}
              alternativeLabel
              connector={<CustomStepConnector />}
              sx={{fontFamily:'Righteous'}}
            >
              {steps.map((label, index) => (
                <Step key={index}>
                  <StepLabel StepIconComponent={CustomStepIcon}>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>

            {/* Render step content */}
            <div>{renderStepContent(activeStep)}</div>

            {/* Navigation Buttons */}
         
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default GroupBooking;