import React, { useEffect, useState } from "react";

// import LandingPage from "./Courosals/LandingPage";
import { RouterProvider } from "react-router-dom";
import Routing from "./Routing/Routing";

const App = () => {
  const [showLanding, setShowLanding] = useState(true);

  // useEffect(() => {
  //   // Hide landing page after 4 seconds
  //   const timer = setTimeout(() => {
  //     setShowLanding(false);
  //   }, 4000);

  //   return () => clearTimeout(timer); // cleanup
  // }, []);

  return (
    <>
      {/* {showLanding ? <LandingPage /> : */}
       <RouterProvider router={Routing} />
       {/* } */}
    </>
  );
};

export default App;