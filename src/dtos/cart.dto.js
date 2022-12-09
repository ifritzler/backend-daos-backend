import _ from "lodash";
export class CartCreateDTO {
  constructor(cart) {
    this.timestamp = cart.timestamp;
    this.products = cart.products;
  }
  build() {
    return this;
  }
}

export class CartResponseDTO {
  constructor(cart) {
    this.id = cart.id;
    this.timestamp = cart.timestamp;
    this.products = cart.products;
  }
  build() {
    return this;
  }
}
