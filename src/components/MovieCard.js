import React, { useState } from "react";
import { Link } from "react-router-dom";
import MovieSpecial from "../page/MovieSpecial";

const MovieCard = ({ movie }) => {
  
  return (
    
    <div  className="Movie-Card">
    <Link to={`/Trailer`}  style={{ textDecoration: 'none' }}state={movie}> <img src={movie.posterurl} alt="" /></Link>
    <Link to={`/description`} style={{ textDecoration: 'none'}} state={movie}>
       <h1>{movie.name} </h1>
      <h3>{movie.rating}</h3>
      </Link>
    </div>
   
  );
};

export default MovieCard;
