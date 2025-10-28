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

    toggleBtn.addEventListener('click', () => {
        if (psswordfield.type === 'password') {
            psswordfield.type = 'text';
            toggleBtn.classList.remove('bi-eye');
            toggleBtn.classList.add('bi-eye-slash', 'active');
            toggleBtn.setAttribute('aria-label', 'Ocultar senha');
          }else {
            psswordfield.type = 'password';
            toggleBtn.classList.remove('bi-eye-slash', 'active');
            toggleBtn.classList.add('bi-eye');
            toggleBtn.setAttribute('aria-label', 'Mostrar senha');
          }
    });

    btnsubmit.addEventListener("click", (e) => {
      e.preventDefault();
      const username = form.querySelectorAll("#username");
      const password = form.querySelectorAll("#password");
      let isValid = ValidateInput(username,password)
      if(!isValid){
        modalContainer.showError("Preenche Todos os Campos","Aviso!");
        return;
      }else{
        modalContainer.showLoader();
      }
    })
  }
}
export default LoginPage;
