import React, { useState, useEffect, useRef } from "react";
import HomeSection from "../components/HomeSection";
import { Box } from "@mui/material";
import Facilities from "../components/Facilities";
import Header from "../components/Header";
import gsap from "gsap";
import { useParams } from "react-router-dom";
import CardComponent from "../components/HomeCard";
import Background3D from "../components/Background3d";

function HomePage() {
  const [scrollIndex, setScrollIndex] = useState(0);
  const headerRef = useRef(null);
  const lastScrollY = useRef(0);
  const sectionRefs = useRef([]); // Array to hold references for each section
  const { id } = useParams(); // Get the 'id' from URL params

  const videoData = [
    { title: "Miracle Flower Garden", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", id: 'MiracleFlowerGarden' },
    { title: "Japanese Garden", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", id: 'JapaneseGarden' },
    { title: "Rock Garden", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", id: 'RockGarden' },
    // { title: "Cactus Garden", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", id: 'CactusGarden' },
    // { title: "Palm Garden", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", id: 'PalmGardens' },
    // { title: "Amphitheatre", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", id: 'Amphitheatre' },
    // { title: "Sculpture's", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", id: 'Sculpture' },
  ];

  // Find the index based on the 'id' parameter
  useEffect(() => {
    if (id) {
   
      window.scrollTo(0, 0);

      // If 'id' is present, scroll to the section corresponding to the 'id' in the URL
      if (id) {
        setTimeout(() => {
          const section = document.getElementById(id);
          if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
          }
        }, 600); // Adjust the delay to control the speed of the scrolling
      }
    }
  }, [id]); // This will run whenever the 'id' changes

  const handleScroll = (event) => {
    if (event.deltaY > 0) {
      setScrollIndex((prev) => Math.min(prev + 1, videoData.length - 1));
    } else {
      setScrollIndex((prev) => Math.max(prev - 1, 0));
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleHeaderAnimation = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        gsap.to(headerRef.current, { y: -100, duration: 0.6, ease: "power2.out" });
      } else if (currentScrollY < lastScrollY.current && currentScrollY < 50) {
        gsap.to(headerRef.current, { y: 0, duration: 0.6, ease: "power2.out" });
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleHeaderAnimation);
    return () => {
      window.removeEventListener("scroll", handleHeaderAnimation);
    };
  }, []);
console.log(sectionRefs,'sec')
  return (
    <Box >

      <div ref={headerRef} style={{ position: "fixed", top: 0, left: 0, width: "100%", zIndex: 10 }}>
        <Header pageId={""} />
      </div>
      
      <div style={{ marginTop: "80px" }}>
        {videoData.map((data, index) => (
          <>
         
          <HomeSection
            key={index}
            id={data.id}
            title={data.title}
            videoUrl={data.videoUrl}
            index={index}
            ref={(el) => sectionRefs.current[index] = el} // Assign ref dynamically
            scrollIndex={scrollIndex}
          />
          </>
        ))}
      </div>
      <CardComponent/>
      <Facilities />
    </Box>
  );
}

export default HomePage;
