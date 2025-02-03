import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import Grid from "@mui/material/Grid2";
import successGif from '../assets/success.gif'; // Path to your GIF

const PaymentSuccess = ({ open, onClose }) => {
  if (!open) return null; // Don't render the card if it's not open

  return (
    <>
    <Grid container justifyContent="center" style={{ marginTop: '20px',position:'absolute',left:'30%',top:'20%'}}>
      <Card sx={{ maxWidth: 600, backgroundColor: '#e8f5e9', padding: '20px' }}>
        <CardContent>
          <Grid container justifyContent="center" style={{ marginBottom: '16px' }}>
            <img src={successGif} alt="Payment Success" style={{ width: '80px', height: '80px' }} />
          </Grid>
          <Typography variant="h6" align="center" style={{ fontWeight: 'bold' }}>
            Payment Successful!
          </Typography>
          <Typography variant="body1" align="center" style={{ marginTop: '10px' }}>
            Thank you for confirming your payment. An expert from our team will get in touch with you soon to assist with your needs.
          </Typography>
        </CardContent>
      <div style={{justifySelf:'center', alignItems:'center'}}> <Button href='/' variant='contained' sx={{background:'white' ,color:'#C0029D'}}>Go to Home</Button></div> 
      </Card>
    </Grid>
        </>
  );
};

export default PaymentSuccess;