class Modal {
  constructor() {
    this.injectHTML();
    this.modal = document.querySelector(".modal");
    // this.openModalButtons = document.querySelectorAll(".open-modal");
    this.closeIcon = document.querySelector(".modal__close");
    this.events();
  }

  events() {
    // Neeh tovchluur daragdsan esehiig ajiglah
    // this.openModalButtons.forEach((el) =>
    //   el.addEventListener("click", (e) => this.openModal(e))
    // );
    // Haah tovchluur daragdsan esehiig ajiglah
    this.closeIcon.addEventListener("click", () => this.closeModal());
    // Keyboard-s yamar negen  tovchluur daragdsan esehiig shalgah
    document.addEventListener("keyup", (e) => this.keyPressHandler(e));
  }

  keyPressHandler(e) {
    if (e.keyCode == 27) {
      this.closeModal();
    }
  }
  openModal() {
    this.modal.classList.add("modal--is-visible");
  }
  //   openModal(e) {
  //     e.preventDefault();
  //     this.modal.classList.add("modal--is-visible");
  //   }
  closeModal() {
    this.modal.classList.remove("modal--is-visible");
  }
  injectHTML() {
    document.body.insertAdjacentHTML(
      "beforeend",
      `
    <div class="modal">
      <div class="modal__inner">
        <h2 class="section-title section-title--blue section-title--less-margin"><img src="assets/images/icons/mail.svg" class="section-title__icon"> Хамт <strong>Аялах</strong></h2>
        <div class="wrapper wrapper--narrow">
          <p class="modal__description">Бид тун удахгүй онлайнаар захиалга өгөх системийг нээх бөгөөд, та одоогоор доорхи сошиал платформуудаар дамжиуулж бидэнтэй холбогдох боломжтой!</p>
        </div>
  
        <div class="social-icons">
          <a href="#" class="social-icons__icon"><img src="assets/images/icons/facebook.svg" alt="Facebook"></a>
          <a href="#" class="social-icons__icon"><img src="assets/images/icons/twitter.svg" alt="Twitter"></a>
          <a href="#" class="social-icons__icon"><img src="assets/images/icons/instagram.svg" alt="Instagram"></a>
          <a href="#" class="social-icons__icon"><img src="assets/images/icons/youtube.svg" alt="YouTube"></a>
        </div>
      </div>
      <div class="modal__close">X</div>
    </div>
    `
    );
  }
}
export default Modal;
