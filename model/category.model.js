import mongoose from "mongoose";

// Defining a category schema.
const categorySchema = new mongoose.Schema(
  {                                        // Category ID
    categoryName: {
      type: String,
      required: true,
      lowercase: true
    },                                         // Category Name
  });

export default mongoose.model("Category", categorySchema);
