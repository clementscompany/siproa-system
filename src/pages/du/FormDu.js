import formDu from "../../components/du/formdu.js"

class FormDU{
    constructor(mainContainer){
        this.mainContainer = mainContainer;
        this.Init(mainContainer);
    }

    Init(mainContainer){
        mainContainer.innerHTML = formDu();
    }
}

export default FormDU;