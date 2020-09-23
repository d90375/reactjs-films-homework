import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./scss/main.scss";
import withReduxFeatures from "./modules/store";

const WrappedApp = withReduxFeatures(App);

ReactDOM.render(<WrappedApp />, document.getElementById("root"));
