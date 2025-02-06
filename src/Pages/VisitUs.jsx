import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  Box,
  Tabs,
  Tab,
  CardMedia
} from "@mui/material";

// TabPanel component to handle tab content
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

const VisitUs = () => {
  const [value, setValue] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    companyName: "",
    companyAddress: "",
    pinCode: "",
    preferredDate: "",
    numberOfGuests: "",
  });

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    console.log("Form Data Submitted", formData);
    // Implement form submission logic here
  };

  return (
    <>
    <Grid container spacing={4} justifyContent="center" style={{ padding: 20 }}>
      {/* Left Section: Contact Information */}
    

      {/* Right Section: Inquiry Form */}
      <Grid item xs={12} md={5}>
        <Paper style={{ padding: 20 }}>
        <Card>
          {/* Banner Image */}
          <CardMedia
            component="img"
            alt="Banner Image"
            height="200"
            image="https://via.placeholder.com/800x300"
            title="Banner"
          />
          </Card>

          <Typography variant="h5" gutterBottom>
            Get in Touch
          </Typography>

          <Tabs value={value} onChange={handleTabChange} aria-label="contact tabs">
            <Tab label="General Enquiry" />
            <Tab label="Group Bookings Enquiry" />
          </Tabs>

          <TabPanel value={value} index={1}>
            <Typography variant="h6">Group Bookings Enquiry</Typography>
            <TextField
              label="Company Name"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              fullWidth
              variant="outlined"
              margin="normal"
            />
            <TextField
              label="Company Address"
              name="companyAddress"
              value={formData.companyAddress}
              onChange={handleInputChange}
              fullWidth
              variant="outlined"
              margin="normal"
            />
            <TextField
              label="PIN Code"
              name="pinCode"
              value={formData.pinCode}
              onChange={handleInputChange}
              fullWidth
              variant="outlined"
              margin="normal"
            />
            <TextField
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              fullWidth
              variant="outlined"
              margin="normal"
            />
            <TextField
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              fullWidth
              variant="outlined"
              margin="normal"
            />
            <TextField
              label="Mobile Number"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              fullWidth
              variant="outlined"
              margin="normal"
            />
            <TextField
              label="Preferred Date of Visit"
              name="preferredDate"
              type="date"
              value={formData.preferredDate}
              onChange={handleInputChange}
              fullWidth
              variant="outlined"
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              label="Number of Guests"
              name="numberOfGuests"
              value={formData.numberOfGuests}
              onChange={handleInputChange}
              fullWidth
              variant="outlined"
              margin="normal"
            />
            <Typography variant="body2" color="textSecondary">
              To book tickets for less than 20 guests, please visit bookings.wonderla.com.
              Hurry! Book 3 days in advance to get 10% off.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleSubmit}
              style={{ marginTop: 20 }}
            >
              Submit
            </Button>
          </TabPanel>

          <TabPanel value={value} index={0}>
            <Typography variant="h6">General Enquiry</Typography>
            <TextField
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              fullWidth
              variant="outlined"
              margin="normal"
            />
            <TextField
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              fullWidth
              variant="outlined"
              margin="normal"
            />
            <TextField
              label="Mobile Number"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              fullWidth
              variant="outlined"
              margin="normal"
            />
            <TextField
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              fullWidth
              variant="outlined"
              margin="normal"
              multiline
              rows={4}
            />
            <div>
              <label>
                <input
                  type="checkbox"
                  name="agree"
                  value={formData.agree}
                  onChange={handleInputChange}
                />
                I agree to receive messages from Wonderla and its representatives
                through WhatsApp, RCS, Email, and other communication channels.
              </label>
            </div>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleSubmit}
              style={{ marginTop: 20 }}
            >
              Submit
            </Button>
          </TabPanel>
        </Paper>
      </Grid>
      
    </Grid>
  
    <Grid item xs={12} md={5}>
        <Paper style={{ padding: 20 }}>
          <Typography variant="h4" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body1" paragraph>
            For any inquiries, feel free to get in touch with us using the
            form or the contact details below.
          </Typography>

          <Typography variant="h6" gutterBottom>
            Address:
          </Typography>
          <Typography variant="body1">
            Wonderla Holidays Ltd, 28th Mile, Mysore Road, Bangalore, Karnataka.
          </Typography>

          <Typography variant="h6" gutterBottom style={{ marginTop: 20 }}>
            Phone:
          </Typography>
          <Typography variant="body1">+91 123 456 7890</Typography>

          <Typography variant="h6" gutterBottom style={{ marginTop: 20 }}>
            Email:
          </Typography>
          <Typography variant="body1">info@wonderla.com</Typography>

          {/* Google Map */}
          <div style={{ marginTop: 20 }}>
            <iframe
              width="100%"
              height="300"
              src="https://www.google.com/maps/embed/v1/place?q=Wonderla%20Park&key=YOUR_GOOGLE_MAPS_API_KEY"
              style={{ border: 0 }}
              allowFullScreen
            ></iframe>
          </div>
        </Paper>
      </Grid>
    </>
  );
};

export default VisitUs;