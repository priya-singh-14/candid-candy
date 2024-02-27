// defines the pages
import express from "express";
import PageController from "../controllers/controllers.js";
import path from 'path';

const router = express.Router();

router.route("/").get(PageController.getHomepage);
// router.route("/").get(PageController.getAddHeart).post(PageController.openAddHeart); //attempt
router.route("/addHeart").get(PageController.getAddHeart).post(PageController.postHeart);
router.route("/login").get(PageController.getLogin);
router.route("/profile").get(PageController.getProfile);

router.route("/public/css/:style.css").get((req, res) => {
    res.sendFile(path.resolve() + `/public/css/${req.params.style}.css`);
  });

export default router;