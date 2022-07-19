import { ProductModel } from '../models/product-model';
import { ProductView } from '../views/product-view';
/**
 * @class ProductController
 *
 * Links the user input and the view output.
 *
 */
export class ProductController {
  constructor(public productModel: ProductModel, public productView: ProductView) {
    // Explicit this binding
    this.productView.renderProduct(this.productModel.products);
    this.productView.bindOpenform();
    this.productView.bindCloseform();
    this.productView.validator();
    this.productView.bindAddproduct(this.handleAddProduct);
    this.productView.bindDeleteProduct(this.handleDeleteProduct);
    this.productView.bindDeleteAllProduct(this.handleDeleteAllProduct);
    this.productView.bindEditproduct(this.handleEditProduct);
    this.productView.bindSelectedProduct(this.handlerSelectedProduct);
    this.productView.bindDeleteSeclectedProduct(this.handlerDeleteSelectedProduct);
  }

  handleAddProduct = () => {
    const products = this.productView.getValueInput();
    const productName = products.productName;
    const productPrice = parseInt(products.productPrice);
    const productImg = products.productImg;
    const productDes = products.productDes;
    const id = products.id;
    if (!!productName && !!productPrice && !!productImg && !!productDes && id == '') {
      const products = this.productModel.addProduct(
        productName,
        productPrice,
        productImg,
        productDes
      );
      this.productView.renderProduct(products);
      this.productView.closeForm();
      this.productView._resetInput();
    } else {
      const message = document.querySelector('#heading-message') as HTMLElement;
      message.innerHTML = 'Please fill in all fields';
      return false;
    }
  };

  handleEditProduct = () => {
    const products = this.productView.getValueInput();
    const updateName = products.productName;
    const updatePrice = parseInt(products.productPrice);
    const updateImage = products.productImg;
    const updateDes = products.productDes;
    const id = parseInt(products.id);

    if (!!updateName && !!updatePrice && !!updateDes && !!id) {
      const products = this.productModel.editProduct(
        id,
        updateName,
        updatePrice,
        updateImage,
        updateDes
      );
      const message = document.querySelector('#heading-message') as HTMLElement;
      message.innerHTML = '';
      this.productView.renderProduct(products);
      this.productView.closeForm();
      this.productView._resetInput();
    } else {
      return false;
    }
  };

  handleDeleteProduct = (id: number) => {
    const products = this.productModel.deleteProduct(id);
    this.productView.renderProduct(products);
  };

  handleDeleteAllProduct = () => {
    const products = this.productModel.deleteAllProduct();
    this.productView.renderProduct(products);
  };

  handlerSelectedProduct = (id: number) => {
    this.productModel.getSelectedProduct(id);
  };

  handlerDeleteSelectedProduct = () => {
    const products = this.productModel.deleteSelectedProduct();
    if (products) this.productView.renderProduct(products);
  };
}
