const { Router } = require("express");
const productsRouter = Router();

const getProductsController = require("../controllers/getProductsController");

// Obtener todos los Productos
productsRouter.get("/", getProductsController);

module.exports = productsRouter;