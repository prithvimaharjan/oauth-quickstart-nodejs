const router = require("express").Router();

const ProductsRouter = require("../modules/products/products.routes.api");

router.use("/products", ProductsRouter);

module.exports = router;