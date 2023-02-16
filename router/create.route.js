import express from "express";
const router = express.Router();
import Product from "../model/product.model.js";
import Category from "../model/category.model.js";

  router.post('/', async (req, res) => {
    try {
      // Extract the category and product data from the request body
      const { categoryName, productName, qtyPerUnit, unitPrice, unitInStock, discontinued } = req.body;
  
      // Create the new category document
      const category = await Category.create({ categoryName });
  
      // Create the new product document
      const product = await Product.create({
        productName,
        qtyPerUnit,
        unitPrice,
        unitInStock,
        discontinued,
        categoryId: category._id
      });
  
      res.json({ product, category });
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  });

  export default router;