import Login from "../../components/wellcome/login.js"

class LoginPage {
  constructor(mainContainer) {
    this.mainContainer = mainContainer;
    this.Init(mainContainer);
  }

  Init(mainContainer) {
    mainContainer.innerHTML = Login();
  }
  
}
export default LoginPage;
