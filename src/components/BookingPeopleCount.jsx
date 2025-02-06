import React from "react";
import { Card, CardContent, Typography, TextField, Button, Grid, Paper, CardActionArea } from "@mui/material";
import Slider from "react-slick"; // Import the slick carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Left Card: Ticket Types and Carousel for Trending Coupons
const LeftCardContent = () => (
  <CardContent>
    <Typography variant="h5" gutterBottom>
      Grab your Tickets
    </Typography>
    <Typography variant="body1" paragraph>
      Experium provides regular tickets, fast track tickets for queue skipping, and special offer tickets designed
      exclusively for students, Birthday Celebrations, and Women. Make your choice.
    </Typography>

    <Typography variant="h6" gutterBottom>
      Trending Coupons
    </Typography>

    {/* Carousel for Trending Coupons */}
    <Slider dots={true} infinite={true} speed={500} slidesToShow={1} slidesToScroll={1}>
      <div>
        <img src="https://via.placeholder.com/350x150" alt="Coupon 1" />
      </div>
      <div>
        <img src="https://via.placeholder.com/350x150" alt="Coupon 2" />
      </div>
      <div>
        <img src="https://via.placeholder.com/350x150" alt="Coupon 3" />
      </div>
    </Slider>
  </CardContent>
);

// Right Card: Number of People Form
const SelectNumberOfPeople = ({ onNext, onBack }) => (
  <Grid container spacing={4} justifyContent="center" style={{ padding: 20 }}>
    {/* Left Card - Ticket Info */}
    <Grid item xs={12} md={5}>
      <Paper style={{ padding: 20 }}>
        <LeftCardContent />
      </Paper>
    </Grid>

    {/* Right Card - Number of People Form */}
    <Grid item xs={12} md={5}>
      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Select Number of People
          </Typography>
          <TextField label="Adults" type="number" fullWidth variant="outlined" margin="normal" />
          <TextField label="Children" type="number" fullWidth variant="outlined" margin="normal" />
          <TextField label="Senior Citizens(Above 60)" type="number" fullWidth variant="outlined" margin="normal" />
          <div style={{ marginTop: 20 }}>
            <Button onClick={onBack} variant="outlined" color="secondary" style={{ marginRight: 10 }}>
              Back
            </Button>
            <Button onClick={onNext} variant="contained" color="primary">
              Next
            </Button>
          </div>
        </CardContent>
      </Card>
    </Grid>
  </Grid>
);

export default SelectNumberOfPeople;
