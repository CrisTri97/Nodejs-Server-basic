import express from "express";
import controller from "../controllers/homeController";
let router = express.Router();
let initWebRoutes = (app) => {
  router.get("/about", controller.getAboutPage);
  return app.use("/", router);
};
module.exports = initWebRoutes;
