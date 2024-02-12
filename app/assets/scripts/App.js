import "../styles/styles.css";
// const MobileMenu = require("./module/MobileMenu.js");
import MobileMenu from "./module/MobileMenu.js";
// object uusgey
let mobileMenu = new mobileMenu();
// webpack-g maani watch hiij bga code
if (module.hot) {
  module.hot.accept();
}
