import express from "express";
const router = express.Router();
import Product from "../model/product.model.js";

router.get("/:productId", async (req, res) => {
  try {
    // request productID.
    const { productId } = req.params;

    // Find the product with the provided productId.
    const product = await Product.findById(productId).populate("categoryId");
    res.json(product);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

export default router;
