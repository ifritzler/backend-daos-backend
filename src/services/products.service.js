import { Service } from "./Service.js";
// import DaoService from "../daos/ProductsDaoMemory.js";
import "dotenv/config";
let DaoService;

if (!process.env.DATACORE) {
  DaoService = await (await import(`../daos/ProductsDaoMemory.js`)).default;
} else {
  DaoService = await (
    await import(`../daos/ProductsDao${process.env.DATACORE}.js`)
  ).default;
}

import { ProductCreateDTO } from "../dtos/product.dto.js";

class ProductService extends Service {
  constructor() {
    super();
    this.dao = new DaoService();
  }
  async getAll() {
    const products = await this.dao.getAll();
    return products;
  }
  async delete(id) {
    await this.dao.delete(id);
  }
  async create(data) {
    const productDTO = new ProductCreateDTO(data);
    const newProduct = await this.dao.create(productDTO.build());
    return newProduct;
  }
  async getById(id) {
    try {
      const product = await this.dao.getById(id);
      return product;
    } catch (error) {
      if (error.message === "Item not found") {
        throw new Error("Product not found with id " + id);
      }
      throw error;
    }
  }
  async update(id, changes) {
    try {
      const productUpdated = await this.dao.update(id, changes);
      return productUpdated;
    } catch (error) {
      if (error.message === "Item not found") {
        throw new Error("Product not found with id " + id);
      }
      throw error;
    }
  }
}

export default new ProductService();
