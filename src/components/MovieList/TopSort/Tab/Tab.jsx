import PropTypes from "prop-types";
import React from "react";
import "./Tab.scss";

const Tab = ({ children, onSelectTab }) => {
  return (
    <>
      <button type="button" onClick={onSelectTab} className="nav__title__text">
        {children}
      </button>
    </>
  );
};

export default Tab;

Tab.propTypes = {
  onSelectTab: PropTypes.func
};

Tab.defaultProps = {
  onSelectTab: () => {}
};
