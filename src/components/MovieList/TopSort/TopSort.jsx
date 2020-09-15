import PropTypes from "prop-types";
import React, { useCallback } from "react";
import "./TopSort.scss";
import { useDispatch } from "react-redux";
import {
  fetchPopularData,
  fetchTopRatedData,
  fetchUpcomingData
} from "../../../modules/movieListData/movieListActions";

const TopSort = React.memo(({ genres, onSelectChange }) => {
  const dispatch = useDispatch();

  const onGetTrendingList = useCallback(() => {
    dispatch(fetchPopularData());
  }, [dispatch]);

  const onGetTopRatedList = useCallback(() => {
    dispatch(fetchTopRatedData());
  }, [dispatch]);

  const onGetUpcomingList = useCallback(() => {
    dispatch(fetchUpcomingData());
  }, [dispatch]);

  return (
    <nav className="nav">
      <div className="nav__wrap">
        <div className="nav__title">
          <button onClick={onGetTrendingList} type="button" className="nav__title__text nav__title__text_trending">
            Trending
          </button>
          <button onClick={onGetTopRatedList} type="button" className="nav__title__text nav__title__text_rated">
            Top Rated
          </button>
          <button onClick={onGetUpcomingList} type="button" className="nav__title__text nav__title__text_soon">
            Coming Soon
          </button>
          <select name="genre" className="nav__title__arrow" onChange={onSelectChange}>
            <option value="Genre" hidden>
              Genre
            </option>
            {genres &&
              Object.entries(genres).map(([objKey, genre]) => {
                return (
                  <option key={objKey} value={objKey}>
                    {genre}
                  </option>
                );
              })}
          </select>
        </div>
        <div className="nav__format">
          <div className="format__box4">
            <div className="box4 box4_topLeft" />
            <div className="box4 box4_topRight" />
            <div className="box4 box4_btmLeft" />
            <div className="box4 box4_btmRight" />
          </div>
          <div className="format__box2">
            <div className="box2 box2_top" />
            <div className="box2 box2_btm" />
          </div>
        </div>
      </div>
    </nav>
  );
});

export default TopSort;

TopSort.propTypes = {
  genres: PropTypes.objectOf(PropTypes.string),
  onSelectChange: PropTypes.func.isRequired
};

TopSort.defaultProps = {
  genres: {}
};

TopSort.displayName = "TopSort";
