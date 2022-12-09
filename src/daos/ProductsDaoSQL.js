import ContainerSQL from '../containers/ContainerSQL.js';

class ProductsDaoSQL extends ContainerSQL {
  constructor() {
    super('products');
  }
}

export default ProductsDaoSQL;
