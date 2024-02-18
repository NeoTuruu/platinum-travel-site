import "../styles/styles.css";
import "lazysizes";
import MobileMenu from "./modules/MobileMenu.js";
import RevealOnScroll from "./modules/RevealOnScroll.js";
import StickyHeader from "./modules/StickyHeader.js";
import ClientArea from "./modules/ClientArea.js";
// import Modal from "./modules/Modal.js";

// end reat-tai holbootoi code bn
import React from "react";
import ReactDom from "react-dom";
// uursdiin bichij ugsun react component-g import hiih
import MyReactComponent from "./modules/MyReactComponent.js";

ReactDom.render(
  <MyReactComponent />,
  document.querySelector("#my-react-example")
);
// object uusgey
// new Modal();

new ClientArea();
new StickyHeader();
new RevealOnScroll(document.querySelectorAll(".feature-item"), 75);
new RevealOnScroll(document.querySelectorAll(".testimonial"), 50);
new MobileMenu();
let modal;

document.querySelectorAll(".open-modal").forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    if (typeof modal == "undefined") {
      import(/*webpackChunkName: "modal" */ "./modules/Modal")
        .then((x) => {
          modal = new x.default();
          setTimeout(() => modal.openModal(), 20);
        })
        .catch(() => console.log("Файлыг дуудахад алдаа гарлаа"));
    } else {
      modal.openModal();
    }
  });
});
// webpack-g maani watch hiij bga code
if (module.hot) {
  module.hot.accept();
}
