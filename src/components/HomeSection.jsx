import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import { Box, Button, Fade, Grow, Slide } from "@mui/material";
import Header from "../components/Header";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import VideoPage from "./VideoPlayer";
import { ConstructionOutlined } from "@mui/icons-material";
import BubbleScene from "./Bubble";
// import Background3D from "./Background3d";

gsap.registerPlugin(ScrollTrigger);

const Title = ({ scrollY, title }) => {
    const mesh = useRef();
  
    useFrame(() => {
      if (mesh.current) {
        const tiltFactor = Math.sin(scrollY * 0.0005) / 10;
        const sideTiltFactor = Math.sin(scrollY * 0.005) / 10;
        const zTiltFactor = Math.sin(scrollY * 0.005) / 100;
  
        mesh.current.rotation.x = -tiltFactor;
        mesh.current.rotation.y = sideTiltFactor;
        mesh.current.rotation.z = -zTiltFactor*10;
  
        const scaleFactor = 1 + Math.sin(scrollY * 0.01) * 0.001;
        mesh.current.scale.set(scaleFactor, scaleFactor, 1);
      }
    });
  
    return (
      <Text
        ref={mesh}
        fontSize={7} // Adjust font size
        color="#C0029D" // Text color
        position={[0, -1, 0]} // Position of the text
        anchorY="middle"
        anchorX="center"
        fontWeight={900}
        maxWidth={70} // Ensures the text wraps to the next line
        lineHeight={1.2} // Adjust line spacing
        material-toneMapped={false} // Ensures colors are not affected by tone mapping
        textAlign="center"
        // skewY={2}
      >
        {title}
      </Text>
    );
  };
  

const HomeSection = ({ id,title, videoUrl, index }) => {
  const [scrollY, setScrollY] = useState(0);
  const [inViewport, setInViewport] = useState(false);
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const light = useRef();
  useEffect(() => {
    let timeoutId;
    
    const handleScroll = () => {
      clearTimeout(timeoutId); // Clear any previously set timeout
      timeoutId = setTimeout(() => {
        setScrollY(window.scrollY / 2);
      }, 50); // Adjust debounce time as needed
    };
  console.log("homsesction")
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);
  
  // console.log("componentSEction_",id)
  if (light.current) {
    light.current.target.position.set(0, -5, 0); // Align the spotlight with the title
  }
  // useEffect(() => {
  //   if (containerRef.current && videoRef.current) {
  //     // Create GSAP timeline
  //     const timeline = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: containerRef.current, // Element to observe
  //         start: "bottom bottom", // Trigger animation when element enters viewport
  //         end: "center center", // End trigger point
  //         toggleActions: "play none none reverse" // Play on enter, reverse on leave
  //       },
  //     });
  
  //     // Video Animation (Appear and Disappear)
  //     timeline
  //       .fromTo(
  //         videoRef.current,
  //         {
  //           opacity: index==0?1:1,
  //           duration:2,
  //           clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", 
  //           scale:1, // Start slightly smaller for zoom-in effect
  //           y: 400, // Position below viewport
  //         },
  //         {
  //           clipPath: "polygon(0% 0%, 100% 0%, 97% 100%, 3% 100%)",
  //           opacity: 1,
  //           scale: 1, // Reset scale to normal
  //           y: 0, // Slide into position
  //           duration:1, // Duration of the animation
  //           ease: "power3.out", // Smooth easing for appearing
  //         }
  //       )
       
  //   }
  // }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInViewport(entry.isIntersecting),
      
      {
        root: null,
        rootMargin: "20px",
        
      },
    );
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current, // Element to observe
        start: "top bottom", // Trigger animation when element enters viewport
        end: "bottom top",
        scrub: 1,  // End trigger point
        // toggleActions: "play none none reverse" // Play on enter, reverse on leave
      },
    });

    // Video Animation (Appear and Disappear)
    timeline
    .fromTo(
      containerRef.current,
      { 
        opacity: 0.5,
        scale: 0.3,
        skewY: 3,
        skewX:1,
        y:100 // Skew while entering
      },
      { 
        opacity: 1,
        scale: 1,
        skewY: 0,  // No skew in center
        duration: 1,
        
        
      }
    )
    .fromTo(containerRef.current, {
      opacity: 1,
      scale: 1,  // Increase size while moving up
      skewY: 0,    // Skew in opposite direction
      duration: 1,
      skewX:0,
    },
 {
  opacity: 0.9,
    scale: 1.3,  // Increase size while moving up
    skewY: -5,    // Skew in opposite direction
    duration: 1,

  });


    if (videoRef.current) observer.observe(videoRef.current);

    return () => {
      if (videoRef.current) observer.unobserve(videoRef.current);
    };
  }, [inViewport]);
  
  
  return (
    <>
    
               
          <BubbleScene/>
      <Box sx={{overflow:'hidden', padding:'5px',textShadow: '2px 2pxrgb(115, 23, 63)', height:'165vh'}} id={id}>
     
      
      <Canvas
    
      camera={{ position: [0, 0, 12] }}
      shadows // Enable shadows in the canvas
      style={{ height: "45vh",width:'100vw', top: "25px", display: "flex"}}
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
      <Title ref={containerRef} scrollY={scrollY} title={title} />

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
          height: "150vh",
          width: "100%",
          // top: "30px",
          // background:'violet'  
        }}
      >
        {/* 3D Canvas Section */}
   
      
       {
      <Box
      // ref={videoRef}
      sx={{
      
        overflow: "hidden",
        width: "100vw",
        height: "150vh",
      
        transformOrigin: "bottom right",// Inverted trapezoid
      }}
    >
     {/* <video
            ref={videoRef}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
        
            }}
          
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video> */}
          <VideoPage videoUrl={videoUrl} id={id}/>
         
      
    </Box>
    
    
        }
         
      </Box>
    
      </Box>
    </>
  );
};

export default HomeSection;