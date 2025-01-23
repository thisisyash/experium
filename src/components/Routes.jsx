import React from "react";
import { Routes, Route } from "react-router-dom";
import AllEvents from "../Pages/AllEvents";
import HomePage from "../Pages/HomePage";

const AppRoutes = ({ videoData, scrollIndex }) => {
  return (
    <Routes>
      {/* Home Route */}
      <Route
        path="/"
        element={
          <HomePage videoData={videoData} scrollIndex={scrollIndex} />
        }
      />

      {/* Additional Routes */}
      <Route path="/allEvents" element={<AllEvents />} />
    </Routes>
  );
};

export default AppRoutes;
