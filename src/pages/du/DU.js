import DU from "../../components/du/du.js";
import {Modal} from "../../components/modal/Modal.js"

class DocumentoUnico{
    constructor(mainContainer){
        this.mainContainer = mainContainer;
        this.Init(mainContainer);
    }

    Init(mainContainer){
        mainContainer.innerHTML = DU();
        this.loadModalProcess(mainContainer);
    }

    loadModalProcess(mainContainer){
        mainContainer.querySelector(".container-du");
        const btnconsulta = mainContainer.querySelector("#btn-search");
        const inputconsulta = mainContainer.querySelector(".search-part input[type='text']")
        const modalContainer = new Modal(mainContainer);

        btnconsulta.onclick = ()=>{
            if(inputconsulta){
                modalContainer.showError("Digite para começar a busca","Aviso!");
                return;
            }
        }
    }
}

export default DocumentoUnico;