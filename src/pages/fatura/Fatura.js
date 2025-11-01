import fatura from "../../components/faturatable/fatura.js";

class Fatura{
    constructor(mainContainer){
        this.mainContainer = mainContainer;
        this.Init(mainContainer);
    }

    Init(mainContainer){
        mainContainer.innerHTML = fatura();
    }
}

export default Fatura;
