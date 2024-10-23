import WellCome from "./pages/WellCome/WellCome.page.js";
import LoginPage from "./pages/loginPage/LoginPage.js";
import Importadores from "./pages/importadores/Importadores.js";
import ListaDeImportadores from "./pages/listaImportadorees/ListaImportadores.js";
import Exportadores from "./pages/exportadores/Exportadores.js";
import Listaexportadores from "./pages/listaExportadores/ListaExportadores.js";
import ListaDeExportadores from "./pages/listaExportadores/ListaExportadores.js";

export function Route() {
  const mainContainer = document.getElementById("mainContainer");
  const path = window.location.hash.substring(1);

  ///// Rotas
  switch (path) {
    case "/wellcome":
      new WellCome(mainContainer);
      break;

    case "/":
      alert("Bem-vindo à SIPROA!");
      break;

    case "/home":

      break;

    case "/login":
      new LoginPage(mainContainer);
      break;
    
     case "/importadores":
      new Importadores(mainContainer);
      break;
 
    case "/lista_importadores":
      new ListaDeImportadores(mainContainer);
      break;
    
    case "/exportadores":
      new Exportadores(mainContainer);
      break;

    case "/lista_exportadores":
      new ListaDeExportadores(mainContainer);
      break;
    
    default:

      break;
  }
}

export function Navigate(path) {
  window.location.hash = path;
}