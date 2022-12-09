import ContainerFs from '../containers/ContainerFs.js'

class ProductsDaoFs extends ContainerFs {
  constructor() {
    super('products');
  }
}

export default ProductsDaoFs;
