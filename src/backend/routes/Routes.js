import express from "express";
import SettingsController from "../controller/Settings.controller.js";

const Route = express.Router();

Route.get("/", (_, res) => {
  res.send("olla Seja bem vindo");
})
Route.post("/config/start",   SettingsController.start);

export default Route;
