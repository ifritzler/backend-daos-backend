import { BadRequest } from "../common/errors/products.errors.js";
import productsService from "../services/products.service.js";


export const getAllProducts = async (req, res, next) => {
  try {
    const products = await productsService.getAll();
    res.status(200).json({ success: true, data: products });
  } catch (err) {
    next(err);
  }
};

export const createProduct = async (req, res, next) => {
  try {
    const data = req.body;
    const product = await productsService.create(data);
    res.status(201).json({
      success: true,
      data: product,
    });
  } catch (err) {
    next(new BadRequest(err.message));
  }
};

export const getProductById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await productsService.getById(id);
    res.status(200).json({
      success: true,
      data: product,
    });
  } catch (err) {
    next(err);
  }
};

export const updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const changes = req.body;
    const product = await productsService.update(id, changes);

    res.status(200).json({
      success: true,
      data: product,
    });
  } catch (err) {
    next(err);
  }
};

export const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    await productsService.delete(id);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};
