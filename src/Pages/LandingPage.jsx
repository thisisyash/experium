// import { useState, useEffect, useRef } from "react";
// import { Box, Typography } from "@mui/material";

// function LandingPage() {
//   const frameRef = useRef();
//   const [showButton, setShowButton] = useState(false);

//   useEffect(() => {
//     const iframe = frameRef.current;
//     if (!iframe) return;

//     // Attach event listeners to the iframe once it loads
//     const handleIframeLoad = () => {
//       const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

//       if (!iframeDoc) return;

//       console.log("Iframe loaded, attaching event listeners...");

//       // Detect clicks inside iframe
//       iframeDoc.addEventListener("click", (event) => {
//         console.log("Click inside iframe:", event);
//         if (event.target.classList.contains("started-btn")) {
//           setShowButton(true);
//         }
//       });

//       // Detect scrolling inside iframe
//       iframeDoc.addEventListener("scroll", () => {
//         console.log("User is scrolling inside the iframe.");
//       });

//       // Detect keypresses inside iframe
//       iframeDoc.addEventListener("keydown", (event) => {
//         console.log("Key pressed inside iframe:", event.key);
//       });
//     };

//     // Listen for iframe load event
//     iframe.addEventListener("load", handleIframeLoad);

//     return () => {
//       iframe.removeEventListener("load", handleIframeLoad);
//     };
//   }, []);

//   return (
//     <div style={{ height: "100vh", width: "100%", position: "relative" }}>
//       <iframe
//         ref={frameRef}
//         src={`${process.env.PUBLIC_URL}/Landing/index.html`}
//         style={{ border: "none", height: "100%", width: "100%" }}
//         title="Experium"
//       ></iframe>

//       {showButton && (
//         <Box
//           sx={{
//             position: "absolute",
//             bottom: 0,
//             right: 0,
//             margin: "10px",
//             padding: "5px",
//             color: "white",
//             border: "1px solid white",
//           }}
//         >
//           <Typography
//             sx={{ color: "white", fontSize: "1.5rem" }}
//             onClick={() => (window.location.href = `/home`)}
//           >
//             Explore More
//           </Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// export default LandingPage;
