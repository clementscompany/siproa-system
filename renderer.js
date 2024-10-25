import { Navigate, Route } from "./src/Routes.js";
export const mainContainer = document.querySelector("#mainContainer");
window.addEventListener("DOMContentLoaded", () => {
  Navigate("/requisicao_fundos");
  Route();
});
window.addEventListener("hashchange", Route);