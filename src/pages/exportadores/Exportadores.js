import exportadores from "../../components/exportadores/exportadores.js";

class Exportadores{
    constructor(mainContainer){
        this.mainContainer = mainContainer;
        this.Init(mainContainer);
    }

    Init(mainContainer){
        mainContainer.innerHTML = exportadores();
    }
}

export default Exportadores;