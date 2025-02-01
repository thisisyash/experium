import React, { useState } from 'react';
import GroupBookingImg from '../assets/groupbooking.png'
import Header from '../components/Header';

// Inline styles inside the component
const styles = {
  app: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f9f9f9',
    color: '#333',
    margin: 0,
    padding: 0,
  },
  header: {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#4caf50',
    color: 'white',
    fontSize: '36px',
  },
  section: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '30px',
    marginTop: '20px',
  },
  firstSection: {
    width: '60%',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  secondSection: {
    width: '35%',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
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
  },
  formField: {
    marginBottom: '20px',
  },
  label: {
    fontSize: '18px',
    display: 'block',
    marginBottom: '5px',
    color: '#333',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ddd',
  },
  checkboxGroup: {
    marginBottom: '20px',
    display:'flex',
    flexDirection:'column'
  },
  checkboxLabel: {
    fontSize: '18px',
    marginRight: '15px',
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
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '300px',
    margin: 'auto',
  },
  button: {
    backgroundColor: '#d945b4',
    color: 'white',
    fontSize: '20px',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '50px',
    height: '50px',
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


  return (
    <div style={styles.app}>

<div  style={{ position: "fixed", top: 0, left: 0, width: "100%", zIndex: 10 }}>
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

          <div>
            <label style={styles.label}>Select Package Category</label>
            <select
              style={styles.dropdown}
              name="category"
              value={formData.category}
              onChange={handleInputChange}
            >
              <option value="">Select Package</option>
              <option value="corporate">Corporate Package</option>
              <option value="school">School Package</option>
              <option value="community">Community Package</option>
              <option value="community">Venue Package</option>
              
            </select>
          </div>



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
          <input type="text" value={peopleCount} readOnly style={styles.input} />
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
            <div style={styles.formField}>
              <label style={styles.label}>Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                style={styles.input}
              />
            </div>

            <div style={styles.formField}>
              <label style={styles.label}>Phone Number</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                style={styles.input}
              />
            </div>

            <div style={styles.formField}>
              <label style={styles.label}>Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                style={styles.input}
              />
            </div>



            <div style={styles.formField}>
              <label style={styles.label}>Requirements</label>
              <textarea
                name="requirements"
                value={formData.requirements}
                onChange={handleInputChange}
                rows="4"
                style={styles.input}
              />
            </div>


            <button type="submit" style={styles.submitButton}>
              Submit Booking
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GroupBooking;
