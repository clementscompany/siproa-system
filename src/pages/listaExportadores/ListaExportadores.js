import ListaExportadores from "../../components/exportadores/listaExportadores.js";

class ListaDeExportadores{
    constructor(mainContainer){
        this.mainContainer = mainContainer;
        this.Init(mainContainer);
    }

    Init(mainContainer){
        mainContainer.innerHTML = ListaExportadores();
    }
}
export default ListaDeExportadores;