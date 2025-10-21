import WellCome from "./pages/WellCome/WellCome.page.js";
import LoginPage from "./pages/loginPage/LoginPage.js";
import CadastroImportadores from "./pages/cadImportadores/cad_Importadores.js";
export function Route() {
  const mainContainer = document.getElementById("mainContainer");
  const path = window.location.hash.substring(1);
  switch (path) {
    case "/wellcome":
      new WellCome(mainContainer);
      break;

    case "/":
      alert("Bem-vindo à Gestão Aduaneira!");
      break;

    case "/home":

      break;

    case "/login":
      new LoginPage(mainContainer)
      break;

    case "/cadastro_importadores":
      new CadastroImportadores(mainContainer);
      break;

    case "/vendas":
      Vendas(mainContainer)
      break;
    default:

      break;
  }
}

export function Navigate(path) {
  window.location.hash = path;
}
