import React, { useEffect, useState } from "react";
import categories, { getMovies } from "../../api";
import "./Banner.css";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  const fetchRandomMovie = async () => {
    try {
      const netflixOriginalsCategory = categories.find(
        (category) => category.name === "netflixOriginals"
      );
      const data = await getMovies(netflixOriginalsCategory.path);
      const movies = data?.results;
      const randomIndex = Math.floor(Math.random() * movies.length);
      setMovie(movies[randomIndex]);
    } catch (error) {
      console.log("Banner fetchRandomMovie error", error);
    }
  };

  useEffect(() => {
    fetchRandomMovie();
    console.log(movie);
  }, []);

  return (
    <header
      className="banner-container"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        roundPosition: "center-center",
      }}
    >
      <div className="banner-content">
        <h1 className="banner-title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner-button-container">
          <div className="banner-button">Assistir</div>
          <div className="banner-button">Minha Lista</div>
        </div>

        <div className="banner-description"></div>
      </div>
    </header>
  );
};

export default Banner;
