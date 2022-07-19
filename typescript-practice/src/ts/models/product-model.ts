import { IProduct } from '../interfaces/product-interface';
import { INewProduct } from '../interfaces/product-interface';
import { IProductModel } from '../interfaces/model-interface';
/**
 * @class ProductModel
 *
 * Manages the product data of the project.
 */
export class ProductModel implements IProductModel {
  products: IProduct[];
  listId: Array<number>;
  constructor() {
    this.products = JSON.parse(localStorage.getItem('products')!) || [];
    this.listId = [];
  }

  _commit(products: IProduct[]) {
    localStorage.setItem('products', JSON.stringify(this.products));
  }

  // Add new product to products array
  addProduct(newProduct: INewProduct) {
    const product: IProduct = {
      id: this.products.length > 0 ? this.products[this.products.length - 1].id + 1 : 1,
      name: newProduct.name,
      price: newProduct.price,
      img: newProduct.img,
      des: newProduct.des,
    };

    this.products.push(product);
    this._commit(this.products);
    return this.products;
  }

  // Map through all products, and replace the text of the product with the specified id
  editProduct(updateProduct: IProduct) {
    this.products = this.products.map((product) =>
      product.id == updateProduct.id
        ? {
            id: product.id,
            name: updateProduct.name,
            price: updateProduct.price,
            img: updateProduct.img,
            des: updateProduct.des,
          }
        : product
    );
    this._commit(this.products);
    return this.products;
  }

  // Delete a product by product id
  deleteProduct(id: number) {
    this.products = this.products.filter((product) => product.id != id);
    this._commit(this.products);
    return this.products;
  }

  // Deltete all product
  deleteAllProduct() {
    this.products.length = 0;
    this._commit(this.products);
    return this.products;
  }

  // Get selected products by id and add to listId array
  getSelectedProduct(id: number) {
    const check = this.listId.indexOf(id);
    if (check !== -1) {
      this.listId.splice(check, 1);
    } else {
      this.listId.push(id);
    }
  }

  // Delete the selected products
  deleteSelectedProduct() {
    if (this.listId.length == 0) return;
    this.listId.forEach((id) => {
      const check = this.products.filter((obj) => {
        return obj.id == id;
      });
      this.products = this.products.filter((item) => item !== check[0]);
    });
    this.listId = [];
    this._commit(this.products);
    return this.products;
  }
}
