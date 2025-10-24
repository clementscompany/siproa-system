import express from "express";
import SettingsController from "../controller/Settings.controller";

const Route = express.Router();

Route.post("/config/start", SettingsController.start);

export default Route;
