const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/api/products", productController.getProducts);
router.get("/api/stock-price/:sku", productController.getSKUDetails);

module.exports = router;
