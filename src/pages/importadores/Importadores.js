import ListaImportadores from "../../components/du/importadores.js";
class Importadores {
  constructor(mainContainer) {
    this.mainContainer = mainContainer;
    this.Init(mainContainer);
  }

  Init(mainContainer) {
    mainContainer.innerHTML = ListaImportadores();
  }
}

export default Importadores;