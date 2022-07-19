import { IProduct } from "./product-interface"
import { INewProduct } from "./product-interface"

export interface IProductModel {
  
  products: IProduct[]

  addProduct(newProduct: INewProduct): Array<IProduct>
  editProduct(updateProduct: IProduct): IProduct[]
  deleteProduct(id: number): IProduct[]
  deleteAllProduct(id: number): IProduct[]
  getSelectedProduct(id: number): void
  deleteSelectedProduct(): IProduct[] | undefined

}