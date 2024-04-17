const { Router } = require("express");
const router = Router();

const productsRouter = require("./productsRouter.js");
const categoryRouter = require("./categoryRouter.js");
const bannerRouter = require("./bannerRouter.js");

// router PRODUCTOS
router.use("/products", productsRouter);
// router CATEGORIAS
router.use("/category", categoryRouter);
// router BANNERS
router.use("/banner", bannerRouter);


module.exports = router;
