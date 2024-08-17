const express = require("express");
const router = express.Router();
const Product = require("../database/models/product.model");

router.get("/getallproducts", async (req, res) => {
  try {
    const productsList = await Product.find({});
    res.json(productsList);
  } catch (error) {
    console.error("Error getting products:", error);
    res.status(500).json({ error: "Error getting products" });
  }
});
module.exports = router;
