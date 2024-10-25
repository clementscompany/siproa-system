import duAdicoes from "../../components/duAdicoes/duadicoes.js";

class DuAdicoes{
    constructor(mainContainer){
        this.mainContainer = mainContainer;
        this.Init(mainContainer);
    }

    Init(mainContainer){
        mainContainer.innerHTML = duAdicoes();
    }
}

export default DuAdicoes;