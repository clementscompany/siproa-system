import express from "express";
import cors from "cors";
import multer from "multer";
import SettingsController from "../controller/Settings.controller.js";

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

Api.post("/config/start", upload.any(), SettingsController.start);
Api.get("/config/get", SettingsController.getConfig);
export default Api;
