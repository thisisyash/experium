import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import { Box, Grow, IconButton, Slider,Button} from "@mui/material";
import { VolumeOff, VolumeUp, PlayArrow, Pause, Audiotrack, MusicOff } from "@mui/icons-material";


const VideoPage = ({ videoUrl }) => {
  const [scrollY, setScrollY] = useState(0);
  const [inViewport, setInViewport] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
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
      width: "80vw",
      height: "80vh",
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
    {isMuted && (
      <IconButton
        onClick={handleMuteToggle}
        sx={{
          position: "absolute",
          bottom: "10%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "violet",
          backgroundColor: "black",
          borderRadius: "10%",
          opacity: 0.6,
          animation: 'ease-in-out',
          "&:hover": {
            backgroundColor: "white",
            color: "violet",
          },
          zIndex: 10,
        }}
      >
        <VolumeOff color="violet" sx={{fontSize:"3rem"}}/>
      </IconButton>
    )}

    {/* Custom Controls */}
    {!isMuted && (
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
          color: "violet",
        }}
      >
        <IconButton onClick={handlePlayToggle}>
          {!isPlaying ?  <PlayArrow  sx={{ color: "violet", fontSize:'xx-large' }}/> : <Pause  sx={{ color: "violet", fontSize:'xx-large' }} />}
        </IconButton>

        <Slider
          value={currentTime}
          min={0}
          max={videoRef.current?.duration || 100}
          onChange={(e, value) => {
            if (videoRef.current) videoRef.current.currentTime = value;
          }}
          sx={{
            color: "violet",
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
            color: "violet",
            
          }}
        />

        <VolumeUp onClick={handleMuteToggle}  color="violet" style={{fontSize:'2rem',marginLeft:'15px'}} />
      </Box>
    )}
  </Box>
  <div style={{display:"flex", justifyContent:"center", alignItems:'center',width:'100%',flexDirection:'row'}}>
  <Button  label="Know More.." size="large" variant="contained" fontSize="large" color="blue" sx={{marginTop:'20px',justifySelf:'center',marginRight:'20px'}}>Know More..</Button>
  </div>
      
   </>
  );
};

export default VideoPage;