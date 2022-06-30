export default class Controller {
  constructor(model, view) {
    this.model = model
    this.view = view
    this.view.bindOpenform()
    this.view.bindCloseform()
    this.view.displayImage()
    // this.view.validator()
    this.view.bindAddproduct(this.handleAddproduct) 
  }

  handleAddproduct = (productName, productPrice, productImg, productDes) => {
    this.view.renderProduct(productName, productPrice, productImg, productDes)
    this.model.addProduct(productName, productPrice, productImg, productDes)
      this.view.closeForm()
  }
}