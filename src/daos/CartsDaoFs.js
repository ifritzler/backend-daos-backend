import ContainerFs from '../containers/ContainerFs.js'

class CartsDaoFs extends ContainerFs {
  constructor() {
    super('carts');
  }
}

export default CartsDaoFs;
