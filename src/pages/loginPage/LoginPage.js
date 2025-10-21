import Login from "../../components/wellcome/login.js"

class LoginPage {
  constructor(mainContainer) {
    this.mainContainer = mainContainer;
    this.Init(mainContainer);
  }

  Init(mainContainer) {
    mainContainer.innerHTML = Login();
    this.loadmodal();
  }

  loadmodal(mainContainer) {
    const form = this.mainContainer.querySelector(".form-login");
    const psswordfield = this.mainContainer.querySelector(".form-login .fields input[type='password']");
    const tooglebtn = this.mainContainer.querySelector(".form-login .fields i");
    const poperror = this.mainContainer.querySelector("#popup-erro");
    const mensageErro = this.mainContainer.querySelector("#mensagem-erro");
    const popsucesso = this.mainContainer.querySelector("#popup-sucesso");
    const mensageSucess = this.mainContainer.querySelector("#mensagem-erro")
    const fecharModalerror = this.mainContainer.querySelector("#fecharerro");
    const btnsubmit = form.querySelector(".botao");

    tooglebtn.onclick = ()=>{
      if(psswordfield.type === "password"){
        psswordfield.type = "text";
        tooglebtn.classList.add('active')
      }else{
        psswordfield.type = "password";
        tooglebtn.classList.remove('active');
      }
    }

    fecharModalerror.addEventListener("click",()=>{
      poperror.style.display = "none";
    })

    btnsubmit.addEventListener("click", (e) => {
      e.preventDefault();
      const username = form.querySelector("#username");
      const password = form.querySelector("#password");
      if(username || password){
        mensageErro.textContent = "Preenche Todos os Campos!";
        poperror.style.display = "flex";
      }
    })
  }
}
export default LoginPage;
