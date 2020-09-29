import React from "react";
import { useLocation } from "react-router-dom";

const Tab = ({ children, onSelectTab }) => {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <>
      <button type="button" onClick={onSelectTab} className="nav__title__text">
        {children}
      </button>
    </>
  );
};

export default Tab;
