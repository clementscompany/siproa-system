import ConfiguracaoInicial from "../../components/wellcome/settings.js";
import template from "../../components/wellcome/Wellcome.js";

class WellCome {
  constructor(mainContainer) {
    this.mainContainer = mainContainer;
    this.Init(this.mainContainer);
  }

  Init(mainContainer) {
    mainContainer.innerHTML = template();
    // Adiciona o evento de clique ao botão de configuração
    const configButton = mainContainer.querySelector("#configButton");
    configButton.addEventListener("click", () => this.settings(mainContainer));
  }

  settings(mainContainer) {
    // Lógica para alternar as abas

    mainContainer.querySelector(".wellcomePage").innerHTML = ConfiguracaoInicial();
    const tabHandler = (e) => {
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
