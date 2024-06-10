class Modal {
  constructor() {
    this._modal = document.querySelector("#modal");
    this._modalBtn = document.querySelector("#modal-btn");
    this.eventListeners();
  }

  eventListeners() {
    this._modalBtn.addEventListener("click", this.openModal.bind(this));
    window.addEventListener("click", this.outsideClick.bind(this));
    document.addEventListener("closemodal", () => this.closeModal()); //a custom event listener dispatched to the Modal component from the IdeaForm component by the dispatchEvent method
  }

  openModal() {
    this._modal.style.display = "block";
  }

  closeModal() {
    this._modal.style.display = "none";
  }

  outsideClick(e) {
    if (e.target === this._modal) {
      this.closeModal();
    }
  }
}

export default Modal;
