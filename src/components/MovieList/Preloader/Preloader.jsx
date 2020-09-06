import React from "react";
import "./Preloader.scss";

const Preloader = () => {
  return (
    <div className="preloader">
      <div className="preloader__picture">
        <div className="preloader__child preloader__bounce-1" />
        <div className="preloader__child preloader__bounce-2" />
        <div className="preloader__child preloader__bounce-3" />
      </div>
      <div className="preloader__text">LOADING</div>
    </div>
  );
};

export default Preloader;
