import { model, Schema, ObjectId } from "mongoose";

export const cartSchema = new Schema({
  // TODO CAMBIAR PROPIEDADES PARA MATCHEAR CON CARRITO
  products: {
    type: [ObjectId],
    ref: "products",
    autopopulate: true,
    default: Array,
  },
  timestamp: {
    type: Date,
    default: () => Date.now() / 1000,
  },
});

export const CartModel = model("carts", cartSchema);
