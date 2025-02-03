import React, { useState } from 'react';
import GroupBookingImg from '../assets/groupbooking.png';
import Header from '../components/Header';
import { Button, TextField, Typography, Box, FormControl, InputLabel, Select, MenuItem, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const GroupBooking = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    requirements: '',
    eventManager: false,
    food: false,
    tourGuide: false,
    room: false,
    category: '',
  });

  const [peopleCount, setPeopleCount] = useState(1);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <Box sx={{ backgroundColor: '#f5effe', fontFamily: 'Italiana' }}>
      {/* Header */}
      <Box sx={{ position: 'relative', zIndex: 10 }}>
        <Header pageId={""} />
      </Box>

      

      {/* Responsive Layout - Image & Form */}
      <Grid 
        container 
        spacing={4} 
        justifyContent="center"
        sx={{ 
          padding: { xs: 2, sm: 4 }, 
          display: 'flex', 
          alignItems: 'center',
          marginTop:'10vh'
        }}
      >
        {/* Left Section - Image */}
        <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
        <Typography 
    
        align="center" 
        sx={{ 
          color: '#D015B0', 
          fontWeight: 'bold', 
          mt: { xs: 4, sm: 6 }, 
          letterSpacing: '1.15px',
          textTransform: 'uppercase',
          fontSize:'25px'
          
        }}>
        Group Booking for Garden
      </Typography>
          <img 
            src={GroupBookingImg} 
            alt="Garden" 
            style={{ width: '100%', maxWidth: '500px',height:'65vh', borderRadius: '10px' }} 
          />
        </Grid>

        {/* Right Section - Form */}
        <Grid item xs={12} md={6}>
          <Box sx={{ backgroundColor: '#fff', p: 3, borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
            <Typography variant="h5" sx={{ color: '#d945b4', mb: 2, textAlign: 'center', fontWeight: 'bold' }}>
              Booking Form
            </Typography>

            <FormControl fullWidth size='small' sx={{ mb: 3 }}>
              <InputLabel>Select Package Category</InputLabel>
              <Select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
              >
                <MenuItem value="">Select Package</MenuItem>
                <MenuItem value="corporate">Corporate Package</MenuItem>
                <MenuItem value="school">School Package</MenuItem>
                <MenuItem value="community">Community Package</MenuItem>
                <MenuItem value="venue">Venue Package</MenuItem>
              </Select>
            </FormControl>

            {/* Number of People Input */}
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 3 }}>
              <Typography sx={{ mr: 2, fontWeight: 'bold' }}>Number of People:</Typography>
              <Button 
                sx={{ minWidth: '40px', backgroundColor: '#d945b4', color: 'white', fontSize: '20px' }}
                onClick={() => setPeopleCount((prev) => Math.max(prev - 1, 1))}
              >
                −
              </Button>
              <TextField 
                type="text" 
                value={peopleCount < 10 ? "0" + peopleCount : peopleCount} 
                readOnly 
                size='small' 
                sx={{ width: '60px', textAlign: 'center', mx: 1 }}
              />
              <Button 
                sx={{ minWidth: '40px', backgroundColor: '#d945b4', color: 'white', fontSize: '20px' }}
                onClick={() => setPeopleCount((prev) => prev + 1)}
              >
                +
              </Button>
            </Box>

            {/* Add-ons */}
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>Choose Your Add-ons</Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 3 }}>
              {['eventManager', 'food', 'tourGuide', 'room'].map((addon) => (
                <label key={addon} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                  <input 
                    type="checkbox" 
                    name={addon} 
                    checked={formData[addon]} 
                    onChange={handleInputChange} 
                  />
                  <Typography variant="body2" sx={{ fontWeight: 'bold' }}>{addon.replace(/([A-Z])/g, ' $1')}</Typography>
                </label>
              ))}
            </Box>

            {/* Form Fields */}
            <form onSubmit={(e) => { e.preventDefault(); alert('Booking submitted successfully!'); }}>
              <TextField
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                fullWidth
                size='small'
                sx={{ mb: 2 }}
              />

              <TextField
                label="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                fullWidth
                size='small'
                sx={{ mb: 2 }}
              />

              <TextField
                label="Email Address"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                fullWidth
                size='small'
                sx={{ mb: 2 }}
              />

              <TextField
                label="Requirements"
                name="requirements"
                value={formData.requirements}
                onChange={handleInputChange}
                multiline
                rows={2}
                required
                fullWidth
                size='small'
                sx={{ mb: 2 }}
              />

              <Button
                type="submit"
                variant="contained"
                sx={{ backgroundColor: '#d945b4', color: 'white', width: '40%', py: 1.5, fontSize: '16px' ,left:'30%',borderRadius:'15px'}}
                onClick={() => { navigate('/payment'); }}
              >
                Book Now
              </Button>
            </form>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default GroupBooking;
