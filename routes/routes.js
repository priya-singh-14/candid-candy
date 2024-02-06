import express from "express";
import controllers from "./controllers/controllers.js";

const router = express.Router();

router.route("/").get(controllers.getHomePage());