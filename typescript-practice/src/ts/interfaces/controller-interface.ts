export interface IProductController {
  handleAddProduct(): void
  handleEditProduct(): void
  handleDeleteProduct(id:number): void
  handleDeleteAllProduct(): void
  handlerSelectedProduct(id:number): void
  handlerDeleteSelectedProduct(): void
}