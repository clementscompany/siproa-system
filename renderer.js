import { Navigate, Route } from "./src/Routes.js";
export const mainContainer = document.querySelector("#mainContainer");
window.addEventListener("DOMContentLoaded", () => {
  Navigate("/cadastro_importadores"); 
  Route();
});
window.addEventListener("hashchange", Route);
