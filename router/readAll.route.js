import express from "express";
const router = express.Router();
import Product from "../model/product.model.js";

router.get("/", async (req, res) => {
  try {
    // find all products.
    const products = await Product.find().populate("categoryId");
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

export default router;
