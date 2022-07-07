/**
 * @class productController
 *
 * Links the user input and the view output.
 *
 */
export default class productController {
  constructor(model, view) {
    this.model = model
    this.view = view

    // Explicit this binding
    this.view.renderProduct(this.model.products)
    this.view.bindOpenform()
    this.view.bindCloseform()
    this.view.validator()
    this.view.bindAddproduct(this.handleAddproduct)
    this.view.bindDeleteProduct(this.handleDeleteProduct)
    this.view.bindDeleteAllProduct(this.handleDeleteAllProduct)
    this.view.bindEditproduct(this.handleEditProduct)
    this.view.bindSelectedProduct(this.handlerSelectedProduct)
    this.view.bindDeleteSeclectedProduct(this.handlerDeleteSelectedProduct)
  }

  handleAddProduct = (productName, productPrice, productImg, productDes) => {
    const products = this.model.addProduct(productName, productPrice, productImg, productDes)
    this.view.renderProduct(products)
  }

  handleEditProduct = (id, updatedName, updatePrice, updateImage, updateDes ) => {
    const products = this.model.editProduct(id, updatedName, updatePrice, updateImage, updateDes )
    this.view.renderProduct(products)
  }

  handleDeleteProduct = (id) => {
    const products = this.model.deleteProduct(id)
    this.view.bindDeleteAllProduct(this.handleDeleteAllproduct)
    this.view.renderProduct(products)
  }

  handleDeleteAllProduct = () => {
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