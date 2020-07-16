import React from "react";
import { hot } from "react-hot-loader/root";
import Header from "./Header/Header";

const App = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default hot(App);
