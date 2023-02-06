import React from "react";
import { useLocation } from "react-router-dom";

const MovieSpecial = () => {
  const loction=useLocation()
  const movie=loction.state
  return (
    <div className="movie-special">
      <h1>{movie.name}</h1>
      <h4>{movie.description}</h4>
      
      </div>
    
  );
};

export default MovieSpecial;
