import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import { Box, Fade, Grow, Slide } from "@mui/material";
import Header from "../components/Header";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Title = ({ scrollY, title }) => {
  const mesh = useRef();
  const light = useRef();
  // Calculate opacity and position based on scroll
  const opacity = Math.max(1 - scrollY * 2 / 1000, 0);
  const positionY = Math.max(3 + scrollY / 200, 0);

  useFrame(() => {
    if (mesh.current) {
      const tiltFactor = Math.sin(scrollY * 0.0005) / 100;
      const sideTiltFactor = Math.sin(scrollY * 0.005) / 15;
      const zTiltFactor = Math.sin(scrollY * 0.005) / 100;

      mesh.current.rotation.x = -tiltFactor;
      mesh.current.rotation.y = sideTiltFactor;
      mesh.current.rotation.z = -zTiltFactor;

      const scaleFactor = 1 + Math.sin(scrollY * 0.01) * 0.001;
      mesh.current.scale.set(scaleFactor, scaleFactor, 1);
    }
   
  });

  return (
   
    <Text
    ref={mesh}
    fontSize={2} // Adjust font size
    color="#C0029D" // Text color
    position={[0, -2, 0]} // Position of the text
    anchorY="middle"
    anchorX="center"
    fontWeight={900} // Bold font weight
    material-toneMapped={false} // Ensures colors are not affected by tone mapping
    textAlign="center"
  >
    {title}
  </Text>
  );
};

const HomeSection = ({ title, videoUrl, index }) => {
  const [scrollY, setScrollY] = useState(0);
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const light = useRef();
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY /1.5);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  if (light.current) {
    light.current.target.position.set(0, -5, 0); // Align the spotlight with the title
  }
  useEffect(() => {
    if (containerRef.current && videoRef.current) {
      // Create GSAP timeline
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current, // Element to observe
          start: "bottom bottom", // Trigger animation when element enters viewport
          end: "center center", // End trigger point
          toggleActions: "play none none reverse" // Play on enter, reverse on leave
        },
      });
  
      // Video Animation (Appear and Disappear)
      timeline
        .fromTo(
          videoRef.current,
          {
            opacity: index==0?1:0,
            duration:1,
            scale: index==0?1:0.5, // Start slightly smaller for zoom-in effect
            y: index==0? 0:250, // Position below viewport
          },
          {
            opacity: 1,
            scale: 1, // Reset scale to normal
            y: 0, // Slide into position
            duration:1, // Duration of the animation
            ease: "power1.out", // Smooth easing for appearing
          }
        )
       
    }
  }, []);
  
  return (
    <>
     
      <Box sx={{padding:'5px',textShadow: '2px 2pxrgb(115, 23, 63)'}}>
     
      <Canvas
      camera={{ position: [0, 0, 5] }}
      shadows // Enable shadows in the canvas
      style={{ height: "30vh", top: "25px", width: "100%", display: "flex" }}
    >
      {/* Ambient light for general illumination */}
      <ambientLight intensity={0.3} />

      {/* Spotlight */}
      <spotLight
        position={[1, -2, 10]} // Position the light above and in front
        intensity={1.5} // Brightness of the spotlight
        angle={Math.PI / 6} // Cone angle of the spotlight
        penumbra={2} // Soft edge of the spotlight
        castShadow // Enable shadow casting for the spotlight
        shadow-mapSize-width={1024} // Increase shadow map resolution
        shadow-mapSize-height={1024}
      />

      {/* Title with shadows */}
      <Title scrollY={scrollY} title={title} />

      {/* Ground plane to catch shadows */}
      <mesh
        position={[0, -3, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        receiveShadow // Enable receiving shadows
      >
        <planeGeometry args={[10, 10]} />
        <shadowMaterial opacity={0.3} />
      </mesh>
    </Canvas>
      <Box
        ref={containerRef}
        sx={{   
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          height: "70vh",
          width: "100%",
          top: "30px",
          
        }}
      >
        {/* 3D Canvas Section */}
   


        {/* Video Section */}
        {index==0 && 
        
        ( 
     
        <Grow in={true} direction ="up" timeout={2000} onLoad={true}>
       
            <video
            style={{
                overflow: "hidden",
                width: "70vw",
                height: "60vh",
              objectFit: "cover",
              borderRadius: "12px",
              marginBottom: "30px",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Bottom shadow
            }}
            controls
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
      
            </Grow>)
           
            }
       {index!=0 && <Box
          ref={videoRef}
          sx={{
            backgroundColor: "black",
            overflow: "hidden",
            width: "70vw",
            height: "60vh",
            marginBottom: "30px",
            transformOrigin: "bottom center",
          }}
        >
           

          <video
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "12px",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Bottom shadow
            }}
            controls
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Box>}
      </Box>
      </Box>
    </>
  );
};

export default HomeSection;
