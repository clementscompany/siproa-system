import Login from "../../components/wellcome/login.js"
import { Modal } from "../../components/modal/Modal.js";
import { ValidateInput } from "../../utils/ValidateInput.js";
import { Api } from "../../api/Api.js";
import { AppUrl } from "../../config/env/env.js";
import { Navigate } from "../../Routes.js";

class LoginPage {
  constructor(mainContainer) {
    this.mainContainer = mainContainer;
    this.api = new Api(AppUrl.server);
    this.Init(mainContainer);
  }

  async Init(mainContainer) {
    mainContainer.innerHTML = Login();
    await this.loadAdmins();
    this.loadmodal(mainContainer);
  }

  async loadAdmins() {
    try {
      const response = await this.api.get("/admins");
      if (response.success && response.data) {
        const adminSelect = this.mainContainer.querySelector('#adminUsername');
        if (adminSelect) {
          adminSelect.innerHTML = '<option value="">Selecione um admin</option>';
          response.data.forEach(admin => {
            const option = document.createElement('option');
            option.value = admin.username;
            option.textContent = admin.nome || admin.username;
            adminSelect.appendChild(option);
          });
        }
      }
    } catch (error) {
      console.error("Erro ao carregar admins:", error);
    }
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
      }

      modalContainer.showLoader();
      
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
      adminLoginBtn.addEventListener('click', async (e) => {
        e.preventDefault();
        const adminUsername = mainContainer.querySelector('#adminUsername');
        const adminPassword = mainContainer.querySelector('#adminPassword');

        if (!adminUsername.value || !adminPassword.value) {
          modalContainer.showError("Preenche Todos os Campos", "Aviso!");
          return;
        }

        modalContainer.showLoader();

        try {
          // Verifica se o admin tem senha cadastrada
          const checkResult = await this.api.post("/login/check-password", { username: adminUsername.value });

          if (!checkResult.hasPassword) {
            modalContainer.hideLoader();
            // Mostra modal para criar senha
            modalContainer.showPasswordModal(async ({ newPassword, confirmPassword }) => {
              modalContainer.showLoader();
              try {
                const createResult = await this.api.post("/login/create-password", {
                  username: adminUsername.value,
                  senha: newPassword,
                  senhaConfirmacao: confirmPassword
                });

                modalContainer.hideLoader();

                if (createResult.success) {
                  modalContainer.showSuccess("Senha cadastrada com sucesso!", "Sucesso!");
                  adminPasswordField.value = newPassword;
                } else {
                  modalContainer.showError(createResult.message || "Erro ao cadastrar senha", "Erro!");
                }
              } catch (error) {
                modalContainer.hideLoader();
                modalContainer.showError("Erro ao cadastrar senha", "Erro!");
              }
            });
            return;
          }

          // Se tem senha, faz login
          const loginResult = await this.api.post("/login", {
            username: adminUsername.value,
            senha: adminPassword.value
          });

          modalContainer.hideLoader();

          if (loginResult.success) {
            // Salvar sessão do usuário
            sessionStorage.setItem('user', JSON.stringify({
              id: loginResult.data.id,
              username: loginResult.data.username,
              nome: loginResult.data.nome,
              perfil: loginResult.data.perfil,
              loginTime: new Date().toISOString()
            }));

            modalContainer.showSuccess(`Login realizado com sucesso! Bem-vindo, ${loginResult.data.nome}!`, "Sucesso!");

            // Redirecionar para home após 1 segundo
            setTimeout(() => {
              Navigate("/home");
            }, 1000);
          } else {
            modalContainer.showError(loginResult.message || "Credenciais inválidas", "Erro!");
          }
        } catch (error) {
          modalContainer.hideLoader();
          modalContainer.showError("Erro ao realizar login", "Erro!");
          console.error("Login error:", error);
        }
      });
    }
  }
}
export default LoginPage;

