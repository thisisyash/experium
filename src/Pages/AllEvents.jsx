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

import { useNavigate } from 'react-router-dom';
const AllEvents = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const navigate = useNavigate();
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

  const navigatCategory = () => {
    navigate('/events/music-concert');
  };
  const navigatEvent = () => {
    navigate('/events/event-details');
  };
  return (
    <Box sx={{ width: "100%", minHeight: "100vh" }}>
      {/* Header */}
      <Box sx={{ height: "13vh", position: "relative", zIndex: 10 }}>
        <Header  pageId={"events"} />
      </Box>

      {/* Swiper Section */}
      <Box sx={{ width: "95%", height: "16vh", margin: "20px auto" }}>
        <Swiper slidesPerView={1} loop={true} autoplay={{ delay: 3000 }}>
          <SwiperSlide>
            <img src={Concert} alt="Slide 1" style={{ width: "100%", height: "16vh", objectFit: "cover" }} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Concert} alt="Slide 2" style={{ width: "100%", height: "16vh", objectFit: "cover" }} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Concert} alt="Slide 3" style={{ width: "100%", height: "16vh", objectFit: "cover" }} />
          </SwiperSlide>
        </Swiper>
      </Box>

      {/* Search Textbox */}
    <Box sx={{ mt: 2, px: 2,ml:4,mr:4, display: "flex", justifyContent: "center" }}>
        <TextField
          fullWidth
          placeholder="Search events..."
          variant="outlined"
          sx={{
            borderRadius: "25px",
            "& .MuiOutlinedInput-root": {
              borderRadius: "25px",
              "& fieldset": { borderColor: "pink" },
            },
            "& input::placeholder": { color: "pink", fontStyle: "italic" },
          }}
        />
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
        Search by Category
      </Typography>

      <Box
        sx={{
          display: isMobile ? "grid" : "flex",
          gap: isMobile ? "10px" : "50px",
          gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "none",
          mt: 2,
          px: 2,
          justifyContent: "left",
          cursor:'pointer',
        }}
        onClick={navigatCategory}
      >
        {categories.map((category, index) => (
          <Box
            key={index}
            sx={{
              width: isMobile ? "100%" : "18%",
              height: "35vh",
              backgroundImage: `url(${category.image})`,
              backgroundSize: "cover",
              position: "relative",
            }}
          >
            <Typography
              sx={{
                position: "absolute",
                bottom: 0,
                right: 0,
                width: "50%",
                color: "black",
                textAlign: "center",
                fontFamily: "Righteous",
                fontSize: "1.5rem",
                paddingBottom:'10px',
                margin:'10px',
                display:'flex',
                marginRight:'25px'
              }}
            >
              {category.title}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* All Events */}
      <Typography
        sx={{
          ml: isMobile ? 2 : 5,
          mt: 6,
          fontSize: "2rem",
          fontWeight: "400",
          fontFamily: "Palanquin Dark",
          color: "#370EC9",
        }}
      >
        All
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: isMobile ? "repeat(1, 1fr)" : "repeat(4, 1fr)",
          gap: 2,
          mt: 2,
          px: 2,
          margin:'30px',
         cursor:'pointer',
         
        }}
        onClick={navigatEvent}
      >
        {events.map((event, index) => (
          <Box key={index} >
            <CardMedia
              component="img"
              height="65%"
              image={event.image}
              alt={event.title}
              sx={{ borderTopLeftRadius: "5px", borderTopRightRadius: "5px" }}
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

export default AllEvents;
