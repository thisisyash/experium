import React, { useState, useEffect, useRef } from "react";
import HomeSection from "../components/HomeSection";
import { Box } from "@mui/material";
import Facilities from "../components/Facilities";
import Header from "../components/Header";

function HomePage() {
  const [scrollIndex, setScrollIndex] = useState(0);

  const videoData = [
    { title: "Explore the Universe", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { title: "Dive into the Ocean", videoUrl: "https://www.w3schools.com/html/movie.mp4" },
    { title: "Discover Ancient Ruins", videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4" },
    { title: "Journey Through the Jungle", videoUrl: "https://sample-videos.com/video123/mp4/480/asdasdas.mp4" },
    { title: "Cityscapes Around the World", videoUrl: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4" },
    { title: "Climbing the Highest Peaks", videoUrl: "https://file-examples.com/storage/fe72534b800b25da93c9278/2017/04/file_example_MP4_480_1_5MG.mp4" },
    { title: "Flight Through the Clouds", videoUrl: "https://filesamples.com/samples/video/mp4/sample_640x360.mp4" },
  ];

  const sectionRefs = useRef([]); // Initialize an array to hold refs

  const handleScroll = (event) => {
    if (event.deltaY > 0) {
      setScrollIndex((prev) => Math.min(prev + 1, videoData.length - 1));
    } else {
      setScrollIndex((prev) => Math.max(prev - 1, 0));
    }
  };

  useEffect(() => {
    const currentSection = sectionRefs.current[scrollIndex];
    if (currentSection) {
      currentSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [scrollIndex]);

  useEffect(() => {
    window.addEventListener("wheel", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <Box sx={{background:'#f5f2f5'}} >
         <Header pageId={""}/>
      {videoData.map((data, index) => (
        <HomeSection
          key={index}
          title={data.title}
          videoUrl={data.videoUrl}
          ref={(el) => (sectionRefs.current[index] = el)} // Assign refs dynamically
          index={index}
          scrollIndex={scrollIndex}
        />
      ))}
      <Facilities/>
    </Box>
  );
}

export default HomePage;
