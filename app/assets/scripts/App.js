import "../styles/styles.css";
import "lazysizes";
import MobileMenu from "./modules/MobileMenu.js";
import RevealOnScroll from "./modules/RevealOnScroll.js";
import StickyHeader from "./modules/StickyHeader.js";
// import Modal from "./modules/Modal.js";

// object uusgey
// new Modal();
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
