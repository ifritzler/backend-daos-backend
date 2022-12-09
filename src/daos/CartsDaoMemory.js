import ContainerMemory from "../containers/ContainerMemory.js";
import _ from "lodash";
import productsService from "../services/products.service.js";

class CartsDaoMemory extends ContainerMemory {
  constructor() {
    super();
  }
  async create() {
    const cart = { products: [], timestamp: Date.now() / 1000 };
    const newCart = await super.create(cart);
    return newCart;
  }
  async addProductToCart(cartId, productId) {
    const cartIndex = this.db.findIndex((cart) => cart.id === cartId);
    if (cartIndex < 0) throw new Error("Item not found");
    const product = await productsService.getById(productId);
    this.db[cartIndex].products.push(product);
    return this.db[cartIndex]
  }
  async deleteProduct(cartId, productId) {
    await this.getById(cartId)
    const cartIndex = this.db.findIndex((cart) => cart.id === cartId);
    this.db[cartIndex].products = this.db[cartIndex].products.filter(product => product.id !== productId);
  }
}

export default CartsDaoMemory;
