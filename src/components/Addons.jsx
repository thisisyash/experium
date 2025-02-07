import React, { useState } from "react";
import { Card, CardContent, Typography, Button, Grid, Paper, Checkbox, FormControlLabel, FormControl,CardMedia, FormLabel } from "@mui/material";
import SideImage from "../assets/addons.png";
// Left Card: Description of Add-ons
const LeftCardContent = () => (
  <CardContent>
    <Typography variant="h5" gutterBottom  sx={{ fontFamily:'Righteous'}}>
      Select from Our Add-ons
    </Typography>
    <Typography variant="body1"  sx={{ fontFamily:'Righteous'}}>
      Choose the additional services to make your visit more enjoyable:
    </Typography>
  
  <CardMedia
    component="img"
    src={SideImage}  // Use this for the image source
    alt="Side Illustration"
    sx={{
      maxWidth: "100%",
      maxHeight: "200px",
      borderRadius: "8px",
      objectFit: "contain",
      justifyContent: "center",
      alignItems: "center",
    }}
  />

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
    <Grid container spacing={2} justifyContent="center" sx={{ padding:5 ,justifyContent:'center'}}>
      {/* Left Card - Add-on Information */}
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
          <LeftCardContent />
        </Card>
      </Grid>

      {/* Right Card - Add-ons Form with Checkboxes */}
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
        
            <FormControl component="fieldset" style={{ marginBottom: 10 }}>
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
              <Typography sx={{fontSize:'small'}} >
     A dedicated event manager to help with all your event planning needs.
    </Typography>
            </FormControl>

            {/* Food */}
            <FormControl component="fieldset" style={{ marginBottom: 10 }}>
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
             <Typography sx={{fontSize:'small'}} >
       Enjoy a wide variety of meal options available within the park.
    </Typography>
            </FormControl>

            {/* Tour Guide */}
            <FormControl component="fieldset" style={{ marginBottom: 10 }}>
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
              <Typography sx={{fontSize:'small'}} >
       Get a personalized tour of the park with an expert guide.
    </Typography>
            </FormControl>

            {/* Room */}
            <FormControl component="fieldset" style={{ marginBottom: 10 }}>
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
              <Typography sx={{fontSize:'small'}} >
     Book a comfortable room for your stay at Experium.
    </Typography>
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
                sx={{backgroundColor:'#800080'}}
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