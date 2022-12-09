import ContainerMongo from '../containers/ContainerMongo.js';
import { productSchema, ProductModel } from '../models/product.model.js';

class ProductsDaoMongo extends ContainerMongo {
  constructor() {
    super('products', productSchema);
  }
}

export default ProductsDaoMongo;
