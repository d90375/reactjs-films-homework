import PropTypes from "prop-types";
import React from "react";
import styles from "./buttonWatchNow.scss";

const ButtonWatchNow = ({ handleShowTrailer }) => {
  return (
    <>
      <button onClick={handleShowTrailer} type="button" className={`${styles.btn} ${styles.watchBtn}`}>
        Watch Now
      </button>
    </>
  );
};

export default ButtonWatchNow;

ButtonWatchNow.propTypes = {
  handleShowTrailer: PropTypes.func.isRequired
};
