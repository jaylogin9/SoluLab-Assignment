import express from "express";
const router = express.Router();
import Product from "../model/product.model.js";

router.put("/:productId", async (req, res) => {
  try {
    // request productId
    const { productId } = req.params;

    //  request data from the body.
    const { productName, qtyPerUnit, unitPrice, unitInStock, discontinued } =
      req.body;

    //  find the product with the specified ID.
    const product = await Product.findById(productId);

    // Update the product fields with the new data.
    product.productName = productName;
    product.qtyPerUnit = qtyPerUnit;
    product.unitPrice = unitPrice;
    product.unitInStock = unitInStock;
    product.discontinued = discontinued;

    await product.save();
    res.json({ message: "Product updated successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

export default router;
