import { Api } from "../../api/Api.js";
import { Modal } from "../../components/modal/Modal.js";
import ConfiguracaoInicial from "../../components/wellcome/settings.js";
import template from "../../components/wellcome/Wellcome.js";
import { AppUrl } from "../../config/env/env.js";
import { Navigate } from "../../Routes.js";
import { ValidateInput } from "../../utils/ValidateInput.js";

class WellCome {
  constructor(mainContainer) {
    this.mainContainer = mainContainer;
    this.Init(this.mainContainer);
  }

  async Init(mainContainer) {
    const modalContainer = new Modal(mainContainer);

    try {
      const api = new Api(AppUrl.server);
      modalContainer.showLoader()

      const result = await api.get("/config/get");


      if (!result.success) {
        setTimeout(() => {
          modalContainer.close();
          mainContainer.innerHTML = template();
          const configButton = mainContainer.querySelector("#configButton");
          configButton.addEventListener("click", () => this.settings(mainContainer));
          return;
        }, 1000)
      }

      setTimeout(() => {
        Navigate("/login");
      }, 1000)

    } catch (error) {
      modalContainer.showError("Erro ao buscar configuração", "Erro");
    }
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
      modalContainer.showLoader();
      e.preventDefault();
      const data = new FormData(form);

      const httpRequest = new Api(AppUrl.server);

      const result = await httpRequest.startConfig(data);

      if (!result.success) {
        setTimeout(() => {
          modalContainer.showError(result.message, "Erro");
        }, 1000);
        return;
      }
      setTimeout(() => {
        modalContainer.showSuccess(result.message, "Sucesso", true);
      }, 1000);

      setTimeout(() => {
        this.Init(mainContainer);
      }, 2000);
    });

    updateStep();
  }
}
export default WellCome;



