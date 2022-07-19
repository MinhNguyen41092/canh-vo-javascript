import { IProduct } from "./product-interface"

export interface IProductView {
  getElement(selector: string): HTMLElement
  getInputElement(selector: string): HTMLInputElement
  getButtonElement(selector: string): HTMLButtonElement
  _resetInput(): void
  openForm(): void
  bindOpenform(): void
  closeForm(): void
  bindCloseform(): void
  validateInput(): void
  displayImage(): void 
  validator(): void
  renderProduct(products: IProduct[]): void
  handlerClickEdit(product: IProduct): void
  getValueInput(): object
  bindAddproduct(handler: Function): void
  bindEditproduct(handler: Function): void
  bindDeleteProduct(handler: Function): void
  bindDeleteAllProduct(handler: Function): void
  bindSelectedProduct(handler: Function): void
  bindDeleteSeclectedProduct(handler: Function): void
}