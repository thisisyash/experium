import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import { Box, Grow, IconButton, Slider,Button} from "@mui/material";
import { VolumeOff, VolumeUp, PlayArrow, Pause, Audiotrack, MusicOff } from "@mui/icons-material";

import { useNavigate } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const VideoPage = ({ videoUrl,id }) => {
  const [scrollY, setScrollY] = useState(0);
  const [inViewport, setInViewport] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(1);

  const videoRef = useRef(null);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/attractions`);
    // window.open("https://experiumbooking.brandorigin.in/attractions", '_blank')
  };


  const handleMuteToggle = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };
  const handlePlayToggle = () => {
    const video = videoRef.current;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  const handlePlay = () => {
    const video = videoRef.current;
    if (video) {
  
      setIsPlaying(true);
      video.muted=false
      video.play();
    }
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (video) {
      setCurrentTime(video.currentTime);
    }
  };

  const handleVolumeChange = (event, newValue) => {
    const video = videoRef.current;
    if (video) {
      video.volume = newValue;
      setVolume(newValue);
    }
  };

  return (


   <>
    
    <Box
    sx={{
      position: "relative",
    height:'100vh',
    width:'100%',
    

      overflow: "hidden",
      borderRadius: "10px",
    }}
  >


<video
ref={videoRef}
style={{
width: "100vw",
height: "90vh",
objectFit: "cover",
}}

muted
//  autoPlay
loop
onTimeUpdate={handleTimeUpdate}
>

<source src={videoUrl} type="video/mp4" />
Your browser does not support the video tag.
</video>

<Box sx={{ textAlign: "center", marginTop: "5px" }}>
      <Button
        variant="contained"
       
        endIcon={<ArrowForwardIcon />}
   
        sx={{borderRadius:'15px', color:"#C0029D", background:'white',marginTop:'5px'}}
        href="/attractions"
      >
        Know More
      </Button>
    </Box>
    {/* Unmute Icon */}
    {!isPlaying && (
      <IconButton
        onClick={handlePlay}
        sx={{
          position: "absolute",
          bottom: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "#C0029D",
          backgroundColor: "black",
          borderRadius: "10%",
          opacity: 0.6,
          animation: 'ease-in-out',
          "&:hover": {
            backgroundColor: "white",
            color: "#C0029D",
          },
          zIndex: 10,
        }}
      >
        <PlayArrow color="#C0029D" sx={{fontSize:"3rem"}}/>
      </IconButton>
    )}

    {/* Custom Controls */}
    {isPlaying && (
      <Box
        sx={{
          position: "absolute",
          bottom: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "50%",
          backgroundColor: "transparent",
          borderRadius: "8px",
         
          padding: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          color: "#C0029D",
        }}
      >
        <IconButton onClick={handlePlayToggle}>
          {isPlaying ?  <Pause   sx={{ color: "#C0029D", fontSize:'xx-large' }}/> : <PlayArrow  sx={{ color: "#C0029D", fontSize:'xx-large' }} />}
        </IconButton>

        <Slider
          value={currentTime}
          min={0}
          max={videoRef.current?.duration || 100}
          onChange={(e, value) => {
            if (videoRef.current) videoRef.current.currentTime = value;
          }}
          sx={{
            color: "#C0029D",
            mx: 2,
          }}
        />

        <Slider

          value={volume}
          min={0}
          max={1}
          step={0.1}
          onChange={handleVolumeChange}
          sx={{
            width: "200px",
            color: "#C0029D",
            
          }}
        />

        <VolumeUp onClick={handleMuteToggle}  color="#C0029D" style={{fontSize:'2rem',marginLeft:'15px'}} />
      </Box>
    )}
  </Box>
  
   </>
  );
};

export default VideoPage;