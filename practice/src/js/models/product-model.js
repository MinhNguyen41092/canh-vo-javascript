export default class Model {
  constructor() {
    this.products = JSON.parse(localStorage.getItem('products')) || []
    this.listId = []
  }

  _commit(products) {
    localStorage.setItem('products', JSON.stringify(this.products))
  }

  addProduct(productName, productPrice, productImg, productDes) {
    const product = {
      id: this.products.length > 0 ? this.products[this.products.length - 1].id + 1 : 1,
      name: productName,
      price: productPrice,
      img: productImg,
      des: productDes
    }

    this.products.push(product)
    this._commit(this.products)
    return(this.products)
  }

  editProduct(id, updatedName, updatePrice, updateImage, updateDes ) {
    this.products = this.products.map(product =>
      product.id == id ? { 
        id: product.id, 
        name: updatedName, 
        price:updatePrice, 
        img: updateImage, 
        des: updateDes } : product
    )
    this._commit(this.products)
    return(this.products)
  }

  deleteProduct(id) {
    this.products = this.products.filter(product => product.id != id)
    this._commit(this.products)
    return(this.products)
  }

  deleteAllProduct() {
    this.products.length = 0
    this._commit(this.products)
    return this.products
  }

  selectedProduct(id) {
    const check = this.listId.indexOf(id)
    if (check !== -1 ) {
      this.listId.splice(check, 1)
    }
    else {
      this.listId.push(id)
    }
  }

  deleteSelectedProduct() {
    if(this.listId.length == 0) return
    this.listId.forEach(id => {
      const check = this.products.filter(obj => {
        return obj.id == id
      })
      this.products = this.products.filter(item => item !== check[0])
    })
    this.listId = []
    this._commit(this.products)
    return this.products
  }
}
