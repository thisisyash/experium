import React, { useState } from "react";
import { Card, CardContent, Typography, Button, Grid, Paper, Checkbox, FormControlLabel, FormControl, FormLabel } from "@mui/material";

// Left Card: Description of Add-ons
const LeftCardContent = () => (
  <CardContent>
    <Typography variant="h5" gutterBottom>
      Select from Our Add-ons
    </Typography>
    <Typography variant="body1" paragraph>
      Choose the additional services to make your visit more enjoyable:
    </Typography>
    <Typography variant="body2" paragraph>
      <strong>Event Manager:</strong> A dedicated event manager to help with all your event planning needs.
    </Typography>
    <Typography variant="body2" paragraph>
      <strong>Food:</strong> Enjoy a wide variety of meal options available within the park.
    </Typography>
    <Typography variant="body2" paragraph>
      <strong>Tour Guide:</strong> Get a personalized tour of the park with an expert guide.
    </Typography>
    <Typography variant="body2" paragraph>
      <strong>Room:</strong> Book a comfortable room for your stay at Experium.
    </Typography>
  </CardContent>
);

// Right Card: Add-ons Form with Checkboxes
const SelectAddOns = ({ onNext, onBack }) => {
  const [selectedAddOns, setSelectedAddOns] = useState({
    eventManager: false,
    food: false,
    tourGuide: false,
    room: false,
  });

  const handleChange = (event) => {
    setSelectedAddOns({
      ...selectedAddOns,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <Grid container spacing={4} justifyContent="center" style={{ padding: 20 }}>
      {/* Left Card - Add-on Information */}
      <Grid item xs={12} md={5}>
        <Paper style={{ padding: 20 }}>
          <LeftCardContent />
        </Paper>
      </Grid>

      {/* Right Card - Add-ons Form with Checkboxes */}
      <Grid item xs={12} md={5}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Select Add-ons
            </Typography>

            {/* Event Manager */}
            <FormControl component="fieldset" style={{ marginBottom: 20 }}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedAddOns.eventManager}
                    onChange={handleChange}
                    name="eventManager"
                  />
                }
                label="Event Manager"
              />
            </FormControl>

            {/* Food */}
            <FormControl component="fieldset" style={{ marginBottom: 20 }}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedAddOns.food}
                    onChange={handleChange}
                    name="food"
                  />
                }
                label="Food"
              />
            </FormControl>

            {/* Tour Guide */}
            <FormControl component="fieldset" style={{ marginBottom: 20 }}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedAddOns.tourGuide}
                    onChange={handleChange}
                    name="tourGuide"
                  />
                }
                label="Tour Guide"
              />
            </FormControl>

            {/* Room */}
            <FormControl component="fieldset" style={{ marginBottom: 20 }}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedAddOns.room}
                    onChange={handleChange}
                    name="room"
                  />
                }
                label="Room"
              />
            </FormControl>

            <div style={{ marginTop: 20 }}>
              <Button onClick={onBack} variant="outlined" color="secondary" style={{ marginRight: 10 }}>
                Back
              </Button>
              <Button
                onClick={() => {
                  console.log(selectedAddOns); // For debugging or submitting the data
                  onNext();
                }}
                variant="contained"
                color="primary"
              >
                Next
              </Button>
            </div>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default SelectAddOns;