import { Router } from "express";
import productsRouter from "./products.route.js";
import cartsRouter from "./carts.route.js";

const router = Router();

router.use("/products", productsRouter);
router.use("/carts", cartsRouter);
export default router;
