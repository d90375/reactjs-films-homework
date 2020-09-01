import React from "react";
import { hot } from "react-hot-loader/root";
import Footer from "./Footer";
import MovieList from "../containers/MovieList";
import "./App.scss";
import TopScreenContainer from "../containers/TopScreen";

const App = () => {
  return (
    <div className="wrap">
      <TopScreenContainer />
      <div className="main">
        <div className="main__wrap">
          <MovieList />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default hot(App);
