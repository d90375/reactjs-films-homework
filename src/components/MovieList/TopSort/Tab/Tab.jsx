import PropTypes from "prop-types";
import React from "react";
import "./Tab.scss";

const Tab = ({ children, onSelectTab, selectedTab }) => {
  const tabStyle = selectedTab === children ? `nav__title__text nav__active` : `nav__title__text`;

  return (
    <>
      <button type="button" onClick={onSelectTab} className={tabStyle}>
        {children}
      </button>
    </>
  );
};

export default Tab;

Tab.propTypes = {
  selectedTab: PropTypes.string,
  onSelectTab: PropTypes.func
};

Tab.defaultProps = {
  selectedTab: "",
  onSelectTab: () => {}
};
