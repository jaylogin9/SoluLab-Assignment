import mongoose from "mongoose";

// Defining a category schema.
const productSchema = new mongoose.Schema(
    {
        productId:  {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'product',
          },                         // Product ID
        productName: {
            type: String,
            required: true,
        },                           // Product Name
        qtyPerUnit: {
            type: String,
            required: true,
        },                    		// Quantity of the Product
        unitPrice: {
            type: Number,
            required: true,
        },              			// Unit Price of the Product
        unitInStock: {
            type: Number,
            required: true,
        },                    		// Unit in Stock
        discontinued: {
            type: Boolean,
            default: false,
        },                          // Boolean (yes/no)
        categoryId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Category',
            required: true
          }                       	// Category ID
    });

export default mongoose.model("Product", productSchema);
