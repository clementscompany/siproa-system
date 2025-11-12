import express from "express";
import cors from "cors";
import multer from "multer";
import SettingsController from "../controller/Settings.controller.js";
import LoginController from "../controller/Login.controller.js";
import HomeController from "../controller/Home.controller.js";
import SeedController from "../controller/Seed.controller.js";

const Api = express();
const upload = multer(); // cria um parser para multipart/form-data

Api.use(cors({
  methods: ['POST', 'PUT', 'GET', 'PATCH', 'OPTIONS'],
  credentials: true,
  allowedHeaders: ['Authorization', 'Bearer', 'Content-Type', 'application/json', 'multipart/form-data'],
  origin: "*"
}));

Api.use(express.json());
Api.use(express.urlencoded({ extended: true }));

// Config routes
Api.post("/config/start", upload.any(), SettingsController.start);
Api.get("/config/get", SettingsController.getConfig);

// Login routes
Api.get("/admins", LoginController.getAdmins);
Api.post("/login/check-password", LoginController.checkPassword);
Api.post("/login/create-password", LoginController.createPassword);
Api.post("/login", LoginController.login);

// Home routes
Api.get("/home/stats", HomeController.getStats);
Api.get("/home/recent-contas", HomeController.getRecentContas);

// Seed route
Api.post("/seed", (req, res) => SeedController.seedAll(req, res));

export default Api;
