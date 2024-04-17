const { Router } = require("express");
const bannerRouter = Router();

const getBannerController = require("../controllers/getBannerController");

// Obtener todos los Productos
bannerRouter.get("/", getBannerController);

module.exports = bannerRouter;