// defines the pages
import express from "express";
import PageController from "../controllers/controllers.js";

const router = express.Router();

router.route("/").get(PageController.getHomepage);
router.route("/addHeart").get(PageController.getAddHeart);
router.route("/login").get(PageController.getLogin);
router.route("/profile").get(PageController.getProfile);

export default router;