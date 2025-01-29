import React, { useState, useEffect,useRef } from "react";
import { Box, Typography } from "@mui/material";
import Facility1 from "../assets/facility_1.jpg"

import Facility2 from "../assets/facility_2.png"
// Data for frames
const frames = [
  { imageUrl: Facility1, size: "250", position: [5, 5] },
  { imageUrl: Facility2, size: "250", position: [22, 65] },
  { imageUrl: Facility1, size: "250", position: [73, 25] },
  { imageUrl: "https://picsum.photos/200", size: "150", position: [33, 18] },
  { imageUrl: "https://picsum.photos/200", size: "150", position: [53, 13] },
];

// Frame component
const Frame = ({ imageUrl, size, position, scrollIndex, index }) => {
  // Calculate progress for zoom effect
  const progress = Math.max(0, Math.min((scrollIndex - index * 50) / 300, 1)); // Range [0, 1]
  const scale = 0.5 + progress * 0.5; // Start at 0.5x scale and grow to 1x
  const opacity = progress; // Gradual fade-in

  return (
    <Box
      sx={{
        position: "absolute",
        left: `${position[0]}%`,
        top: `${position[1]}%`,
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: "50%",
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transform: `scale(${scale})`, // Apply zoom effect
        opacity: opacity,
        transition: "transform 0.4s linear, opacity 0.4s linear",
      }}
    />
  );
};


// Title component with scroll-linked movement
const Title = ({ scrollIndex }) => {
  // Calculate position and rotation based on scrollIndex
  const titleProgress = Math.min(scrollIndex / 900, 1); // Adjust for title transition
  
  // Progress range for vertical transition
  const progress = Math.max(0, Math.min(scrollIndex / 900, 1)); // Range [0, 1]

  // Determine the direction of scroll
  const isScrollingUp = scrollIndex < 0;
  
  // Helper function for generating 3D transformations
  const getTransform = (baseTranslateY, baseRotateY, zOffset) => {
    const translateY = baseTranslateY * (1 - progress)
    const rotateY = (baseRotateY - progress * baseRotateY) > 90 ? 90 : baseRotateY - progress * baseRotateY ; // Rotation effect
    return `translate(-50%, ${translateY}px) rotateY(${rotateY}deg) translateZ(${zOffset}px)`;
  };

  return (
    <Box
      sx={{
        position: "absolute",
        bottom: `${40 - 15 * (1 - titleProgress)}%`,
        left: "50%",
        width: "100%",
      }}
    >
      {/* First Title Box */}
      <Box
        sx={{
          transform: getTransform(100, 100, 0), // Adjust zOffset for step effect
          transition: "transform 0.5s ease, opacity 0.5s ease", // Smooth transition for both transform and opacity
          position: "relative",
          opacity: isScrollingUp ? 0 : 1, // Hide when scrolling up
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: "#B78899",
            fontWeight: "bold",
            textAlign: "center",
            fontSize: "0.8rem",
            border: "1px solid black",
            borderRadius: "7px",
            width: '10%',
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            margin: "0 auto",
            padding: "8px",
          }}
        >
          Explore and Enjoy
        </Typography>
      </Box>

      {/* Second Title Box */}
      <Box
        sx={{
          transform: getTransform(100, 100, -20), // Slightly different angle and zOffset
          transition: "transform 0.5s ease, opacity 0.5s ease", // Smooth transition for both transform and opacity
          position: "relative",
          opacity: isScrollingUp ? 0 : 1, // Hide when scrolling up
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: "#B78899",
            fontWeight: "bold",
            textAlign: "center",
            fontSize: "2rem",
            paddingTop: "8px",
          }}
        >
          Experium Facilities
        </Typography>
      </Box>

      {/* Third Title Box */}
      <Box
        sx={{
          transform: getTransform(100, 100, -30), // Further tilt and depth
          transition: "transform 0.5s ease, opacity 0.5s ease", // Smooth transition for both transform and opacity
          position: "relative",
          opacity: isScrollingUp ? 0 : 1, // Hide when scrolling up
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: "#B78899",
            fontWeight: "bold",
            textAlign: "center",
            fontSize: "0.8rem",
            paddingTop: "5px",
          }}
        >
          Explore, enjoy, and create unforgettable experiences.
        </Typography>
      </Box>
    </Box>
  );
};



function Facilities({scrollY}) {
  const [scrollIndex, setScrollIndex] = useState(0); // Tracks the current scroll position
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const handleScroll = (event) => {
    const isScrollingDown = event.deltaY > 0;
    let newIndex = scrollIndex/3;
  
    if (isScrollingDown) {
      newIndex = Math.min(scrollIndex + 35, 800); // Adjust max value
    } else {
      newIndex = Math.max(scrollIndex - 10, 0); // Prevent going below 0
    }
  
    setScrollIndex(newIndex);
  };
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setScrollIndex(0);
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting) {
          setScrollIndex(0); // Reset scrollIndex when the section becomes visible
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  useEffect(() => {
    const handleWheel = (event) => {
      if (isVisible) handleScroll(event);
    };
    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [scrollIndex, isVisible]);


  return (
    
        <Box
        ref={sectionRef}
        sx={{
          backgroundColor: "white",
          height: "100vh",
          position: "relative",
          overflow: "hidden",
          top:'15vh'
        }}
       >
       {frames.map((frame, index) => (
       <Frame
       key={index}
       imageUrl={frame.imageUrl}
       size={frame.size}
       position={frame.position}
       scrollIndex={scrollIndex}
       index={index}
       />
       ))}
        <Title scrollIndex={scrollIndex} />
       </Box>
    
  )
}

export default Facilities;