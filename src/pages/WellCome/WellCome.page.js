import ConfiguracaoInicial from "../../components/wellcome/settings.js";
import template from "../../components/wellcome/Wellcome.js";

class WellCome {
  constructor(mainContainer) {
    this.mainContainer = mainContainer;
    this.Init(this.mainContainer);
  }

  Init(mainContainer) {
    mainContainer.innerHTML = template();
    const configButton = mainContainer.querySelector("#configButton");
    configButton.addEventListener("click", () => this.settings(mainContainer));
  }

  settings(mainContainer) {
    mainContainer.querySelector(".wellcomePage").innerHTML = ConfiguracaoInicial();
    const tabHandler = (e) => {

      const closeButton = e.target.closest("#closeButton");
      if (closeButton) {
        this.Init(mainContainer);
        return;
      }

      const target = e.target.closest(".tab");
      if (!target) return;
      const tabs = mainContainer.querySelectorAll(".tab");
      const contents = mainContainer.querySelectorAll(".tab-content");
      tabs.forEach(tab => tab.classList.remove("active"));
      contents.forEach(c => c.classList.remove("active"));
      target.classList.add("active");
      const tabId = target.dataset.tab;
      mainContainer.querySelector(`#${tabId}`).classList.add("active");
    };

    mainContainer.addEventListener("click", tabHandler);
  }
}

export default WellCome;
