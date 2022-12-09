import ContainerFirebase from '../containers/ContainerFirebase.js'

class CartsDaoFirebase extends ContainerFirebase {
  constructor() {
    super('carts');
  }
}

export default CartsDaoFirebase;
