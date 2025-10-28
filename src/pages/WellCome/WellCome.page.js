import { Api } from "../../api/Api.js";
import { Modal } from "../../components/modal/Modal.js";
import ConfiguracaoInicial from "../../components/wellcome/settings.js";
import template from "../../components/wellcome/Wellcome.js";
import { ValidateInput } from "../../utils/ValidateInput.js";

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
    const form = mainContainer.querySelector("#formConfiguracao");
    const steps = form.querySelectorAll(".step");
    const nextBtn = form.querySelector(".btn-next");
    const prevBtn = form.querySelector(".btn-prev");
    const saveBtn = form.querySelector(".btn-save");
    const cancelBtn = form.querySelector("#closeButton");

    const modalContainer = new Modal(mainContainer);

    let currentStep = 0;

    const updateStep = () => {
      steps.forEach((s, i) => s.classList.toggle("active", i === currentStep));
      prevBtn.style.display = currentStep > 0 ? "inline-block" : "none";
      nextBtn.style.display = currentStep < steps.length - 1 ? "inline-block" : "none";
      saveBtn.classList.toggle("hidden", currentStep !== steps.length - 1);
    };

    nextBtn.addEventListener("click", () => {
      const currentStepElement = steps[currentStep];
      const inputs = currentStepElement.querySelectorAll("input, select, textarea");
      let isValid = ValidateInput(inputs);

      if (!isValid) {
        modalContainer.showError("Preencha todos os Campos", "Erro de validação");
        return;
      }

      if (currentStep < steps.length - 1) currentStep++;
      updateStep();
    });

    prevBtn.addEventListener("click", () => {
      if (currentStep > 0) currentStep--;
      updateStep();
    });

    cancelBtn.addEventListener("click", () => this.Init(mainContainer));

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const api = new Api();
      modalContainer.showLoader();

      const result = await api.startConfig(data);
      console.log(result);

    });

    updateStep();
  }
}

export default WellCome;
