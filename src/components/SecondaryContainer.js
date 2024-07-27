import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  const nowPlayingMovies = movies?.nowPlayingMovies || [];
  const topRatedMovies = movies?.topRatedMovies || [];
  const upcomingMovies = movies?.upcomingMovies || [];
  const popularMovies = movies?.popularMovies || [];

  return (
      <div className="bg-black">
        <div className="-mt-60 pl-16 z-10 relative">
          <MovieList title={"Now Playing"} movies={nowPlayingMovies} />
          <MovieList title={"Top Rated"} movies={topRatedMovies} />
          <MovieList title={"Upcoming"} movies={upcomingMovies} />
          <MovieList title={"Popular"} movies={popularMovies} />
        </div>
      </div>
  );
};

export default SecondaryContainer;
