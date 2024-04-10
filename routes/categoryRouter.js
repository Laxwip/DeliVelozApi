const { Router } = require("express");
const categoryRouter = Router();

const getCategoryController = require("../controllers/getCategoryController");

// Obtener todos los Productos
categoryRouter.get("/", getCategoryController);

module.exports = categoryRouter;