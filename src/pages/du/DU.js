import DU from "../../components/du/du.js";

class DocumentoUnico{
    constructor(mainContainer){
        this.mainContainer = mainContainer;
        this.Init(mainContainer);
    }

    Init(mainContainer){
        mainContainer.innerHTML = DU();
        this.loadModalProcess();
    }

    loadModalProcess(mainContainer){
        const btnconsulta = this.mainContainer.querySelector("#btn-search");
        const inputconsulta = this.mainContainer.querySelector(".search-part input[type='text']")
        const poperrrormodal = this.mainContainer.querySelector("#popup-erro")
        const mensagemerrormodal = this.mainContainer.querySelector("#mensagem-erro")
        const closemodalerror = this.mainContainer.querySelector("#fecharerro")
        
        closemodalerror.onclick = ()=>{
            poperrrormodal.style.display = "none"
        }

        btnconsulta.onclick = ()=>{
            if(inputconsulta){
                mensagemerrormodal.textContent = "Digite algo para começar a busca!";
                poperrrormodal.style.display = "flex";
            }
        }
    }
}

export default DocumentoUnico;