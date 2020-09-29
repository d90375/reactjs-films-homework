import React from "react";
import HeaderContainer from "../components/Header";
import MovieListContainer from "../components/MovieList";
import Footer from "../components/Footer";

const MainPage = () => {
  return (
    <>
      <HeaderContainer />
      <main className="main">
        <MovieListContainer />
      </main>
      <Footer />
    </>
  );
};

export default MainPage;
