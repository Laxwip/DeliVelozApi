const { Router } = require("express");
const router = Router();

const productsRouter = require("./productsRouter.js");
const categoryRouter = require("./categoryRouter.js");

// router PRODUCTOS
router.use("/products", productsRouter);
// router CATEGORIAS
router.use("/category", categoryRouter);


module.exports = router;
