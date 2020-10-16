import PropTypes from "prop-types";
import React from "react";
import "./Tab.scss";
import useUrlSearch from "../../../../hooks/useURLSearch";

const Tab = ({ children, onSelectTab }) => {
  const queryParamFilter = useUrlSearch("filter");
  const tabStyle =
    queryParamFilter === children.replace(/\s/g, "").toLowerCase()
      ? `nav__title__text nav__active`
      : `nav__title__text`;

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
  onSelectTab: PropTypes.func
};

Tab.defaultProps = {
  onSelectTab: () => {}
};
