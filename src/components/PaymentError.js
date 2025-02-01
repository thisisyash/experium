import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import errorGif from '../assets/error.gif'
import Grid from "@mui/material/Grid2"

const PaymentError = ({ open, onClose }) => {
  if (!open) return null; // Don't render the card if it's not open

  return (
    <Grid container justifyContent="center" style={{ marginTop: '20px' }}>
      <Card sx={{ maxWidth: 600, backgroundColor: '#f8d7da', padding: '20px' }}>
        <CardContent>
          <Grid container justifyContent="center" style={{ marginBottom: '16px' }}>
            <img src={errorGif} alt="Payment Error" style={{ width: '50px', height: '50px' }} />
          </Grid>
          <Typography variant="h6" align="center" style={{ fontWeight: 'bold', color: '#721c24' }}>
            Payment Failed
          </Typography>
          <Typography variant="body1" align="center" style={{ marginTop: '10px', color: '#721c24' }}>
            Unfortunately, your payment could not be processed. Please try again or contact our support team for assistance.
          </Typography>
        </CardContent>
        <div style={{justifySelf:'center', alignItems:'center'}}> <Button variant='contained' sx={{background:'#f5eeee' ,color:'darkred'}}>Contact Us</Button></div> 
      </Card>
    </Grid>
  );
};

export default PaymentError;