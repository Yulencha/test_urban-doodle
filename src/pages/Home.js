import React from "react";
import GameLevel from "../components/gameLevel/GameLevel";
import { gameLevelList } from "../helpers/GameLevelList";
import pageBackground from "../img/background2.svg";

const Home = () => {
  return (
    <div className="page">
      <div className="page__background">
        <img src={pageBackground} alt="" />
      </div>
      <div className="page__title">Описание игры</div>
      <div className="page__game-levels">
        {gameLevelList.map((item, index) => {
          return (
            <GameLevel
              key={index}
              price={item.price}
              img={item.img}
              title={item.title}
              description={item.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;