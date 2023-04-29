const router = require("express").Router();
const ProductsController = require('./products.controller');

router.get("/", (req, res, next) => {
  ProductsController.get({accessToken: req.headers.accesstoken})
    .then(d => res.json(d))
    .catch(e => next(e));
});

module.exports = router;