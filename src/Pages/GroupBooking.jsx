import React, { useState } from 'react';
import GroupBookingImg from '../assets/groupbooking.png'
import Header from '../components/Header';
import { Button, TextField,Typography, Box ,FormControl, InputLabel, Select, MenuItem} from '@mui/material';
import { useNavigate } from 'react-router-dom';
// Inline styles inside the component
const styles = {
  app: {
    fontFamily: 'Italiana',
    backgroundColor: '#f5effe',
    color: '#333',
    margin: 0,
    padding: 0,
    // marginTop: 30,
  },
  header: {
    textAlign: 'center',
    paddingTop: '80px',
    backgroundColor: '#f5effe',
    color: '#D015B0',
    fontSize: '2rem',
    letterSpacing: '1.15px',
    fontFamily: "Italiana",
    fontWeight: "800",
    marginTop: 20,
    // marginBottom: 10,

  },
  section: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px',
    // marginTop: 20,
    // marginTop: '20px',
  },
  firstSection: {
    width: '60%',
    backgroundColor: '#f5effe',
    // padding: '20px',
    borderRadius: '10px',
    // boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  secondSection: {
    width: '35%',
    // backgroundColor: '#fff',
    // padding: '30px',
    borderRadius: '10px',
    // boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    marginRight:'2%',
    // marginBottom:'150px',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
    marginBottom: '20px',
  },
  title: {
    fontSize: '30px',
    color: '#d945b4',
    marginBottom: '20px',
     letterSpacing:'1.15px'
  },
  formField: {
    marginBottom: '50px',
     letterSpacing:'1.15px',
    //  marginTop:'20px'
  },
  label: {
    fontSize: '18px',
    display: 'block',
    marginBottom: '5px',
    color: '#333',
    letterSpacing:'1.15px',
    marginBottom:'20px'
  },
  input: {
    width: '50px',
    // height: "30px",
    // padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ddd',
     letterSpacing:'1.15px'
  },
  checkboxGroup: {
    marginBottom: '20px',
    display:'flex',
    flexDirection:'row'

  },
  checkboxLabel: {
    fontSize: '18px',
    marginRight: '15px',
    fontWeight: "700",
    letterSpacing: "1px",
  },
  submitButton: {
    padding: '15px 20px',
    backgroundColor: '#d945b4',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '18px',
    cursor: 'pointer',
    width: '100%',
  },
  dropdown: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    marginBottom: '30px',
  },
  








  formField: {
    marginBottom: '30px',
    marginTop: "10px",
    letterSpacing:'1.15px'
  },
  label: {
    fontSize: '18px',
    display: 'block',
    marginBottom: '10px',
    color: '#333',
    fontWeight: 'bold',
  },
  inputContainer: {
    display: 'flex',
    alignItems: 'left',
    justifyContent: 'start',
    maxWidth: '100%',
    margin: 'auto',
  },
  button: {
    backgroundColor: '#d945b4',
    color: 'white',
    fontSize: '20px',
    // padding: '10px 15px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '40px',
    height: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 5px',
    transition: 'background-color 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#d945b4',
  }
};

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

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        [name]: checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Booking submitted successfully!');
  };

  const [peopleCount, setPeopleCount] = useState(1); // Default to 1 person

  const increaseCount = () => setPeopleCount(peopleCount + 1); // Increment count
  const decreaseCount = () => setPeopleCount(peopleCount > 1 ? peopleCount - 1 : 1); // Decrement count, not below 1
const navigate=useNavigate()

  return (
    <div style={styles.app}>

<div  style={{ position: "relative", top: 0, left: 0, width: "100%", zIndex: 10 }}>
        <Header pageId={""} />
      </div>
      <div style={styles.header}>Group Booking for Garden</div>

      {/* First Section: Addons & Dropdown */}
      <div style={styles.section}>
        <div style={styles.firstSection}>
          <img
            src={GroupBookingImg}
            alt="Garden"
            style={styles.image}
          />

        </div>

        {/* Second Section: Form */}
        <div style={styles.secondSection}>
          <h2 style={styles.title}>Booking Form</h2>

          <FormControl fullWidth size='small'>
        <InputLabel>Select Package Category</InputLabel>
        <Select
          name="category"
          value={formData.category}
          onChange={handleInputChange}
          label="Select Package Category"
        >
          <MenuItem value="">Select Package</MenuItem>
          <MenuItem value="corporate">Corporate Package</MenuItem>
          <MenuItem value="school">School Package</MenuItem>
          <MenuItem value="community">Community Package</MenuItem>
          <MenuItem value="venue">Venue Package</MenuItem>
        </Select>
      </FormControl>



          <div style={styles.formField}>
        <label style={styles.label}>Number of People</label>
        <div style={styles.inputContainer}>
          <button
            style={styles.button}
            onClick={decreaseCount}
            onMouseEnter={(e) => e.target.style.backgroundColor = styles.buttonHover.backgroundColor}
            onMouseLeave={(e) => e.target.style.backgroundColor = styles.button.backgroundColor}
          >
            −
          </button>
          <TextField  type="text" value={peopleCount<10 ? "0"+peopleCount:peopleCount} readOnly style={styles.input} size='small' />
          <button
            style={styles.button}
            onClick={increaseCount}
            onMouseEnter={(e) => e.target.style.backgroundColor = styles.buttonHover.backgroundColor}
            onMouseLeave={(e) => e.target.style.backgroundColor = styles.button.backgroundColor}
          >
            +
          </button>
        </div>
      </div>
          
          
          <h3>Choose Your Add-ons</h3>
          <div style={styles.checkboxGroup}>
            <label style={styles.checkboxLabel}>
              <input
                type="checkbox"
                name="eventManager"
                checked={formData.eventManager}
                onChange={handleInputChange}
              />
              Event Manager
            </label>
            <label style={styles.checkboxLabel}>
              <input
                type="checkbox"
                name="food"
                checked={formData.food}
                onChange={handleInputChange}
              />
              Food
            </label>
            <label style={styles.checkboxLabel}>
              <input
                type="checkbox"
                name="tourGuide"
                checked={formData.tourGuide}
                onChange={handleInputChange}
              />
              Tour Guide
            </label>
            <label style={styles.checkboxLabel}>
              <input
                type="checkbox"
                name="room"
                checked={formData.room}
                onChange={handleInputChange}
              />
              Room
            </label>
          </div>

 

          <form onSubmit={handleSubmit}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, marginBottom: '20px', fontFamily:'Italiana' }}>
        <Typography variant="body2" sx={{ marginBottom: '-10px' }}>Full Name</Typography>
        <TextField
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
          fullWidth
           size='small'
           sx={{fontFamily:'Italiana'}}
        />

        <Typography variant="body2" sx={{ marginBottom: '-10px', }}>Phone Number</Typography>
        <TextField
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          required
           size='small'
        />

        <Typography variant="body2" sx={{ marginBottom: '-10px' }}>Email Address</Typography>
        <TextField
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
          fullWidth
          size='small'
        />

        <Typography variant="body2" sx={{ marginBottom: '-10px' }}>Requirements</Typography>
        <TextField
          name="requirements"
          value={formData.requirements}
          onChange={handleInputChange}
          rows={2}
          multiline
          required
          
           size='small'
        />

        <Button
          type="submit"
          variant="contained"
          sx={{ backgroundColor: '#d945b4', color: 'white', marginTop: '20px' }}
          onClick={()=>{navigate('/payment')}}
        >
          Book Now
        </Button>
      </Box>
    </form>
        </div>
      </div>
    </div>
  );
};

export default GroupBooking;