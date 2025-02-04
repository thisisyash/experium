import React, { useEffect, useRef } from "react"
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Facility1 from "../assets/facility_1.jpg"
import Facility2 from "../assets/facility_2.png"

gsap.registerPlugin(ScrollTrigger)

const Facilities = () => {
  const sectionRef = useRef(null)
  const frameRefs = useRef([])
  const titleRef = useRef(null)

  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  // Define frame sizes & positions dynamically
  const frames = isMobile
    ? [
        { imageUrl: Facility1, size: "160px", position: [5, 5] },
        { imageUrl: Facility2, size: "160px", position: [22, 75] },
        { imageUrl: Facility1, size: "200px", position: [60, 30] },
        {
          imageUrl: "https://picsum.photos/200",
          size: "120px",
          position: [15, 40],
        },
        {
          imageUrl: "https://picsum.photos/200",
          size: "120px",
          position: [50, 13],
        },
      ]
    : [
        { imageUrl: Facility1, size: "250px", position: [5, 5] },
        { imageUrl: Facility2, size: "250px", position: [22, 65] },
        { imageUrl: Facility1, size: "250px", position: [73, 25] },
        {
          imageUrl: "https://picsum.photos/200",
          size: "180px",
          position: [33, 30],
        },
        {
          imageUrl: "https://picsum.photos/200",
          size: "180px",
          position: [53, 13],
        },
      ]

  useEffect(() => {
    if (sectionRef.current) {
      // Animate frames on scroll
      gsap.to(frameRefs.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
        opacity: 1,
        scale: 1,
        duration: 1.5,
        stagger: 0.2,
        ease: "power3.out",
      })

      // Animate title with rotation & movement from bottom
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 100, rotateY: 125 }, // Start position
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            scrub: 1,
         
          },
          opacity: 1,
          y: 0,
          rotateY: 0, // Rotate into view
          duration: 1.2,
          ease: "power3.out",
        }
      )
    }
  }, [])

  return (
    <Box
      ref={sectionRef}
      sx={{
        backgroundColor: "white",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
        top: "15vh",
      }}
    >
      {frames.map((frame, index) => (
        <Frame
          key={index}
          ref={(el) => (frameRefs.current[index] = el)}
          {...frame}
        />
      ))}
      <Title ref={titleRef} />
    </Box>
  )
}

// Frame Component with GSAP animations
const Frame = React.forwardRef(({ imageUrl, size, position }, ref) => {
  return (
    <Box
      ref={ref}
      sx={{
        position: "absolute",
        left: `${position[0]}vw`,
        top: `${position[1]}vh`,
        width: size,
        height: size,
        borderRadius: "50%",
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0, // Starts hidden (GSAP will fade it in)
        scale: 0.5, // Starts small (GSAP will grow it)
      }}
    />
  )
})

// Title Component with GSAP-powered rotation & fade-in
const Title = React.forwardRef((props, ref) => {
  return (
    <Box
      ref={ref}
      sx={{
        position: "absolute",
        bottom: "30%",
        left: "50%",
        transform: "translateX(-50%)",
        width:'60vw',
        opacity: 0, // Starts hidden (GSAP will fade it in)
      }}
    >
      {/* Subtitle - Appears First */}
      <Box>
        <Typography
          variant="h3"
          sx={{
            color: "#B78899",
            fontWeight: "bold",
            textAlign: "center",
            fontSize: { xs: "0.6rem", sm: "0.8rem", md: "1rem" },
            border: "1px solid black",
            borderRadius: "7px",
            width: { xs: "40%", sm: "30%", md: "20%" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "0 auto",
            padding: "8px",
          }}
        >
          Explore and Enjoy
        </Typography>
      </Box>

      {/* Main Title - Rotates in */}
      <Typography
        variant="h3"
        sx={{
          color: "#B78899",
          fontWeight: "bold",
          textAlign: "center",
          fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2rem" },
          paddingTop: "8px",
        }}
      >
        Experium Facilities
      </Typography>

      {/* Subtitle - Appears Last */}
      <Typography
        variant="h6"
        sx={{
          color: "#B78899",
          fontWeight: "bold",
          textAlign: "center",
          fontSize: { xs: "0.6rem", sm: "0.8rem", md: "1rem" },
          paddingTop: "5px",
        }}
      >
        Explore, enjoy, and create unforgettable experiences.
      </Typography>
    </Box>
  )
})

export default Facilities
