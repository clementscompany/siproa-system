import Login from "../../components/wellcome/login.js"
import { Modal } from "../../components/modal/Modal.js";
import { ValidateInput } from "../../utils/ValidateInput.js";

class LoginPage {
  constructor(mainContainer) {
    this.mainContainer = mainContainer;
    this.Init(mainContainer);
  }

  Init(mainContainer) {
    mainContainer.innerHTML = Login();
    this.loadmodal(mainContainer);
  }

  loadmodal(mainContainer) {
    mainContainer.querySelector(".login-page")
    const form = mainContainer.querySelector(".form-login")
    const toggleBtn = mainContainer.querySelector('#togglePassword');
    const psswordfield = mainContainer.querySelector('#password');
    const btnsubmit = mainContainer.querySelector(".btnlogin");
    const modalContainer = new Modal(mainContainer);

    // Toggle de senha do login principal
    toggleBtn.addEventListener('click', () => {
      if (psswordfield.type === 'password') {
        psswordfield.type = 'text';
        toggleBtn.classList.remove('bi-eye');
        toggleBtn.classList.add('bi-eye-slash', 'active');
        toggleBtn.setAttribute('aria-label', 'Ocultar senha');
      } else {
        psswordfield.type = 'password';
        toggleBtn.classList.remove('bi-eye-slash', 'active');
        toggleBtn.classList.add('bi-eye');
        toggleBtn.setAttribute('aria-label', 'Mostrar senha');
      }
    });

    // Botão de submit do login principal
    btnsubmit.addEventListener("click", (e) => {
      e.preventDefault();
      const username = form.querySelectorAll("#username");
      const password = form.querySelectorAll("#password");
      let isValid = ValidateInput(username, password)
      if (!isValid) {
        modalContainer.showError("Preenche Todos os Campos", "Aviso!");
        return;
      } else {
        modalContainer.showLoader();
      }
    });

    // Funcionalidade da Sidebar de Admin
    const adminSidebar = mainContainer.querySelector('#adminSidebar');
    const adminSidebarOverlay = mainContainer.querySelector('#adminSidebarOverlay');
    const openAdminLoginBtn = mainContainer.querySelector('#openAdminLogin');
    const closeAdminSidebarBtn = mainContainer.querySelector('#closeAdminSidebar');
    const toggleAdminPasswordBtn = mainContainer.querySelector('#toggleAdminPassword');
    const adminPasswordField = mainContainer.querySelector('#adminPassword');
    const adminLoginForm = mainContainer.querySelector('#adminLoginForm');

    // Abrir sidebar de admin
    openAdminLoginBtn.addEventListener('click', () => {
      adminSidebar.classList.add('active');
      adminSidebarOverlay.classList.add('active');
    });

    // Fechar sidebar de admin
    const closeAdminSidebar = () => {
      adminSidebar.classList.remove('active');
      adminSidebarOverlay.classList.remove('active');
    };

    closeAdminSidebarBtn.addEventListener('click', closeAdminSidebar);
    adminSidebarOverlay.addEventListener('click', closeAdminSidebar);

    // Toggle de senha do admin
    if (toggleAdminPasswordBtn && adminPasswordField) {
      toggleAdminPasswordBtn.addEventListener('click', () => {
        if (adminPasswordField.type === 'password') {
          adminPasswordField.type = 'text';
          toggleAdminPasswordBtn.classList.remove('bi-eye');
          toggleAdminPasswordBtn.classList.add('bi-eye-slash', 'active');
          toggleAdminPasswordBtn.setAttribute('aria-label', 'Ocultar senha');
        } else {
          adminPasswordField.type = 'password';
          toggleAdminPasswordBtn.classList.remove('bi-eye-slash', 'active');
          toggleAdminPasswordBtn.classList.add('bi-eye');
          toggleAdminPasswordBtn.setAttribute('aria-label', 'Mostrar senha');
        }
      });
    }

    // Botão de submit do login admin
    const adminLoginBtn = adminLoginForm.querySelector('.btnlogin');
    if (adminLoginBtn) {
      adminLoginBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const adminUsername = mainContainer.querySelector('#adminUsername');
        const adminPassword = mainContainer.querySelector('#adminPassword');

        if (!adminUsername.value || !adminPassword.value) {
          modalContainer.showError("Preenche Todos os Campos", "Aviso!");
          return;
        } else {
          modalContainer.showLoader();
          // Aqui você pode adicionar a lógica de autenticação do admin
        }
      });
    }
  }
}
export default LoginPage;

