import axios from "axios";
import React from "react";



import Homepage from "./pages/Home.page";
import DefaultHOC from "./HOC/Default.HOC";
import Movie from "./pages/MoviePage";
import MovieHOC from "./HOC/Movie.HOC";
import Plays from "./pages/Plays.Page";

// Import css files from react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Movies from "./pages/MoviePage";

// axios default settings
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;

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
