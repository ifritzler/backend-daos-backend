import ContainerSQL from '../containers/ContainerSQL.js';

class ProductsDaoSQL extends ContainerSQL {
  constructor() {
    super('carts');
  }
}

export default ProductsDaoSQL;
