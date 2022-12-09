import { Service } from "./Service.js";
import "dotenv/config";
let DaoService;

if (!process.env.DATACORE) {
  DaoService = await (await import(`../daos/CartsDaoMemory.js`)).default;
} else {
  DaoService = await (
    await import(`../daos/CartsDao${process.env.DATACORE}.js`)
  ).default;
}

import { CartCreateDTO } from "../dtos/cart.dto.js";

class CartService extends Service {
  constructor() {
    super();
    this.dao = new DaoService();
  }
  async getAll() {
    const carts = await this.dao.getAll();
    return carts;
  }
  async delete(id) {
    await this.dao.delete(id);
  }
  async create(data) {
    const cartDTO = new CartCreateDTO(data);
    const newCart = await this.dao.create(cartDTO.build());
    return newCart;
  }
  async getById(id) {
    try {
      const cart = await this.dao.getById(id);
      return cart;
    } catch (error) {
      if (error.message === "Item not found") {
        throw new Error("Cart not found with id " + id);
      }
      throw error;
    }
  }
  async addProductToCart(id, productId) {
    try {
      const cart = await this.dao.addProductToCart(id, productId);
      return cart;
    } catch (error) {
      throw error;
    }
  }
  async deleteProduct(id, productId) {
    try {
      await this.dao.deleteProduct(id, productId);
    } catch (error) {
      throw error;
    }
  }
}

export default new CartService();
