import { Schema, model } from "mongoose";

export const productSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
  }
);

export const ProductModel = model("products", productSchema);
