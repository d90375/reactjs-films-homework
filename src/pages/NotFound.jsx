import React from "react";
import { useLocation, useRouteMatch } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();
  const rm = useRouteMatch();
  console.log(location)
  console.log(rm)
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "50vh" }}>
      <h3 style={{ color: "#000" }}>
        404 Not Found, No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
};

export default NotFound;
