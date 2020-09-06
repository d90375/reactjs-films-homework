import React from "react";
import "./HiddenWindow.scss";

const HiddenWindow = () => {
  return (
    <div className="hiddenWindow">
      <button className="hiddenWindow__playBtn" type="button">
        ►
      </button>
      <span className="hiddenWindow__signature">Watch Now</span>
      <button className="hiddenWindow__infoBtn" type="button">
        View Info
      </button>
    </div>
  );
};

export default HiddenWindow;
