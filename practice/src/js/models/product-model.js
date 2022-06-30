export default class Model {
  constructor() {
    // The state of the model, an array of todo objects, prepopulated with some data
    this.products = []
  }

  addProduct(productName, urlImg, productDes) {
    const product = {
      id: this.products.length > 0 ? this.products[this.products.length - 1].id + 1 : 1,
      name: productName,
      img: urlImg,
      des: productDes
    }

    this.products.push(product)
  }

  // Map through all todos, and replace the text of the todo with the specified id
  editProduct(id, updatedName, updateDes) {
    this.products = this.todos.map(product =>
      product.id === id ? { id: product.id, text: updatedName, des: updateDes } : product
    )
  }

  // Filter a todo out of the array by id
  deleteProduct(id) {
    this.products = this.products.filter(product => product.id !== id)
  }

  // Flip the complete boolean on the specified todo
}