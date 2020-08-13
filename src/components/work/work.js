import React from "react";
import shoopingCart from "../project/shopping-cart.png";
import cal from "../project/calculator.png";
import chat from "../project/chat.png";
import covid from "../project/covid.png";
import ticTacToe from "../project/tic-tac-toe.png";
import "./work.css";

const work = () => {
  return (
    <div className="container workContainer">
      <div className="row">
        <div
          className="col-md-4 imageDiv"
          onClick={() => {
            window.open(
              "https://github.com/alok-shete/shopping-cart",
              "_blank"
            );
          }}
        >
          <img src={shoopingCart} className="img-fluid" alt="" />
          <div className="overlay"></div>
          <div className="workText">Shopping Cart</div>
        </div>
        <div
          className="col-md-4 imageDiv"
          onClick={() => {
            window.open("https://github.com/alok-shete/chat-box", "_blank");
          }}
        >
          <img src={chat} className="img-fluid" alt="" />
          <div className="overlay"></div>
          <div className="workText">Chat App</div>
        </div>
        <div
          className="col-md-4 imageDiv"
          onClick={() => {
            window.open("https://github.com/alok-shete/calculator", "_blank");
          }}
        >
          <img src={cal} className="img-fluid" alt="" />
          <div className="overlay"></div>
          <div className="workText">Calculator</div>
        </div>
      </div>
      <div className="row">
        <div
          className="col-md-4 imageDiv"
          onClick={() => {
            window.open("https://github.com/alok-shete/tic-tac-toe", "_blank");
          }}
        >
          <img src={ticTacToe} className="img-fluid" alt="" />
          <div className="overlay"></div>
          <div className="workText">Tic Tac Toe Game</div>
        </div>
        <div
          className="col-md-4 imageDiv"
          onClick={() => {
            window.open("https://github.com/alok-shete/covid-19", "_blank");
          }}
        >
          <img src={covid} className="img-fluid" alt="" />
          <div className="overlay"></div>
          <div className="workText">Covid19 Tracker</div>
        </div>
        <div className="col-md-4 imageDiv">
          <img
            src="https://www.hdwallpapers.in/thumbs/2020/hoodie_boy_with_powers_4k_hd-t2.jpg"
            className="img-fluid"
            alt=""
          />
          <div className="overlay"></div>
          <div className="workText">Wemedia Platform</div>
        </div>
      </div>
    </div>
  );
};

export default work;
