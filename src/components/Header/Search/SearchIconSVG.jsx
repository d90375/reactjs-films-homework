import PropTypes from "prop-types";
import React from "react";

const SearchIconSvg = ({ onClickQuery }) => {
  return (
    <>
      <svg
        onClick={onClickQuery}
        className="search__icon"
        xmlns="http://www.w3.org/2000/svg"
        width="1rem"
        height="1rem"
        viewBox="0 0 28 28"
      >
        <g>
          <g>
            <path
              fill="#fff"
              d="M26.3 28l-8.253-8.27a11.037 11.037 0 0 1-6.964 2.466C4.965 22.196 0 17.223 0 11.098 0 4.973 4.958 0 11.083 0c6.118 0 11.084 4.965 11.084 11.098 0 2.625-.912 5.038-2.429 6.934L28 26.3zm-15.217-7.796c2.427 0 4.714-.95 6.432-2.668a9.069 9.069 0 0 0 2.66-6.438 9.04 9.04 0 0 0-2.66-6.439 9.043 9.043 0 0 0-6.432-2.667c-2.427 0-4.72.956-6.432 2.674a9.07 9.07 0 0 0-2.66 6.438c0 2.434.942 4.72 2.66 6.439a9.01 9.01 0 0 0 6.432 2.66z"
            />
          </g>
        </g>
      </svg>
    </>
  );
};

export default SearchIconSvg;

SearchIconSvg.propTypes = {
  onClickQuery: PropTypes.func.isRequired
};
