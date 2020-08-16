import React from "react";
import "./Star.scss";

const Star = () => {
  return (
    <div className="star">
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
        <g>
          <g>
            <path fill="#0aaee4" d="M36 13.5H22.22L18.002 0l-4.22 13.5H0l11.165 8.374L6.75 36 18 27l11.25 9-4.414-14.127z" />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default Star;
