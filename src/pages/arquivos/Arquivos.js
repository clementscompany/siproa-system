import arquivosProcessos from "../../components/arquivos/arquivos.js";

class ArquivosProcessos{
    constructor(mainContainer){
        this.mainContainer = mainContainer;
        this.Init(mainContainer);
    }

    Init(mainContainer){
        mainContainer.innerHTML = arquivosProcessos();
    }
}

export default ArquivosProcessos;