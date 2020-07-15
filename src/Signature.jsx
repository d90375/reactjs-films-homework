import { hot } from "react-hot-loader/root";
import React from "react";
import PropTypes from "prop-types";

const Signature = ({ name }) => {
  return (
    <div className="wrap">
      <span className="text">
        {name}
        <div />
        {Math.random()}
      </span>
    </div>
  );
};

Signature.propTypes = {
  name: PropTypes.string.isRequired
};

export default hot(Signature);
