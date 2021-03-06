import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import NotFound from "../pages/NotFound";
import MainPage from "../pages/MainPage";

import styles from "../scss/main.scss";

const App = () => {
  return (
    <div className={styles.wrap}>
      <Router>
        <Switch>
          <Redirect exact from="/" to="/film/734309?filter=trending" />
          <Route path="/film/:id" component={MainPage} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
