import express from "express";
import cors from "cors";
import { Route } from "../../Routes.js";

const Api = express();
Api.use(Route);
Api.use(cors({
  methods: ['POST', 'PUT', 'GET', 'PATCH', 'OPTIONS'],
  credentials: true,
  allowedHeaders: ['Authorization', 'Bearer'],
  origin: ["*"]
}));
Api.use(express.json());
Api.use(express.urlencoded({ extended: true }));

export default Api;
