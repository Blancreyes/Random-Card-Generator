/* eslint-disable */
import "./style.css";

window.onload = () => {
  document.querySelector(".card").classList.add("spade");
  setTimeout(() => {
    document.querySelector(".card").classList.remove("spade");
    document.querySelector(".card").classList.add("heart");
  }, 1000);
};

let generatera;
