import listapaises from "../../components/paises/paisestable.js";
class ListaPaises{
    constructor(mainContainer){
        this.mainContainer = mainContainer;
        this.Init(mainContainer)
    }

    Init(mainContainer){
        mainContainer.innerHTML = listapaises();
    }
}

export default ListaPaises;