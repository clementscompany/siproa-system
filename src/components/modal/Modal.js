export class Modal {
  constructor(mainContainer) {
    this.mainContainer = mainContainer;
    this.modalElement = null;
  }

  showError(message, title = "Atenção") {
    if (this.modalElement) this.close();

    this.modalElement = document.createElement("div");
    this.modalElement.className = "modal-overlay";
    this.modalElement.innerHTML = `
      <div class="modal-window">
        <div class="modal-header">
          <i class="bi bi-exclamation-triangle-fill"></i>
          <span>${title}</span>
        </div>
        <div class="modal-body">
          <p>${message}</p>
        </div>
        <div class="modal-footer">
          <button class="btn-ok">OK</button>
        </div>
      </div>
    `;

    this.mainContainer.appendChild(this.modalElement);
    this.modalElement.querySelector(".btn-ok").addEventListener("click", () => this.close());
    this.modalElement.addEventListener("click", (e) => {
      if (e.target === this.modalElement) this.close();
    });
  }

  showLoader() {
    if (this.modalElement) this.close();

    this.modalElement = document.createElement("div");
    this.modalElement.className = "modal-overlay";
    this.modalElement.innerHTML = `
      <div class="modal-window loader-window">
        <div class="loader-circle"></div>
        <p class="loader-text">Carregando...</p>
      </div>
    `;

    this.mainContainer.appendChild(this.modalElement);
  }

  close() {
    if (this.modalElement) {
      this.modalElement.remove();
      this.modalElement = null;
    }
  }
}
