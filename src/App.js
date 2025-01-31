import React, { useState, useEffect } from "react"
import HomePage from "./Pages/HomePage"
import Facilities from "./components/Facilities"
import "./App.css"
import AllEvents from "./Pages/AllEvents"

import { BrowserRouter, Routes, Route } from "react-router-dom";
import EventDetailPage from "./Pages/EventDetail"
import MusicConcerts from "./Pages/MusicConcerts"
import Background3D from "./components/Background3d"
import ViewGarden from "./Pages/ViewGarden"

// Main App Component
function App() {
  const videoData = [
    {
      title: "Explore the Universe",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      title: "Dive into the Ocean",
      videoUrl: "https://www.w3schools.com/html/movie.mp4",
    },
    {
      title: "Discover Ancient Ruins",
      videoUrl:
        "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    },
    {
      title: "Journey Through the Jungle",
      videoUrl: "https://sample-videos.com/video123/mp4/480/asdasdas.mp4",
    },
    {
      title: "Cityscapes Around the World",
      videoUrl: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
    },
    {
      title: "Climbing the Highest Peaks",
      videoUrl:
        "https://file-examples.com/storage/fe72534b800b25da93c9278/2017/04/file_example_MP4_480_1_5MG.mp4",
    },
    {
      title: "Flight Through the Clouds",
      videoUrl: "https://filesamples.com/samples/video/mp4/sample_640x360.mp4",
    },
  ]

  const [scrollIndex, setScrollIndex] = useState(0)
  const [targetScrollIndex, setTargetScrollIndex] = useState(0)

  const handleScroll = (event) => {
    const isScrollingDown = event.deltaY > 0
    let newTarget = targetScrollIndex

    if (isScrollingDown) {
      newTarget = Math.min(targetScrollIndex + 15, 900) // Adjust increment for smoothness
    } else {
      newTarget = Math.max(targetScrollIndex - 15, 0) // Adjust decrement for smoothness
    }

    setTargetScrollIndex(newTarget)
  }

  useEffect(() => {
    const handleWheel = (event) => {
      handleScroll(event)
    }

    window.addEventListener("wheel", handleWheel)

    return () => {
      window.removeEventListener("wheel", handleWheel)
    }
  }, [targetScrollIndex])

  useEffect(() => {
    // Smoothly interpolate scrollIndex toward targetScrollIndex
    const animation = requestAnimationFrame(() => {
      setScrollIndex((prev) => {
        const diff = targetScrollIndex - prev
        return prev + diff * 0.1 // Easing factor for smoothness
      })
    })

    return () => cancelAnimationFrame(animation)
  }, [scrollIndex, targetScrollIndex])

  return (
    <>
  
   

     <BrowserRouter>
  <Routes>
  <Route path="/" element={<HomePage />} />
    <Route path="/home/:id" element={<HomePage />} />
    <Route path="/garden/:id" element={<ViewGarden />} />
    <Route path="/events" element={<AllEvents />} />
    <Route path="/groupBookings" element={<AllEvents />} />
    <Route path="/events/music-concert" element={<MusicConcerts />} />
    <Route path="/events/event-details" element={<EventDetailPage />} />
  </Routes>
</BrowserRouter>
    </>
    
  )
}

export default App