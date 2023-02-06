import React from "react";
import MovieCard from "../components/MovieCard";
import movies from "../components/movies";

const MovieList = ({ search }) => {
  return (
    <div className="movies-list">
      {movies
        .filter((mov) =>
          mov.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        )
        .map((mov,i) => (
          <MovieCard key={i} movie={mov} />
        ))}
    </div>
  );
};

export default MovieList;
