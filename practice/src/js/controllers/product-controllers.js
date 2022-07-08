/**
 * @class ProductController
 *
 * Links the user input and the view output.
 *
 */
export default class ProductController {
  constructor(model, view) {
    this.model = model
    this.view = view

    // Explicit this binding
    this.view.renderProduct(this.model.products)
    this.view.bindOpenform()
    this.view.bindCloseform()
    this.view.validator()
    this.view.bindAddproduct(this.handleAddProduct)
    this.view.bindDeleteProduct(this.handleDeleteProduct)
    this.view.bindDeleteAllProduct(this.handleDeleteAllProduct)
    this.view.bindEditproduct(this.handleEditProduct)
    this.view.bindSelectedProduct(this.handlerSelectedProduct)
    this.view.bindDeleteSeclectedProduct(this.handlerDeleteSelectedProduct)
  }

  handleAddProduct = () => {
    const products = this.view.getValueInput()
    const productName = products.productName
    const productPrice = products.productPrice
    const productImg = products.productImg
    const productDes = products.productDes
    if(!!productName && productPrice && !!productImg && !!productDes) {
      const products = this.model.addProduct(productName, productPrice, productImg, productDes)
      this.view.renderProduct(products)
    }
    else {
      this.message = this.getElement('#heading-message')
      this.message.innerHTML = 'Please fill in all fields'
      return false
    }
  }

  handleEditProduct = () => {
    const products = this.view.getValueInput()
    const updateName = products.productName
    const updatePrice = products.productPrice
    const updateImage = products.productImg
    const updateDes = products.productDes
    const saveProduct = products.saveProduct
    const id = products.id
    
    if(!!saveProduct && !!updateName && !!updatePrice && !!updateDes) {
      this.model.editProduct(id, updateName, updatePrice, updatePrice, updateImage, updateDes )
      this.view.renderProduct(products)
    }
    else {
      return false
    }
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
    this.model.getSelectedProduct(id)
  }

  handlerDeleteSelectedProduct = () => {
    const products = this.model.deleteSelectedProduct()
    this.view.renderProduct(products)
  }
}