import React from "react";
import { hot } from "react-hot-loader/root";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "../pages/NotFound";
import MainPage from "../pages/MainPage";

const App = () => {
  return (
    <div className="wrap">
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
};

export default hot(App);
