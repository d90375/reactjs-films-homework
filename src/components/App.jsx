import React from "react";
import { hot } from "react-hot-loader/root";
import Footer from "./Footer";
import MovieListContainer from "./MovieList";
import HeaderContainer from "./Header";

const App = () => {
  return (
    <div className="wrap">
      <HeaderContainer />
      <main className="main">
        <MovieListContainer />
      </main>
      <Footer />
    </div>
  );
};

export default hot(App);
