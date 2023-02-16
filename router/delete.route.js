import express from "express";
const router = express.Router();
import Product from "../model/product.model.js";

router.delete("/:productId", async (req, res) => {
  try {
    //  request productId
    const { productId } = req.params;

    // find the product with the specified ID and delete it.
    await Product.findByIdAndDelete(productId);

    res.json({ message: "Product deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

export default router;
