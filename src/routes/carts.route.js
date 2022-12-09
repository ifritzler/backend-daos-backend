import { Router } from "express";
import {
  addProductToCart,
  createCart,
  deleteCart,
  deleteProduct,
  getAllCarts,
  getCartById,
} from "../controllers/carts.controllers.js";

const router = Router();
router.get("/", getAllCarts);
router.post("/", createCart);
router.get("/:id", getCartById);
router.post("/:id/products/:productId", addProductToCart);
router.delete("/:id/products/:productId", deleteProduct);
router.delete("/:id/", deleteCart);

export default router;
