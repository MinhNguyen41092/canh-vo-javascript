export default class Controller {
  constructor(model, view) {
    this.model = model
    this.view = view

    this.view.renderProduct(this.model.products)
    this.view.bindOpenform()
    this.view.bindCloseform()
    this.view.validator()
    this.view.bindAddproduct(this.handleAddproduct)
    this.view.bindDeleteProduct(this.handleDeleteproduct)
    this.view.bindDeleteAllProduct(this.handleDeleteAllproduct)
    this.view.bindEditproduct(this.handleEditproduct)
    this.view.bindSelectedProduct(this.handlerSelectedProduct)
    this.view.bindDeleteSeclectedProduct(this.handlerDeleteSelectedProduct)
  }

  handleAddproduct = (productName, productPrice, productImg, productDes) => {
    const products = this.model.addProduct(productName, productPrice, productImg, productDes)
    this.view.renderProduct(products)
  }

  handleEditproduct = (id, updatedName, updatePrice, updateImage, updateDes ) => {
    const products = this.model.editProduct(id, updatedName, updatePrice, updateImage, updateDes )
    this.view.renderProduct(products)
  }

  handleDeleteproduct = (id) => {
    const products = this.model.deleteProduct(id)
    this.view.bindDeleteAllProduct(this.handleDeleteAllproduct)
    this.view.renderProduct(products)
  }

  handleDeleteAllproduct = () => {
    const products = this.model.deleteAllProduct()
    this.view.renderProduct(products)
  }

  handlerSelectedProduct = (id) => {
    this.model.selectedProduct(id)
  }

  handlerDeleteSelectedProduct = () => {
    const products = this.model.deleteSelectedProduct()
    this.view.renderProduct(products)
  }
}