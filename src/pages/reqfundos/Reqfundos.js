import reqFundos from "../../components/reqfundos/reqfundos.js";

class ReqFundos{
    constructor(mainContainer){
        this.mainContainer = mainContainer;
        this.Init(mainContainer);
    }

    Init(mainContainer){
        mainContainer.innerHTML = reqFundos();
    }
}

export default ReqFundos;