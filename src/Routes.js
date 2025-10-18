import WellCome from "./pages/WellCome/WellCome.page.js";

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

      break;

    case "/vendas":
      new Vendas(mainContainer);
      break;
    default:

      break;
  }
}

export function Navigate(path) {
  window.location.hash = path;
}
