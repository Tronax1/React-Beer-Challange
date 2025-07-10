const products = require("../products");
const skuInfo = require("../stock-price");

const getProducts = (req, res) => {
  res.status(200).json(products.default);
};

const getSKUDetails = (req, res) => {
  const sku = parseInt(req.params.sku);
  if (!skuInfo.default[sku]) res.send(404);
  res.status(200).json(skuInfo.default[sku]);
};

module.exports = {
  getProducts,
  getSKUDetails,
};
