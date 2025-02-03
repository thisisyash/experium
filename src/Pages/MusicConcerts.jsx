import React from "react";
import { Box, Typography, TextField, Card, CardMedia, CardContent } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Concert from "../assets/concert.png";
import Header from "../components/Header.jsx";
import Music from "../assets/music-concert.jpg";
import Workshop from "../assets/workshop.png";
import Events from "../assets/events.jpg";
import Event2 from "../assets/event2.png";
import Event3 from "../assets/event3.png";
import Event4 from "../assets/event4.png";
import Album from "../assets/album.png";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useNavigate } from "react-router-dom";
const MusicConcerts = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
const navigate=useNavigate()
  const categories = [
    { title: "Musical Concert's", image: Music },
    { title: "Events", image: Events },
    { title: "Workshop", image: Workshop },
  ];

  const events = [
    { title: "Title of the show", description: "Lorem ipsum dolor sit amet consectetur. Rhoncus mi accumsan nisl faucibus ultricies quam rhoncus.", image: Album },
    { title: "Title of the show", description: "Lorem ipsum dolor sit amet consectetur. Rhoncus mi accumsan nisl faucibus ultricies quam rhoncus.", image: Event2 },
    { title: "Title of the show", description: "Lorem ipsum dolor sit amet consectetur. Rhoncus mi accumsan nisl faucibus ultricies quam rhoncus.", image: Event3 },
    { title: "Title of the show", description: "Lorem ipsum dolor sit amet consectetur. Rhoncus mi accumsan nisl faucibus ultricies quam rhoncus.", image: Event4 },
  ];

  return (
    <Box sx={{ width: "100%", minHeight: "100vh" }}>
      {/* Header */}
      <Box sx={{ height: "13vh", position: "relative", zIndex: 10 }}>
        <Header />
      </Box>

   

      {/* Search by Category */}
      <Typography
        sx={{
          ml: isMobile ? 2 : 6,
          mt: 3,
          fontSize: "2rem",
          fontWeight: "400",
          fontFamily: "Palanquin Dark",
          color: "#370EC9",
        }}
      >
        Music Concerts
      </Typography>

  


      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: isMobile ? "repeat(1, 1fr)" : "repeat(4, 1fr)",
          gap: 2,
         mt:0,
          px: 2,
          margin:'30px'
         
        }}
      >
        {events.map((event, index) => (
          <Box key={index}  >
            <CardMedia
              component="img"
              height="60%"
              image={event.image}
              alt={event.title}
              sx={{ borderTopLeftRadius: "5px", borderTopRightRadius: "5px",cursor:'pointer' }}
              onClick={()=>navigate("/events/event-details")}
            />
            <CardContent sx={{ textAlign: "center" }}>
              <Typography sx={{ fontWeight: "400", fontFamily: "Righteous", color: "#C0029D" }}>
                {event.title}
              </Typography>
              <Typography sx={{ textAlign: "left", color: "#797979", fontWeight: "400", fontSize: "0.7rem" }}>
                {event.description}
              </Typography>
            </CardContent>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default MusicConcerts;
