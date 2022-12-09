import ContainerMongo from "../containers/ContainerMongo.js";
import { productSchema, ProductModel } from "../models/product.model.js";

class CartsDaoMongo extends ContainerMongo {
  constructor() {
    super("carts", productSchema);
  }
  async create() {
    const cart = await super.create();
    return cart.id;
  }
  async addProductToCart(cartId, productId) {}
  async deleteProduct(cartId, productId) {}
}

export default CartsDaoMongo;
