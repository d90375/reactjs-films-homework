import PropTypes from "prop-types";
import React from "react";
import useUrlSearch from "../../../../hooks/useURLSearch";

import styles from "./Tab.scss";

const Tab = ({ children, onSelectTab }) => {
  const queryParamFilter = useUrlSearch("filter");
  const tabStyle =
    queryParamFilter === children.replace(/\s/g, "").toLowerCase()
      ? `${styles.titleText} ${styles.active}`
      : styles.titleText;

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
