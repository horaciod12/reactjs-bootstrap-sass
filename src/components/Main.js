import React from "react";

import Card from "../components/Card";
import cardImg from "../assets/imgs/card.png";
import avatarImg from "../assets/imgs/avatar.png";

const CARDS_DUMMY = [
  {
    mainImg: cardImg,
    avatar: avatarImg,
    text1: "Sam Jerremy",
    text2: "#dayAtTheBeach",
  },
  {
    mainImg: cardImg,
    avatar: avatarImg,
    text1: "Sam Jerremy",
    text2: "#dayAtTheBeach",
  },
  {
    mainImg: cardImg,
    avatar: avatarImg,
    text1: "Sam Jerremy",
    text2: "#dayAtTheBeach",
  },
  {
    mainImg: cardImg,
    avatar: avatarImg,
    text1: "Sam Jerremy",
    text2: "#dayAtTheBeach",
  },
  {
    mainImg: cardImg,
    avatar: avatarImg,
    text1: "Sam Jerremy",
    text2: "#dayAtTheBeach",
  },
  {
    mainImg: cardImg,
    avatar: avatarImg,
    text1: "Sam Jerremy",
    text2: "#dayAtTheBeach",
  },
];

const Main = () => {
  return (
    <main className="container">
      <div className="d-flex align-items-center justify-content-end mt-4">
        <div className="Search-text">Search by #</div>
        <div className="Container-input form-group">
          <input className="form-control" disabled />
        </div>
      </div>
      <div className="mt-4">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
          {CARDS_DUMMY.map((card, index) => (
            <div className="col" key={index}>
              <Card
                mainImg={card.mainImg}
                avatar={card.avatar}
                text1={card.text1}
                text2={card.text2}
              />
            </div>
          ))}
        </div>
      </div>
      <p className="Load-text text-center">Load More</p>
    </main>
  );
};

export default Main;
