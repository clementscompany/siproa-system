import formDu from "../../components/du/formdu.js"
import { Modal } from "../../components/modal/Modal.js";
import { ValidateInput } from "../../utils/ValidateInput.js";
class FormDU{
    constructor(mainContainer){
        this.mainContainer = mainContainer;
        this.Init(mainContainer);
    }

    Init(mainContainer){
        mainContainer.innerHTML = formDu();
        this.LoadForm(mainContainer);
    }
    LoadForm(mainContainer){
        mainContainer.querySelector(".criar-processo");
        const form = mainContainer.querySelector("#exportersForm");
        const btnAvancar = form.querySelector(".btn-salvar");
        const modalContainer = new Modal(mainContainer);

        btnAvancar.addEventListener("click",()=>{
            const inputs = form.querySelectorAll("input,select");
            let isValid = ValidateInput(inputs);

            if(!isValid){
                modalContainer.showError("Preenche todos os campos", "Erro de validação");
                return;
            }
        })
    }
}

export default FormDU;