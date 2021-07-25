import React from "react";
import DefaultLayout from "./layouts/Defaultlayout";

import Homepage from "./pages/Home.page";
import DefaultHOC from "./HOC/Default.HOC";
import Movie from "./pages/MoviePage";
import MovieHOC from "./HOC/Movie.HOC";
import Plays from "./pages/Plays.Page";

// Import css files from react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Movies from "./pages/MoviePage";

function App() {
   return (
       <>
       <DefaultHOC path="/" exact component={Homepage}/>
       <MovieHOC path="/movie:id" exact component={Movies}/>
       <DefaultHOC path="/plays" exact component={Plays}/>
       </>
   );
}

export default App;
