import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import { Box } from "@mui/material";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import VideoPage from "./VideoPlayer";

gsap.registerPlugin(ScrollTrigger);

const Title = ({ title }) => {
  const mesh = useRef();
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [fontSize, setFontSize] = useState(7); // Default font size
  const [maxWidth, setMaxWidth] = useState(70); // Default max width

  useEffect(() => {
    const updateFontSizeAndWidth = () => {
      const width = window.innerWidth;
      
      // Adjust font size based on screen width
      if (width < 600) {
        setFontSize(3);  // For small screens
        setMaxWidth(10); // Smaller maxWidth for small screens
      } else if (width >= 600 && width < 1200) {
        setFontSize(4);  // For medium screens
        setMaxWidth(10); // Default maxWidth for medium screens
      } else {
        setFontSize(7); // For larger screens
        setMaxWidth(70); // Larger maxWidth for larger screens
      }
    };

    window.addEventListener("resize", updateFontSizeAndWidth);
    updateFontSizeAndWidth(); // Call it once on component mount to set initial size

    return () => {
      window.removeEventListener("resize", updateFontSizeAndWidth);
    };
  }, []);

  useEffect(() => {
    let timeoutId;

    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsScrolling(false);  // Set scrolling state to false after a delay
      }, 230);
      setScrollY(window.scrollY / 2);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  useFrame(() => {
    if (mesh.current) {
      const tiltFactor = Math.sin(scrollY * 0.0005) / 10;
      const sideTiltFactor = Math.sin(scrollY * 0.005) / 10;
      const zTiltFactor = Math.sin(scrollY * 0.005) / 100;
      mesh.current.rotation.set(tiltFactor, sideTiltFactor, -zTiltFactor * 10);

      const scaleFactor = 1 - Math.sin(scrollY * 0.01) * 0.001;
      mesh.current.scale.set(scaleFactor, scaleFactor, 1);
    }
  });

  return (
    <Text
      ref={mesh}
      fontSize={fontSize}  // Dynamically set font size
      color="#C0029D"
      position={[0, -1, 0]}
      anchorY="middle"
      anchorX="center"
      fontWeight={900}
      maxWidth={maxWidth}  // Dynamically set max width based on screen size
      lineHeight={1.2}
      material-toneMapped={false}
      textAlign="center"
      style={{
        wordWrap: 'break-word',  // Ensure the word breaks if it overflows
        whiteSpace: 'normal',    // Allow text to wrap to the next line
      }}
    >
      {title}
    </Text>
  );
};

  

const HomeSection = ({ id, title, videoUrl, index }) => {
  const [scrollY, setScrollY] = useState(0);
  const [inViewport, setInViewport] = useState(false);
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const light = useRef();

  useEffect(() => {
    let timeoutId;

    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setScrollY(window.scrollY / 2);
      }, 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  if (light.current) {
    light.current.target.position.set(0, -5, 0);
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInViewport(entry.isIntersecting),
      {
        root: null,
        rootMargin: "20px",
        threshold:0.7,
      }
    );

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });

    timeline
      .fromTo(
        containerRef.current,
        {
          opacity: 0.5,
          scale: 0.3,
          skewY: 3,
          y: 10,
        },
        {
          opacity: 1,
          scale: 1,
          skewY: 0,
          duration: 1,
        }
      )
      .fromTo(
        containerRef.current,
        {
          opacity: 1,
          scale: 1,
          skewY: 0,
          duration: 1,
          skewX: 0,
        },
        {
          opacity: 0.9,
          scale: 1.3,
          skewY: -5,
          duration: 1,
        }
      );

    if (videoRef.current) observer.observe(videoRef.current);

    return () => {
      if (videoRef.current) observer.unobserve(videoRef.current);
    };
  }, [inViewport]);

  return (
    <>
    
      <Box sx={{ overflow: 'hidden', padding: '5px', textShadow: '2px 2pxrgb(115, 23, 63)', height: '165vh' }} id={id}>
        <Canvas
          camera={{ position: [0, 0, 12] }}
          shadows
          style={{ height: "45vh", width: '100vw', top: "25px", display: "flex" }}
        >
          <ambientLight intensity={0.3} />
          <spotLight
            position={[1, -2, 10]}
            intensity={1.5}
            angle={Math.PI / 6}
            penumbra={2}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />
          <Title scrollY={scrollY} title={title} />
          <mesh position={[0, -3, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
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
          }}
        >
          <Box sx={{
            overflow: "hidden",
            width: "100vw",
            height: "150vh",
            transformOrigin: "bottom right",
          }}>
            <VideoPage videoUrl={videoUrl} id={id} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default HomeSection;