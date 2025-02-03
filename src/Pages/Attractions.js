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
      <div style={{ position: "fixed", top: 0, left: 0, width: "100%", zIndex: 10 }}>
        <Header pageId={""} />
      </div>
      <div style={styles.app}>
        <section style={styles.banner}>
          <img src={Ecopark} alt="Banner" style={styles.bannerImage} />
        </section>

        <section className="grid-section">
          <div className="grid-left">
            <img src={Experium} alt="Grid Left" className="grid-image" />
          </div>
          
          <div className="garden-container">
            <section className="garden-introduction">
              <h2>Welcome to the Beautiful Garden</h2>
              <p>A garden is a place of serenity and peace. It is a space where plants, flowers, and trees grow to create a beautiful environment.</p>
            </section>

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

      <style>
        {`
          @media (max-width: 768px) {
            .grid-section {
              display: flex;
              flex-direction: column;
              align-items: center;
              padding: 20px;
            }
            .grid-left {
              width: 100%;
              display: flex;
              justify-content: center;
              margin-bottom: 20px;
            }
            .grid-image {
              width: 90%;
              max-width: 300px;
            }
            .garden-container {
              padding: 10px;
              text-align: center;
            }
            .banner {
              height: 30vh;
            }
            .bannerImage {
              height: 100%;
              object-fit: cover;
            }
          }
          .garden-introduction{
          
          }
          @media (min-width: 769px) {
            .grid-section {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 20px;
              padding: 40px;
              align-items: center;
              background-color: #f9f9f9;
            }
          }
        `}
      </style>
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
};

export default Attractions;
