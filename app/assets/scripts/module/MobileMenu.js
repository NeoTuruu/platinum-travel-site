// constructor uusgej ugch bn
class MobileMenu {
  constructor() {
    this.menuIcon = document.querySelector(".site-header__menu-icon");
    this.menuContent = document.querySelector(".site-header__menu-content");
    this.siteHeader = document.querySelector(".site-header");
    this.events();
  }
  //   icon deer click uildel hiigdehiig zaaj ugch bn
  events() {
    this.menuIcon.addEventListener("click", () => this.toggleTheMenu());
  }
  //   tsesiig darahad ajillah function-g bichne
  toggleTheMenu() {
    this.menuContent.classList.toggle("site-header__menu-content--is-visible");
    this.siteHeader.classList.toggle("site-header--is-expanded");
    this.menuIcon.classList.toggle("site-header__menu-icon--close-x");
  }
}
export default MobileMenu;
