import homepage from "../../components/homepage/homepage.js";

class HomePage{
    constructor(mainContainer){
        this.mainContainer = mainContainer;
        this.Init(mainContainer);
    }

    Init(mainContainer){
        mainContainer.innerHTML = homepage();
    }
}

export default HomePage;