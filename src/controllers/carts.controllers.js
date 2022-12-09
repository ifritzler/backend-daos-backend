import { BadRequest } from "../common/errors/products.errors.js";
import cartsService from "../services/carts.service.js";


export const getAllCarts = async (req, res, next) => {
  try {
    const carts = await cartsService.getAll();
    res.status(200).json({ success: true, data: carts });
  } catch (err) {
    next(err);
  }
};

export const createCart = async (req, res, next) => {
  try {
    const data = req.body;
    const cart = await cartsService.create(data);
    res.status(201).json({
      success: true,
      data: cart.id,
    });
  } catch (err) {
    next(new BadRequest(err.message));
  }
};

export const getCartById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const cart = await cartsService.getById(id);
    res.status(200).json({
      success: true,
      data: cart,
    });
  } catch (err) {
    next(err);
  }
};

export const addProductToCart = async (req, res, next) => {
    try {
      const { id, productId } = req.params;
      const cart = await cartsService.addProductToCart(id, productId);
      res.status(200).json({
        success: true,
        data: cart,
      });
    } catch (err) {
      next(err);
    }
};

export const deleteProduct = async (req, res, next) => {
  try {
    const { id, productId } = req.params;
    await cartsService.deleteProduct(id, productId);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};

export const deleteCart = async (req, res, next) => {
  try {
    const { id } = req.params;
    await cartsService.delete(id);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};
