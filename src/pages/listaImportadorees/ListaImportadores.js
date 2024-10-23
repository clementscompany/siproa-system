import ListaImportadores from "../../components/importadores/listaImportadores.js";

class ListaDeImportadores{
    constructor (mainContainer){
        this.mainContainer = mainContainer;
        this.Init(mainContainer);
    }

    Init(mainContainer){
        mainContainer.innerHTML = ListaImportadores();
    }
}

export default ListaDeImportadores;