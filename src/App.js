import React from "react";
import DefaultLayout from "./layouts/Defaultlayout";

import Homepage from "./pages/Home.page";
import DefaultHOC from "./HOC/Default.HOC";
import Movie from "./pages/MoviePage";
import MovieHOC from "./HOC/Movie.HOC";

// Import css files from react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
   return (
       <>
       <DefaultHOC path="/" exact component={Homepage}/>
       <MovieHOC path="/movie/:id" exact component={Movie}/>
       </>
   );
}

export default App;
