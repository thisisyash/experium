import React, { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Paper,
  Box,
  Tabs,
  Tab,
  Grid,
  Fade
} from "@mui/material";
import Header from "../components/Header";
import Banner from "../assets/palm2.png";
import Logo from "../assets/experium-logo.png"
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";

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
      {/* Apply Fade effect only when the TabPanel is visible */}
      {value === index && (
        <Fade in={value === index} timeout={500}>
          <Box sx={{ paddingTop: 2 }}>
            {children}
          </Box>
        </Fade>
      )}
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
  };

  return (
    <>
      <Box sx={{ position: 'relative', zIndex: 10 }}>
        <Header pageId={""} />
      </Box>
      
      {/* Banner Image */}
      <Box sx={{ width: '100%', height: { xs: '30vh', md: '40vh' }, overflow: 'hidden', marginTop: '15vh' }}>
        <img src={Banner} alt="Banner" style={{ width: '98%', height: '100%', objectFit: 'cover',margin:'10px' }} />
      </Box>
      
      {/* Form Section */}
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '5vh 0', color: 'black', background: '#f5effe' }}>
        <Paper elevation={3} sx={{ width: { xs: '80%', sm: '70%', md: '50%' }, padding: 4, textAlign: 'center', borderRadius: '12px' }}>
          <Typography fontSize={{xs:'1.2rem',sm:'1.2rem', md:'1.5rem'}} fontWeight="bold" sx={{ marginBottom: "20px", fontFamily: "Righteous",color: "#C0029D" }}>
            Get in Touch
          </Typography>
          <Typography fontSize={{xs:'0.7rem',sm:'0.7rem', md:'1rem'}} fontWeight="400" sx={{ marginBottom: "20px", fontFamily: "Righteous",color: "#C0029D" }}>
            Fill out the form below and our team will get in touch with you in the next 24 hours
          </Typography>
          <Tabs 
            value={value} 
            onChange={handleTabChange} 
            aria-label="contact tabs" 
            centered 
            variant="fullWidth"
            sx={{
              '& .MuiTabs-indicator': { backgroundColor: 'transparent' },
              '& .MuiTab-root': { 
                color: '#c0029d', 
                backgroundColor: 'white',
                borderRadius: '15px',
                // margin: '0 5px',
                fontFamily: "Righteous",
                transitioTimingFucntion : 'cubic-bezier(0.64, 0.57, 0.67, 1.53)',
                transitionDuration:'2.9s' ,
                // border: '2px solid #c0029d',
                minWidth: 'auto',
                transition: 'background-color 0.3s ease, color 0.3s ease', // Added transition for smooth effect
              },
              '& .Mui-selected': { 
                backgroundColor: '#c0029d !important', 
                color: 'white !important', 
                borderRadius: '20px' 
              }
            }}
          >
            <Tab label="General Enquiry" />
            <Tab label="Group Bookings Enquiry" />
          </Tabs>
          
          <TabPanel value={value} index={0}>
            {['name', 'email', 'phone', 'message'].map((field, index) => (
              <TextField
                key={index}
                label={field.replace(/([A-Z])/g, ' $1').trim()}
                name={field}
                value={formData[field]}
                onChange={handleInputChange}
                fullWidth
                variant="outlined"
                margin="normal"
                multiline={field === 'message'}
                rows={field === 'message' ? 4 : 1}
                sx={{  textTransform:'capitalize', width: { xs: '80%', sm: '60%', md: '50%' }, display: 'block', margin: '20px auto', transition: 'all 0.3s ease' }} // Added transition here too
              />
            ))}
            <Button variant="contained" sx={{ mt: 2, backgroundColor: '#c0029d', color: 'white', transition: 'all 0.3s ease' }} onClick={handleSubmit}>
              Submit
            </Button>
          </TabPanel>

          <TabPanel value={value} index={1}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              {["companyName", "companyAddress", "pinCode", "email", "name", "phone", "numberOfGuests"].map((field, index) => (
                <TextField
                  key={index}
                  label={field.replace(/([A-Z])/g, " $1").trim()}
                  name={field}
                  value={formData[field]}
                  onChange={handleInputChange}
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  sx={{ width: { xs: "80%", sm: "60%", md: "50%" }, display: "block", margin: "20px auto", transition: 'all 0.3s ease' , textTransform:'capitalize'}} // Added transition here too
                />
              ))}

              {/* Preferred Date Picker */}
              <DatePicker
                label="Preferred Date"
                value={formData.preferredDate ? dayjs(formData.preferredDate) : null}
                onChange={(newValue) =>
                  setFormData({ ...formData, preferredDate: newValue ? newValue.format("YYYY-MM-DD") : "" })
                }
                disablePast
                slotProps={{ textField: { fullWidth: true, variant: "outlined", margin: "normal" } }}
                sx={{ width: { xs: "80%", sm: "60%", md: "50%" }, display: "block", margin: "20px auto", transition: 'all 0.3s ease' }} // Added transition here too
              />
            </LocalizationProvider>

            <Button variant="contained" sx={{ mt: 2, backgroundColor: "#c0029d", color: "white", transition: 'all 0.3s ease' }} onClick={handleSubmit}>
              Submit
            </Button>
          </TabPanel>
        </Paper>
      </Box>
      <Box sx={{ backgroundColor: '#f5effe', textAlign: 'center', padding: '5vh 0', color: "#C0029D" }}>
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src={Logo} style={{ height: "14vh", width: "auto", maxWidth: '60%' }} alt="Experium Logo" />
            <Typography variant="h6" sx={{fontFamily:'Righteous',  marginTop: '2vh', fontSize: { xs: '1rem', md: '1.5rem' } }}>Contact Us</Typography>
            <Typography sx={{fontFamily:'Righteous',  fontSize: { xs: '0.9rem', md: '1.2rem' }, maxWidth: '80%' }}>Experium, Proddutur Village, Road, near Pragathi Resorts, Chilkoor, Hyderabad, Telangana 501503</Typography>
            <Typography sx={{fontFamily:'Righteous',  mt: 2, fontSize: { xs: '0.9rem', md: '1.2rem' } }}>Phone: +91 123 456 7890</Typography>
            <Typography sx={{fontFamily:'Righteous', fontSize: { xs: '0.9rem', md: '1.2rem' } }}>Email: info@experiumecopark.com</Typography>
          </Grid>
          <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
          <iframe
              width="90%"
              height="250"
              style={{ border: 0, borderRadius: '10px' }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.1661836119484!2d78.1881907!3d17.3796426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbe900490f07a1%3A0x4f3bda39e5cde997!2sExperium%20Eco%20Park!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default VisitUs;