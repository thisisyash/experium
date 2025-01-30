import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import { Box, Grow, IconButton, Slider,Button} from "@mui/material";
import { VolumeOff, VolumeUp, PlayArrow, Pause, Audiotrack, MusicOff } from "@mui/icons-material";


const VideoPage = ({ videoUrl }) => {
  const [scrollY, setScrollY] = useState(0);
  const [inViewport, setInViewport] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(1);

  const videoRef = useRef(null);


  const handleMuteToggle = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };
console.log(isPlaying)
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
      backgroundColor: "black",
      overflow: "hidden",
      borderRadius: "10px",
    }}
  >


<video
ref={videoRef}
style={{
width: "80vw",
height: "80vh",
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


    {/* Unmute Icon */}
    {!isPlaying && (
      <IconButton
        onClick={handlePlay}
        sx={{
          position: "absolute",
          bottom: "10%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "orange",
          backgroundColor: "black",
          borderRadius: "10%",
          opacity: 0.6,
          animation: 'ease-in-out',
          "&:hover": {
            backgroundColor: "white",
            color: "orange",
          },
          zIndex: 10,
        }}
      >
        <PlayArrow color="orange" sx={{fontSize:"3rem"}}/>
      </IconButton>
    )}

    {/* Custom Controls */}
    {isPlaying && (
      <Box
        sx={{
          position: "absolute",
          bottom: "10px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "50%",
          backgroundColor: "rgb(255, 255, 255)",
          borderRadius: "8px",
          padding: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          color: "orange",
        }}
      >
        <IconButton onClick={handlePlayToggle}>
          {isPlaying ?  <PlayArrow   sx={{ color: "orange", fontSize:'xx-large' }}/> : <Pause  sx={{ color: "orange", fontSize:'xx-large' }} />}
        </IconButton>

        <Slider
          value={currentTime}
          min={0}
          max={videoRef.current?.duration || 100}
          onChange={(e, value) => {
            if (videoRef.current) videoRef.current.currentTime = value;
          }}
          sx={{
            color: "orange",
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
            color: "orange",
            
          }}
        />

        <VolumeUp onClick={handleMuteToggle}  color="orange" style={{fontSize:'2rem',marginLeft:'15px'}} />
      </Box>
    )}
  </Box>
 
   </>
  );
};

export default VideoPage;