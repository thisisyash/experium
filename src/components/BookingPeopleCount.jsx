import React from "react";
import { Card, CardContent, Typography, TextField, Button, Grid, Paper, CardActionArea , Box} from "@mui/material";
import Slider from "react-slick"; // Import the slick carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import coupon from "../assets/coupon1.png";
// Left Card: Ticket Types and Carousel for Trending Coupons
const LeftCardContent = () => (
  <CardContent sx={{borderRadius:'15px', justifyContent:'center'}}>
  
    <Typography variant="h5" gutterBottom sx={{ fontFamily: "Righteous" }}>
            Select Number of People
          </Typography>
          <Typography variant="body2" paragraph sx={{ fontFamily: "Righteous" }}>
            Plan your visit to Experium Eco Park with your group by selecting the number of people attending. Choose
            the right number of adults, children, and senior citizens for a personalized experience.
          </Typography>
    <Typography variant="h6" gutterBottom sx={{ fontFamily: "Righteous" }}>
      Trending Offers
    </Typography>

    {/* Carousel for Trending Coupons */}
    <Slider dots={true} infinite={true} speed={100} slidesToShow={1} slidesToScroll={1}>
      <div>
      <img 
          src={coupon} 
          alt="Side Illustration"
          style={{ 
            maxWidth: "100%", 
            minHeight: "100%",  
            borderRadius: "8px", 
            objectFit: "contain" 
          }} 
        />
      </div>
      <div>
      <img 
          src={coupon} 
          alt="Side Illustration"
          style={{ 
            maxWidth: "100%", 
            minHeight: "100%",  
            borderRadius: "8px", 
            objectFit: "contain" 
          }} 
        />
      </div>
      <div>
      <img 
          src={coupon} 
          alt="Side Illustration"
          style={{ 
            maxWidth: "100%", 
            minHeight: "100%",  
            borderRadius: "8px", 
            objectFit: "contain" 
          }} 
        />
      </div>
    </Slider>
  </CardContent>
);

// Right Card: Number of People Form
const SelectNumberOfPeople = ({ onNext, onBack }) => (
  <Grid container spacing={2} justifyContent="center" style={{ padding: 20 }}>
    {/* Left Card - Ticket Info */}
    <Grid item xs={12} md={6}>
      <Card style={{ padding: 2, borderRadius:'15px' }}>
        <LeftCardContent />
      </Card>
    </Grid>

    {/* Right Card - Number of People Form */}
    <Grid item xs={12} md={6}>
      <Card sx={{borderRadius:'15px'}}>
        <CardContent>
       
          <TextField label="Adults" type="number" fullWidth variant="outlined" margin="normal" />
          <TextField label="Children" type="number" fullWidth variant="outlined" margin="normal" />
          <TextField label="Senior Citizens (Above 60)" type="number" fullWidth variant="outlined" margin="normal" />
          <TextField label="Coupon Code" type="number" fullWidth variant="outlined" margin="normal" />
          <div style={{ marginTop: 0, display:'flex', flexDirection:'row' }}>
        
           <Typography  sx={{fontFamily:'Righteous', marginY:'10px'}}>Total : 3000</Typography>
           
          </div>
            <Button onClick={onBack} variant="outlined" color="secondary" style={{ marginRight: 10 }}>
              Back
            </Button>
            <Button onClick={onNext} variant="contained" sx={{background:'#800080'}}>
              Next
            </Button>
          
        </CardContent>
      </Card>
    </Grid>
  </Grid>
);

export default SelectNumberOfPeople;