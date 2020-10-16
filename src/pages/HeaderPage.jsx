import React from "react";
import MovieListContainer from "../components/MovieList";
import Footer from "../components/Footer";
import HeaderContainer from "../components/Header";

const HeaderPage = () => {
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
export default HeaderPage;
