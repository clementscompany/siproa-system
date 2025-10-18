class Home {
  constructor(mainContainer) {
    this.mainContainer = mainContainer;
    this.Init(mainContainer);
  }

  Init(mainContainer) {
    this.Tabs().dashBoard(mainContainer);
  }

  Tabs() {
    const dashBoard = (mainContainer) => {
      mainContainer.innerHTML = "olla mundo!";

    };


    const produtos = () => {
      console.log("Produtos tab selected.");
    };

    return { dashBoard, produtos };
  }

  Functions() {
    console.log("Functions executed.");
  }
}
export default Home;
