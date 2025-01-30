import React, { useState, useEffect, useRef } from "react"
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Collapse,
} from "@mui/material"
import Grid from "@mui/material/Grid2"

const CardComponent = () => {
  const [expanded, setExpanded] = useState(null) // Track expanded state
  const [visibleCards, setVisibleCards] = useState({}) // Track visibility of each card individually
  const [animationTriggered, setAnimationTriggered] = useState({}) // Track if animation has already been triggered

  // Handle the expansion of the card on button click
  const handleExpandClick = (id) => {
    setExpanded(expanded === id ? null : id) // Toggle collapse
  }

  // Cards data
  const cards = [
    {
      id: 1,
      tagId: "CactusGarden",
      title: "Cactus Garden",
      videoUrl:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    },
    {
      id: 2,
      tagId: "PalmGarden",
      title: "Palm Garden",
      videoUrl:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    },
    {
      id: 3,
      tagId: "Amphitheatre",
      title: "Amphitheatre",
      videoUrl:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    },
    {
      id: 4,
      tagId: "Sculpture",
      title: "Sculpture's",
      videoUrl:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    },
  ]

  // Using useRef to store refs for each card
  const cardRefs = useRef([]) // Array of refs for each card
  const videoRefs = useRef([]) // Array of refs for video elements
  const textRefs = useRef([]) // Array of refs for text elements

  // IntersectionObserver logic for each card
  const observeVisibility = (id) => {
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: "0px",
      threshold: 0.5, // Trigger when 50% of the card is in view
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // When the card enters the viewport
        if (entry.isIntersecting && !animationTriggered[id]) {
          setVisibleCards((prevState) => ({ ...prevState, [id]: true }))
          setAnimationTriggered((prevState) => ({ ...prevState, [id]: true })) // Mark animation as triggered
        }

        // When the card exits the viewport
        if (!entry.isIntersecting) {
          setVisibleCards((prevState) => ({ ...prevState, [id]: false })) // Make card invisible again
          setAnimationTriggered((prevState) => ({ ...prevState, [id]: false })) // Reset animation trigger
        }
      })
    }, options)

    if (cardRefs.current[id]) {
      observer.observe(cardRefs.current[id])
    }

    // Cleanup observer when card is removed from view
    return () => {
      if (cardRefs.current[id]) {
        observer.unobserve(cardRefs.current[id])
      }
    }
  }

  // Set up IntersectionObservers on component mount
  useEffect(() => {
    const cleanupFunctions = cards.map((card) => observeVisibility(card.id))

    // Cleanup on unmount
    return () => {
      cleanupFunctions.forEach((cleanup) => cleanup())
    }
  }, [cards])

  return (
    <Grid container spacing={2} justifyContent="center">
      {cards.map((card, index) => {
        return (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={4}
            key={card.id}
            sx={{ background: "#f5f2f5" }}
          >
            <div ref={(el) => (cardRefs.current[card.id] = el)} id={card.tagId}>
              {/* Apply Grow animation only when card is visible */}

              <Card
                sx={{
                  display: "flex",
                  flexDirection: {
                    xs: "column",
                    sm: index % 2 === 0 ? "row" : "row-reverse",
                  },
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: 3,
                  borderRadius: 2,
                  boxShadow: "none",
                  width: "100%",
                  height: { xs: "auto", sm: "85vh" },
                  flexWrap: "nowrap", // Prevents wrapping
                  marginTop: "500px",
                  background: "#f5f2f5",
                }}
              >
                <CardMedia
                  component="video"
                  sx={{
                    flex: "1 1 50%", // Takes up half of the available space
                    maxWidth: { xs: "100%", sm: "50%" }, // Full width on small screens, 50% on larger
                    height: "auto",
                    objectFit: "cover",
                    borderTopLeftRadius: { sm: 2, xs: 0 },
                    borderBottomLeftRadius: { sm: 2, xs: 0 },
                    margin: "20px",
                    transform: visibleCards[card.id]
                      ? "translateY(0)"
                      : "translateY(100%)",
                    opacity: visibleCards[card.id] ? 1 : 0,
                    transition: "transform 1s ease-out, opacity 1s ease-out",
                  }}
                  src={card.videoUrl}
                  alt={card.title}
                  controls
                />
                <CardContent
                  sx={{
                    flex: "1 1 50%", // Takes up half of the available space
                    minWidth: 0, // Prevents overflow issues
                    textAlign: {
                      xs: "center",
                      sm: index % 2 === 0 ? "right" : "left",
                    },
                    padding: 2,
                    transform: visibleCards[card.id]
                      ? "translateY(0)"
                      : "translateY(-100%)",
                    opacity: visibleCards[card.id] ? 1 : 0,
                    transition: "transform 1s ease-out, opacity 1s ease-out",
                  }}
                >
                  <Typography
                    variant="h1"
                    component="h2"
                    sx={{
                      fontWeight: "700",
                      margin: 1,
                      color: "#C0029D",
                      background: "#f5f2f5",
                    }}
                  >
                    {card.title}
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </Grid>
        )
      })}
    </Grid>
  )
}

export default CardComponent
