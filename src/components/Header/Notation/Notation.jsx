import React from "react";
import "./Notation.scss";

const Notation = () => {
  return (
    <div className="notation">
      <div className="notation__wrap">
        <span className="notation__text">
          There are growing dangers in the wizarding world of 1926 New York. Something mysterious is leaving a path of
          destruction in the streets, threatening to expose the wizarding community to the Second Salemers, a fanatical
          faction of No-Majs (American for Muggles) bent on eradicating them. And the powerful, dark wizard Gellert
          Grindelwald, after wreaking havoc in Europe, has slipped away…and is now nowhere to be found.{" "}
        </span>
      </div>
      <div className="notation__btn">
        <button type="button" className="btn btn__watch">
          Watch Now
        </button>
        <button type="button" className="btn btn__view">
          View Info
        </button>
      </div>
    </div>
  );
};

export default Notation;
