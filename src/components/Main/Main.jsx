import React from "react";
import Preloader from "./Preloader";
import Card from "./Card";
import TopSort from "./TopSort";
import "./Main.scss";

const CARD_COUNT = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const Main = () => {
  return (
    <div className="main">
      <div className="main__wrap">
        <TopSort />
        <div className="card__wrap">
          {CARD_COUNT.map((card) => (
            <Card key={card.toString()} />
          ))}
        </div>
        <Preloader />
      </div>
    </div>
  );
};

export default Main;
