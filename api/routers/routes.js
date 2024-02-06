// defines the pages
import express from "express";
import PageController from "../controllers/controllers.js";

const router = express.Router();

router.route("/").get(PageController.getHomepage);

export default router;