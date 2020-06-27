import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

const Signature = ({ name }) => {
  return <div className='wrap'><span className='text'>{name}</span></div>;
};

Signature.propTypes = {
  name: PropTypes.string.isRequired
};

export default Signature;
