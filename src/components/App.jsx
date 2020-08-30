import React from "react";
import { hot } from "react-hot-loader/root";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="wrap">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default hot(App);
