import React from 'react';
import { Box, Button, Typography, Card, CardMedia, CardContent, Fade, Slide } from '@mui/material';
import Grid from "@mui/material/Grid2";
import Header from '../components/Header';
import Ecopark from '../assets/ecopark.png'
const VisitUs = () => {

  return (
    <Box>
    <Header/>

    <Box sx={{ 
      padding: { xs: 3, sm: 4, md: 6 }, 
      backgroundColor: '#f5effe',
      fontFamily: 'Righteous',
      textAlign: 'center',
      marginTop: { xs: '64px', sm: '80px', md: '90px' }, // Ensure page starts after Header
      minHeight: 'calc(100vh - 90px)' 
    }}>

              <div style={styles.app}>
              {/* Banner Section */}
              <section style={styles.banner}>
                <img
                  src={Ecopark}
                  alt="Banner"
                  style={styles.bannerImage}
                />
              </section>
        </div>
      {/* Title Section */}
      <Fade in={true} timeout={1000}>
        <Typography 
          variant="h4" 
          align="center" 
          gutterBottom 
          sx={{ 
            color: '#C0029D', 
            fontWeight: 'bold',
            textTransform: 'uppercase',
            letterSpacing: '2px'
          }}>
          Visit Experium Eco Park
        </Typography>
      </Fade>

      {/* Description Section */}
      <Fade in={true} timeout={1500}>
        <Typography 
          variant="body1" 
          align="center" 
          paragraph 
          sx={{ 
            color: '#6a1b9a', 
            lineHeight: 1.8, 
            maxWidth: '800px', 
            margin: '0 auto',
            fontSize: { xs: '14px', sm: '16px', md: '18px' }
          }}>
          Discover India's largest eco-friendly park, featuring over 25,000 plant species, a glow garden, and thrilling adventure activities.
        </Typography>
      </Fade>

      {/* Gallery Section */}
      {/* <Typography 
        variant="h5" 
        align="center" 
        gutterBottom 
        sx={{ 
          color: '#C0029D', 
          fontWeight: 'bold', 
          marginTop: 4, 
          textTransform: 'uppercase',
          letterSpacing: '1px'
        }}>
        Explore Our Attractions
      </Typography> */}

      {/* <Grid container spacing={4} justifyContent="center">
        {['Miracle Flower Gardens', 'Plam Garden', 'Sculpture Park'].map((title, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Slide direction="up" in={true} timeout={2000}>
              <Card 
                sx={{ 
                  boxShadow: 4, 
                  borderRadius: 3, 
                  transition: 'transform 0.4s ease, box-shadow 0.3s ease',
                  '&:hover': { transform: 'scale(1.08)', boxShadow: 8 },
                  overflow: 'hidden'
                }}>
                <CardMedia
                  component="img"
                  alt={title}
                  height="200"
                  image={`https://loremflickr.com/1280/720`} // Replace with actual image URLs
                  sx={{ 
                    objectFit: "contain",
                    filter: 'brightness(0.9)',
                    transition: 'filter 0.3s ease-in-out',
                    '&:hover': { filter: 'brightness(1.1)' }
                  }}
                />
                <CardContent sx={{ padding: 3 }}>
                  <Typography 
                    variant="h6" 
                    align="center" 
                    sx={{ 
                      color: '#6a1b9a', 
                      fontWeight: 'bold',
                      textTransform: 'uppercase',
                      fontSize: '18px'
                    }}>
                    {title}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    align="center" 
                    sx={{ 
                      color: '#555', 
                      lineHeight: 1.6,
                      fontSize: '14px'
                    }}>
                    {title === 'Miracle Flower Gardens' && 'Explore over 25,000 plant species from 85 countries.'}
                    {title === 'Palm Garden' && 'Experience India\'s first four-direction zipline and more.'}
                    {title === 'Sculpture Park' && 'Discover 20 towering stainless steel sculptures.'}
                  </Typography>
                </CardContent>
              </Card>
            </Slide>
          </Grid>
        ))}
      </Grid> */}

      {/* Contact Information */}
   {/* Contact Information */}
<Typography 
  variant="h5" 
  align="center" 
  gutterBottom 
  sx={{ 
    color: '#6a1b9a', 
    fontWeight: 'bold', 
    marginTop: '40px',
    textTransform: 'uppercase',
    letterSpacing: '1px'
  }}>
  Contact Information
</Typography>

<Box 
  sx={{
    maxWidth: '800px',
    margin: '0 auto',
    textAlign: 'left',
    backgroundColor: '#fff', 
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    lineHeight: 1.8
  }}
>

<Grid container justifyContent={"space-evenly"}>
  
    <Grid item xs={5} sm={4} md={3} >
    <Typography 
    variant="body1" 
    sx={{ color: '#6a1b9a', fontWeight: 'bold', fontSize: '18px', marginBottom: '10px' }}
  >
    📍 Location:
  </Typography>
  <Typography variant="body2" sx={{ color: '#333', fontSize: '16px' }}>
    Proddutur Village<br/> Near Pragati Resorts<br/> Chilukuru Balaji Temple Road<br/>  Hyderabad<br/>  Telangana <br/> 501503
  </Typography>
    </Grid>
    <Grid item xs={5} sm={4} md={3} >
    <Typography 
    variant="body1" 
    sx={{ color: '#6a1b9a', fontWeight: 'bold', fontSize: '18px', marginTop: '20px' }}
  >
    ⏰ Timings:
  </Typography>
  <Typography variant="body2" sx={{ color: '#333', fontSize: '16px' }}>
    Open daily from 10:00 AM to 8:00 PM
  </Typography>

  <Typography 
    variant="body1" 
    sx={{ color: '#6a1b9a', fontWeight: 'bold', fontSize: '18px', marginTop: '20px' }}
  >
    📞 Contact:
  </Typography>
  <Typography variant="body2" sx={{ color: '#333', fontSize: '16px' }}>
    Phone: 999999999
  </Typography>
    </Grid>

</Grid>
    



</Box>


  
    </Box>
    </Box>
  );
};

const styles = {
    app: {
      fontFamily: "Arial, sans-serif",
    },
    banner: {
      width: "100%",
      height: "50vh",
      position: "relative",
    },
    bannerImage: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
    gridSection: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "20px",
      padding: "40px",
      alignItems: "center",
      backgroundColor: "#f9f9f9",
    },
    gridLeft: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    gridImage: {
      width: "500px",
      height: "auto",
      borderRadius: "10px",
    },
    gridRight: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      backgroundColor: "#ffffff",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      width: "100%",
      maxWidth: "400px",
    },
    label: {
      fontSize: "16px",
      fontWeight: "500",
      color: "#333",
    },
    input: {
      padding: "12px",
      fontSize: "16px",
      border: "1px solid #ccc",
      borderRadius: "8px",
      outlineColor: "#4CAF50",
      transition: "border-color 0.3s ease",
    },
    submitBtn: {
      padding: "12px",
      fontSize: "18px",
      backgroundColor: "#4CAF50",
      color: "#fff",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
    },
  
    
  };
export default VisitUs;
