import React from "react";

import Search from "../components/Search";
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
        <Search />
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
      <a
        onClick={() => console.log("Load More")}
        className="Load-text text-center"
      >
        Load More
      </a>
    </main>
  );
};

export default Main;
