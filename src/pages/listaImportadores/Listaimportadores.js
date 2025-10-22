import Listaimportadores from "../../components/du/listaimportadores";

class ListarImportadores {
    constructor(mainContainer) {
        this.mainContainer = mainContainer;
        this.Init(mainContainer);
    }
    Init(mainContainer) {
        mainContainer.innerHTML = Listaimportadores();
    }
}

export default ListarImportadores;