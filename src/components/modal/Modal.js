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

    document.body.appendChild(this.modalElement);
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

    document.body.appendChild(this.modalElement);
  }

  showSuccess(message, title = "Sucesso", hideButton = false) {
    if (this.modalElement) this.close();

    this.modalElement = document.createElement("div");
    this.modalElement.className = "modal-overlay";
    this.modalElement.innerHTML = `
      <div class="modal-window">
        <div class="modal-header">
          <i class="bi bi-check-circle-fill"></i>
          <span>${title}</span>
        </div>
        <div class="modal-body">
          <p>${message}</p>
        </div>
        <div class="modal-footer">
          ${hideButton ? "" : "<button class='btn-ok'>OK</button>"}
        </div>
      </div>
    `;

    document.body.appendChild(this.modalElement);
    this.modalElement.querySelector(".btn-ok").addEventListener("click", () => this.close());
    this.modalElement.addEventListener("click", (e) => {
      if (e.target === this.modalElement) this.close();
    });
  }

  hideLoader() {
    this.close();
  }

  close() {
    if (this.modalElement) {
      this.modalElement.remove();
      this.modalElement = null;
    }
  }

  showPasswordModal(onConfirm) {
    if (this.modalElement) this.close();

    this.modalElement = document.createElement("div");
    this.modalElement.className = "modal-overlay";
    this.modalElement.innerHTML = `
      <div class="modal-window" style="max-width: 450px;">
        <div class="modal-header">
          <i class="bi bi-shield-lock-fill"></i>
          <span>Cadastrar Senha</span>
        </div>
        <div class="modal-body">
          <p style="margin-bottom: 15px;">Este administrador não possui senha cadastrada. Por favor, defina uma senha:</p>
          <div class="fields" style="margin-bottom: 15px;">
            <label for="modalNewPassword" style="display: block; margin-bottom: 5px; font-weight: 500;">
              <i class="bi bi-lock"></i> Nova Senha
            </label>
            <input type="password" id="modalNewPassword" placeholder="Digite a senha" style="width: 100%; padding: 8px; border: 1px solid var(--border); border-radius: 4px;" />
          </div>
          <div class="fields">
            <label for="modalConfirmPassword" style="display: block; margin-bottom: 5px; font-weight: 500;">
              <i class="bi bi-lock"></i> Confirmar Senha
            </label>
            <input type="password" id="modalConfirmPassword" placeholder="Confirme a senha" style="width: 100%; padding: 8px; border: 1px solid var(--border); border-radius: 4px;" />
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn-cancel" style="background: #6c757d; color: white; padding: 8px 16px; border: none; border-radius: 4px; cursor: pointer; margin-right: 10px;">Cancelar</button>
          <button class="btn-confirm" style="background: var(--button); color: var(--colorButton); padding: 8px 16px; border: none; border-radius: 4px; cursor: pointer;">Confirmar</button>
        </div>
      </div>
    `;

    document.body.appendChild(this.modalElement);

    this.modalElement.querySelector(".btn-cancel").addEventListener("click", () => this.close());
    this.modalElement.querySelector(".btn-confirm").addEventListener("click", () => {
      const newPassword = this.modalElement.querySelector("#modalNewPassword").value;
      const confirmPassword = this.modalElement.querySelector("#modalConfirmPassword").value;

      if (!newPassword || !confirmPassword) {
        this.close();
        this.showError("Por favor, preencha todos os campos", "Aviso!");
        return;
      }

      if (newPassword !== confirmPassword) {
        this.close();
        this.showError("As senhas não coincidem", "Aviso!");
        return;
      }

      onConfirm({ newPassword, confirmPassword });
    });

    this.modalElement.addEventListener("click", (e) => {
      if (e.target === this.modalElement) this.close();
    });
  }
}
