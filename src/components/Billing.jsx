import React, { useState } from "react";
import { Card, CardContent, Typography, TextField, Button, Paper, Checkbox, FormControlLabel } from "@mui/material";
import Grid from "@mui/material/Grid";
// Left Card: Booking Details
const LeftCardContent = () => (
  <CardContent>
    <Typography variant="h5" gutterBottom>
      Booking Summary
    </Typography>
    <Typography variant="h6" >
      <strong>Booking Type:</strong> Regular Ticket
    </Typography>
    <Typography variant="h6" >
      <strong>Event Manager:</strong> Yes
    </Typography>
    <Typography variant="h6" >
      <strong>Food:</strong> Yes
    </Typography>
    <Typography variant="h6" >
      <strong>Tour Guide:</strong> No
    </Typography>
    <Typography variant="h6" >
      <strong>Room:</strong> Yes
    </Typography>
    <Typography variant="h6" >
      <strong>Total Price:</strong> $150
    </Typography>
  </CardContent>
);

// Right Card: Customer Billing Details
const Billing = ({ onBack }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    pincode: "",
    agreeTnC: false,
    bookingForSomeoneElse: false,
    receiverFullName: "",
    receiverEmail: "",
    receiverPhone: "",
    receiverPincode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.checked,
    });
  };

  return (
    <Grid container spacing={2} justifyContent="center" style={{ padding: 10, display:'flex' }}>
      {/* Left Card - Booking Details */}
      <Grid item xs={12} md={5}>
        <Paper style={{ padding: 20 }}>
          <LeftCardContent />
        </Paper>
        <Button onClick={onBack} variant="outlined" color="secondary" style={{ marginRight: 10 }}>
                Back
              </Button>
      </Grid>
      

      {/* Right Card - Billing Details */}
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Billing Details
            </Typography>

            <TextField
              label="Full Name"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              margin="normal"
            />
            <TextField
              label="Email Address"
              name="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              margin="normal"
            />
            <TextField
              label="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              margin="normal"
            />
            <TextField
              label="Pincode"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              margin="normal"
            />

            {/* Booking for Someone Else Checkbox */}
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.bookingForSomeoneElse}
                  onChange={handleCheckboxChange}
                  name="bookingForSomeoneElse"
                />
              }
              label="Booking for Someone Else"
            />

            {/* Conditional Rendering of Receiver's Details Form */}
            {formData.bookingForSomeoneElse && (
              <>
                <Typography variant="h6" gutterBottom style={{ marginTop: 20 }}>
                  Receiver's Details
                </Typography>
                <TextField
                  label="Full Name"
                  name="receiverFullName"
                  value={formData.receiverFullName}
                  onChange={handleChange}
                  fullWidth
                  variant="outlined"
                  margin="normal"
                />
                <TextField
                  label="Email Address"
                  name="receiverEmail"
                  value={formData.receiverEmail}
                  onChange={handleChange}
                  fullWidth
                  variant="outlined"
                  margin="normal"
                />
                <TextField
                  label="Phone Number"
                  name="receiverPhone"
                  value={formData.receiverPhone}
                  onChange={handleChange}
                  fullWidth
                  variant="outlined"
                  margin="normal"
                />
                <TextField
                  label="Pincode"
                  name="receiverPincode"
                  value={formData.receiverPincode}
                  onChange={handleChange}
                  fullWidth
                  variant="outlined"
                  margin="normal"
                />
              </>
            )}

            {/* T&Cs and Privacy Policy Agreement */}
         

            <div style={{ marginTop: 20 , display:'flex', flexDirection:'column'}}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.agreeTnC}
                  onChange={handleCheckboxChange}
                  name="agreeTnC"
                />
              }
              label={
                <Typography variant="body2">
                  By proceeding further, you agree to all our <strong>T&Cs</strong> and{" "}
                  <strong>Privacy Policy</strong>.
                </Typography>
              }
            />
          
              <Button
                variant="contained"
                color="primary"
                disabled={!formData.agreeTnC} // Disable the button unless T&Cs are agreed to
              >
                Proceed to Pay
              </Button>
            </div>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Billing;