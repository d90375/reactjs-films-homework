import React from "react";
import PropTypes from "prop-types";
import Search from "./Search";
import Description from "./Description";
import Notation from "./Notation";
import { IMAGE_NOT_FOUND_URL } from "../../constants";

import "./Header.scss";

const Header = ({ headData, genres, runtime }) => {
  const { title, id } = headData;
  const voteAverage = headData.vote_average;
  const poster = headData.backdrop_path
    ? `url("https://image.tmdb.org/t/p/w1280${headData.backdrop_path}")`
    : IMAGE_NOT_FOUND_URL;
  const backGroundHeaderStyle = {
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top",
    backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.9) 2%, rgba(0, 0, 0, 0.2) 33%), ${poster}`,
    backgroundSize: "cover"
  };
  return (
    <header className="header" style={backGroundHeaderStyle}>
      <div className="header__topWrap">
        <h1 className="logo">FILMS</h1>
        <Search />
      </div>
      <div className="header__btmWrap">
        <Description title={title} genres={genres} runtime={runtime} voteAverage={voteAverage} />
        <Notation movieId={id} />
      </div>
    </header>
  );
};

export default Header;

Header.propTypes = {
  genres: PropTypes.string,
  headData: PropTypes.shape({
    adult: PropTypes.bool,
    backdrop_path: PropTypes.string,
    budget: PropTypes.number,
    genres: PropTypes.arrayOf(PropTypes.object),
    homepage: PropTypes.string,
    id: PropTypes.number,
    imdb_id: PropTypes.string,
    original_language: PropTypes.string,
    original_title: PropTypes.string,
    overview: PropTypes.string,
    popularity: PropTypes.number,
    poster_path: PropTypes.string,
    production_companies: PropTypes.arrayOf(PropTypes.object),
    production_countries: PropTypes.arrayOf(PropTypes.object),
    release_date: PropTypes.string,
    revenue: PropTypes.number,
    spoken_languages: PropTypes.arrayOf(PropTypes.object),
    status: PropTypes.string,
    tagline: PropTypes.string,
    title: PropTypes.string,
    video: PropTypes.bool,
    vote_average: PropTypes.number,
    vote_count: PropTypes.number
  }).isRequired,
  runtime: PropTypes.arrayOf(PropTypes.number)
};

Header.defaultProps = {
  genres: "",
  runtime: [0, 0]
};
