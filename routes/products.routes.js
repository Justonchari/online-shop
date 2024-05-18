const productsController = require("../controllers/products.controller");

const express = require("express");
const router = express.Router();

router.get("/products", productsController.getAllProducts);

router.get("/products/:id", productsController.getProductDetails);

module.exports = router;
