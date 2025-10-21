import Cadimportadores from "../../components/du/importadores.js";

class CadastroImportadores{
    constructor(mainContainer){
        this.mainConatainer = mainContainer;
        this.Init(mainContainer);
    }

    Init(mainContainer){
        mainContainer.innerHTML = Cadimportadores();
    }
}

export default CadastroImportadores;