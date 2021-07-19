import React from "react";
import DefaultLayout from "./layouts/Defaultlayout";

import Homepage from "./pages/Home.page";
import DefaultHOC from "./HOC/Default.HOC";

// Import css files from react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
   return (
       <>
       <DefaultHOC path="/" exact component={Homepage}/>
       </>
   );
}

export default App;
