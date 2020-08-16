import React from "react";
import "./Notation.scss";

const Notation = () => {
  return (
    <div className="notation">
      <div className="notation__wrap">
        <span className="notation__text">
          There are growing dangers in the wizarding world of 1926 New York. Something mysterious is leaving a path of destruction in the streets, threatening to expose the wizarding community to the Second Salemers, a fanatical faction of
          No-Majs (American for Muggles) bent on eradicating them. And the powerful, dark wizard Gellert Grindelwald, after wreaking havoc in Europe, has slipped away…and is now nowhere to be found.{" "}
        </span>
      </div>
      <div className="notation__btn">
        <div className="btn btn__watch">
          <span className="btn__watch__text">Watch Now</span>
        </div>
        <div className="btn btn__view">
          <span className="btn__view__text">View Info</span>
        </div>
      </div>
    </div>
  );
};

export default Notation;
