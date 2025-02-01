import React, { useState } from "react";
import Experium from '../assets/experium.png'
import { Box } from "@mui/material";
import Header from "../components/Header";
import Ecopark from '../assets/ecopark.png'

const Attractions = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
    // Add your form submission logic here
  };

  return (
    <Box>

<div  style={{ position: "fixed", top: 0, left: 0, width: "100%", zIndex: 10 }}>
        <Header pageId={""} />
      </div>
      <div style={styles.app}>
      {/* Banner Section */}
      <section style={styles.banner}>
        <img
          src={Ecopark}
          alt="Banner"
          style={styles.bannerImage}
        />
      </section>

      {/* Grid Layout Section */}
      <section style={styles.gridSection}>
        <div style={styles.gridLeft}>
          <img
            src={Experium}
            alt="Grid Left"
            style={styles.gridImage}
          />
        </div>
        {/* <div style={styles.gridRight}>
          <form onSubmit={handleSubmit} style={styles.form}>
            <label style={styles.label}>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                style={styles.input}
              />
            </label>
            <label style={styles.label}>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                style={styles.input}
              />
            </label>
            <label style={styles.label}>
              Mobile Number:
              <input
                type="text"
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
                required
                style={styles.input}
              />
            </label>
            <button type="submit" style={styles.submitBtn}>
              Submit
            </button>
          </form>
        </div> */}

<div className="garden-container">
      {/* Introduction Section */}
      <section className="garden-introduction">
        <h1>Welcome to the Beautiful Garden</h1>
        <p>
          A garden is a place of serenity and peace. It is a space where plants, flowers, and trees grow to create a
          beautiful environment. Learn more about how you can create your own garden sanctuary.
        </p>
      </section>

      {/* Planting Tips Section */}
      <section className="planting-tips">
        <h2>Planting Tips</h2>
        <ul>
          <li>Choose plants that are suitable for your climate.</li>
          <li>Plant in well-draining soil to avoid root rot.</li>
          <li>Water your plants regularly, but don't overwater.</li>
          <li>Use organic fertilizers for healthy growth.</li>
          <li>Ensure proper sunlight for each plant variety.</li>
        </ul>
      </section>

      {/* Garden Features Section */}
      <section className="garden-features">
        <h2>Garden Features</h2>
        <div className="feature-item">
          <h3>Flower Beds</h3>
          <p>
            Flower beds bring color and life to any garden. They can be arranged in different shapes and sizes to
            create an eye-catching visual.
          </p>
        </div>
        <div className="feature-item">
          <h3>Water Features</h3>
          <p>
            Water features such as fountains, ponds, or waterfalls create a soothing sound and enhance the garden's
            tranquility.
          </p>
        </div>
        <div className="feature-item">
          <h3>Vegetable Garden</h3>
          <p>
            Growing your own vegetables can be incredibly rewarding. It's a great way to add fresh produce to your
            meals.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="garden-gallery">
        <h2>Garden Gallery</h2>
        <div className="gallery-images">
          {/* <img src={Experium} alt="Garden Image 1" /> */}

        </div>
      </section>
    </div>
      </section>
    </div>

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

export default Attractions;
