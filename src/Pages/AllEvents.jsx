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
          fontSize: "1.5rem",
          fontWeight: "400",
          fontFamily: "Righteous",
          color: "#C0029D",
        }}
      >
        Search by Category
      </Typography>

      <Box
        sx={{
          display: isMobile ? "grid" : "flex",
          gap:{xs:'2px',sm:'10px', md:'15px', lg:'20px'},
          gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "none",
          mr: 2,
          px: 2,
          padding:{xs:'10px',sm:'10px', md:'15px', lg:'20px'},
          justifyContent: "left",
          cursor:'pointer',
        }}
        onClick={navigatCategory}
      >
        {categories.map((category, index) => (
          <Box
            key={index}
            sx={{
              width:{xs:'170px',sm:'170px', md:'250px', lg:'300px'},
              height:{xs:'170px',sm:'170px', md:'250px', lg:'300px'},
             
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
                // width: "50%",
                color: "black",
                textAlign: "center",
                fontFamily: "Righteous",
                fontSize: {xs:'1',sm:'1.2', md:'1.2', lg:'1.3'},
                paddingBottom:'10px',
                margin:'10px',
                display:'flex',
                // marginRight:'25px'
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
          ml: isMobile ? 2 : 6,
          mt: 3,
          fontSize: "1.5rem",
          fontWeight: "400",
          fontFamily: "Righteous",
          color: "#C0029D",
        }}
      >
        All
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns:{sm: "repeat(2, 1fr)" , xs: "repeat(1, 2fr)",md:"repeat(3, 1fr)" , lg:"repeat(5, 1fr)"},
          // gap: 2,
          mt: 2,
          px: 2,
          // margin:'30px',
         cursor:'pointer',
         justifyContent: "center",
         alignItems: "center",
         ml: isMobile ? 3 : 3,
      
        }}
        onClick={navigatEvent}
      >
        {events.map((event, index) => (
          <Box key={index} sx={{   width:{xs:'320px',sm:'360px', md:'250px', lg:'300px'},
                                   height:{xs:'550px',sm:'550px', md:'550px', lg:'550px'},  mb: isMobile ? 4 : 0,
         }} >
            <CardMedia
              component="img"
              height="450px"
              image={event.image}
              alt={event.title}
              sx={{ borderTopLeftRadius: "5px", borderTopRightRadius: "5px", objectFit: "contain", 
              width:'100%'}}
            />
            <CardContent sx={{ textAlign: "center" , width:'80%', textAlign:'center'}}>
              <Typography sx={{ fontWeight: "400", fontFamily: "Righteous", color: "#C0029D" }}>
                {event.title}
              </Typography>
              <Typography sx={{ textAlign: "center", color: "#797979", fontWeight: "400", fontSize: "0.7rem" }}>
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