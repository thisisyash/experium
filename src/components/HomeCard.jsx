import React, { useState, useEffect, useRef } from "react"
import {
  Card,
  CardContent,
  Typography,
  Collapse,
  IconButton,
  Slider,
  Box,
} from "@mui/material"
import Grid from "@mui/material/Grid2"
import { VolumeOff, VolumeUp, PlayArrow, Pause } from "@mui/icons-material"
import Experium from '../assets/exp-thumb.png'
const CardComponent = () => {
  const [expanded, setExpanded] = useState(null) // Track expanded state
  const [visibleCards, setVisibleCards] = useState({}) // Track visibility (via IntersectionObserver)
  const [animationTriggered, setAnimationTriggered] = useState({}) // Track if animation has been triggered once

  // Per-card video states:
  // {
  //   [cardId]: {
  //     isPlaying: boolean,
  //     isMuted: boolean,
  //     currentTime: number,
  //     duration: number,
  //     volume: number
  //   }
  // }
  const [videoStates, setVideoStates] = useState({})

  // Keep refs to each card container (for intersection observing).
  const cardRefs = useRef([])

  // Keep refs to each actual HTML <video>.
  const videoRefs = useRef({})

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

  // Initialize each card's video state (only if not already set)
  useEffect(() => {
    const newVideoStates = { ...videoStates }
    cards.forEach((card) => {
      if (!newVideoStates[card.id]) {
        newVideoStates[card.id] = {
          isPlaying: false,
          isMuted: true,
          currentTime: 0,
          duration: 0,
          volume: 1,
        }
      }
    })
    setVideoStates(newVideoStates)
    // eslint-disable-next-line
  }, [cards])

  // Utility to set partial state of a given card’s video
  const setVideoState = (cardId, newProps) => {
    setVideoStates((prev) => ({
      ...prev,
      [cardId]: {
        ...prev[cardId],
        ...newProps,
      },
    }))
  }

  // IntersectionObserver logic for each card
  const observeVisibility = (id) => {
    const options = {
      root: null, // Use the viewport
      rootMargin: "0px",
      threshold: 0.5, // Trigger at 50% visibility
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // When card enters view
        if (entry.isIntersecting && !animationTriggered[id]) {
          setVisibleCards((prev) => ({ ...prev, [id]: true }))
          setAnimationTriggered((prev) => ({ ...prev, [id]: true }))
        }

        // When card exits view
        if (!entry.isIntersecting) {
          setVisibleCards((prev) => ({ ...prev, [id]: false }))
          setAnimationTriggered((prev) => ({ ...prev, [id]: false }))
        }
      })
    }, options)

    if (cardRefs.current[id]) {
      observer.observe(cardRefs.current[id])
    }

    // Cleanup observer
    return () => {
      if (cardRefs.current[id]) {
        observer.unobserve(cardRefs.current[id])
      }
    }
  }

  useEffect(() => {
    const cleanupFunctions = cards.map((card) => observeVisibility(card.id))
    return () => {
      cleanupFunctions.forEach((cleanup) => cleanup && cleanup())
    }
    // eslint-disable-next-line
  }, [])

  // ----- Custom Video Handlers (similar to first snippet) -----

  // 1) Toggle Play/Pause
  const handlePlayToggle = (cardId) => {
    const videoEl = videoRefs.current[cardId]
    if (!videoEl) return

    if (videoStates[cardId].isPlaying) {
      videoEl.pause()
      setVideoState(cardId, { isPlaying: false })
    } else {
      videoEl.play()
      setVideoState(cardId, { isPlaying: true })
    }
  }

  // 2) Toggle Mute
  const handleMuteToggle = (cardId) => {
    const videoEl = videoRefs.current[cardId]
    if (!videoEl) return

    const currentlyMuted = videoStates[cardId].isMuted
    videoEl.muted = !currentlyMuted
    setVideoState(cardId, { isMuted: !currentlyMuted })
  }

  // 3) Track the currentTime
  const handleTimeUpdate = (cardId) => {
    const videoEl = videoRefs.current[cardId]
    if (!videoEl) return

    setVideoState(cardId, { currentTime: videoEl.currentTime })
  }

  // 4) Handle Volume
  const handleVolumeChange = (cardId, newVolume) => {
    const videoEl = videoRefs.current[cardId]
    if (!videoEl) return

    videoEl.volume = newVolume
    videoEl.muted = newVolume === 0
    setVideoState(cardId, {
      volume: newVolume,
      isMuted: newVolume === 0,
    })
  }

  // 5) On loaded metadata, set duration
  const handleLoadedMetadata = (cardId) => {
    const videoEl = videoRefs.current[cardId]
    if (!videoEl) return

    setVideoState(cardId, { duration: videoEl.duration })
  }

  // ----- Card Expansion (not mandatory for the video logic) -----
  const handleExpandClick = (id) => {
    setExpanded(expanded === id ? null : id) // Toggle collapse
  }

  return (
    <Grid container spacing={2} justifyContent="center" sx={{ background: "#fffcfe" }}>
      {cards.map((card, index) => {
        const vState = videoStates[card.id] || {}
        return (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={6}
            key={card.id}
            sx={{ background: "#f5effe" }}
          >
            <div ref={(el) => (cardRefs.current[card.id] = el)} id={card.tagId}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: {
                    xs: "column",
                    sm: index % 2 === 0 ? "row" : "row-reverse",
                  },
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "none",
                  borderRadius: 2,
                  width: "100%",
                  height: "80vh",
                  flexWrap: "nowrap",
                  marginTop: "30px",
                  background: "#f5effe00",
                }}
              >
                {/* ----------- VIDEO SECTION (Custom controls) ----------- */}
                <Box
                  sx={{
                    flex: "1 1 50%",
                    maxWidth: { xs: "100%", sm: "50%", lg: "60%" },
                    padding: "20px",
                    position: "relative", // so we can absolutely-position controls
                    overflow: "hidden",
                    transform: visibleCards[card.id]
                      ? "translate(0, 0)"
                      : index % 2 === 0
                      ? "translate(-100%, 100%)"
                      : "translate(150%, -100%)",
                    opacity: visibleCards[card.id] ? 1 : 0,
                    transition: "transform 1s ease-in-out, opacity 1.5s ease-in-out",
             
                 
                    borderRadius: "8px",
                 
                  }}
                >
                  <video
                   poster={Experium}
                    ref={(videoEl) => (videoRefs.current[card.id] = videoEl)}
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius:'10px',
                      objectFit: "cover",
                    }}
                    muted={vState.isMuted}
                    onTimeUpdate={() => handleTimeUpdate(card.id)}
                    onLoadedMetadata={() => handleLoadedMetadata(card.id)}
                    // Remove default controls
                    // autoPlay or loop if desired
                    // loop
                  >
                    <source src={card.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  {/* -- Below is an example of replicating the custom controls from snippet #1 -- */}

                  {/* 1) If video is muted, show a big unmute button in the center (like snippet #1). */}
                  {!vState.isPlaying && (
                    <IconButton
                      onClick={() => handlePlayToggle(card.id)}
                      sx={{
                        position: "absolute",
                        bottom: "10%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        color: "orange",
                        backgroundColor: "black",
                        borderRadius: "10%",
                        opacity: 0.6,
                        "&:hover": {
                          backgroundColor: "white",
                          color: "orange",
                        },
                        zIndex: 10,
                      }}
                    >
                      <PlayArrow sx={{ fontSize: "3rem" }} />
                    </IconButton>
                  )}

                  {/* 2) If video is unmuted, show the full control bar */}
                  {vState.isPlaying && (
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: "10px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "50%",
                        backgroundColor: "transparent",
                        borderRadius: "8px",
                        padding: "10px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        color: "orange",
                      }}
                    >
                      {/* Play/Pause */}
                      <IconButton onClick={() => handlePlayToggle(card.id)}>
                        {vState.isPlaying ? (
                        <Pause sx={{ color: "orange", fontSize: "xx-large" }} /> ) : (
                            <PlayArrow sx={{ color: "orange", fontSize: "xx-large" }} />
                        
                        )}
                      </IconButton>

                      {/* Progress Slider */}
                      <Slider
                        value={vState.currentTime}
                        min={0}
                        max={vState.duration || 100}
                        onChange={(e, newValue) => {
                          const videoEl = videoRefs.current[card.id]
                          if (!videoEl) return
                          videoEl.currentTime = newValue
                          setVideoState(card.id, { currentTime: newValue })
                        }}
                        sx={{
                          color: "orange",
                          mx: 2,
                        }}
                      />

                      {/* Volume Slider */}
                      <Slider
                        value={vState.volume}
                        min={0}
                        max={1}
                        step={0.1}
                        onChange={(e, newValue) => handleVolumeChange(card.id, newValue)}
                        sx={{
                          width: "200px",
                          color: "orange",
                        }}
                      />

                      {/* Mute/Unmute Icon */}
                      <VolumeUp
                        sx={{ fontSize: "2rem", marginLeft: "15px", cursor: "pointer" }}
                        onClick={() => handleMuteToggle(card.id)}
                      />
                    </Box>
                  )}
                </Box>
                {/* ----------- END VIDEO SECTION ----------- */}

                {/* ----------- TEXT SECTION ----------- */}
                <CardContent
                  sx={{
                    flex: "1 1 50%",
                    minWidth: 0,
                    background:'#f5effe00',
                    textAlign: {
                      xs: "center",
                      sm: index % 2 === 0 ? "right" : "left",
                    },
                    padding: 2,
                    transform: visibleCards[card.id]
                      ? "translate(0, 0)"
                      : index % 2 === 0
                      ? "translate(100%, -100%)"
                      : "translate(-100%, 100%)",
                    opacity: visibleCards[card.id] ? 1 : 0,
                    transition: "transform 1s ease-in-out, opacity 1s ease-in-out",
                  }}
                >
                  <Typography
                    variant="h1"
                    component="h2"
                    sx={{
                      fontWeight: 700,
                      margin: 1,
                      color: "#C0029D",
                      background: "#f5effe00",
                      fontFamily:"VistaMed",
                      textAlign:'left',
                      boxShadow:'10px 10px 10px #eaeaea'
                    }}
                  >
                    {card.title}
                  </Typography>
                  {/* Add any other text or expand buttons here */}
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
