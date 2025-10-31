import { Navigate, Route } from "./src/Routes.js";
export const mainContainer = document.querySelector("#mainContainer");
window.addEventListener("DOMContentLoaded", () => {
  Navigate("/lista_importadores");
  Route();
});
window.addEventListener("hashchange", Route);