import _ from 'lodash'
export class ProductCreateDTO {
  constructor(product){
    this.title = product.title
    this.price = product.price
    this.category = product.category
  }
  build(){
    if(_.isNil(this.title)) throw new Error('title is required')
    if(_.isNil(this.price)) throw new Error('price is required')
    if(_.isNil(this.category)) throw new Error('category is required')
    return this
  }
}

export class ProductResponseDTO {
  constructor(product){
    this.title = product.title
    this.price = product.price
    this.category = product.category
  }
  build(){
    return this
  }
}

