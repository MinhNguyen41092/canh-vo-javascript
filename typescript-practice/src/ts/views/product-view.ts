import { IProduct } from '../interfaces/product-interface';
import { IProductView } from '../interfaces/view-interface';
/**
 * @class ProductView
 *
 * Visual representation of the model.
 */
export class ProductView implements IProductView {
  formModal: HTMLElement;
  modal: HTMLElement;
  heading: HTMLElement;
  productList: HTMLElement;

  saveProduct: HTMLButtonElement;
  addBtn: HTMLButtonElement;
  closeBtn: HTMLButtonElement;
  removeSelected: HTMLButtonElement;

  formInput: NodeListOf<HTMLInputElement>;
  nameInput: HTMLInputElement;
  priceInput: HTMLInputElement;
  imageInput: HTMLInputElement;
  imageProduct: HTMLInputElement;
  desInput: HTMLInputElement;

  constructor() {
    this.formModal = this.getElement('#formModal');
    this.modal = this.getElement('#modal');
    this.heading = this.getElement('#form-heading');
    this.productList = this.getElement('.product-list');

    this.formInput = this.formModal.querySelectorAll('.form-input');

    this.addBtn = this.getButtonElement('#open-form');
    this.closeBtn = this.getButtonElement('#close-form');
    this.saveProduct = this.getButtonElement('#save-product');
    this.removeSelected = this.getButtonElement('#remove-selected');

    this.nameInput = this.getInputElement('#product-name');
    this.priceInput = this.getInputElement('#product-price');
    this.imageInput = this.getInputElement('#product-image');
    this.imageProduct = this.getInputElement('#show-image');
    this.desInput = this.getInputElement('#product-des');
  }

  // Retrieve an element from the DOM
  getElement(selector: string): HTMLElement {
    return document.querySelector(selector) as HTMLElement;
  }

  // Get Input element
  getInputElement(selector: string): HTMLInputElement {
    return document.querySelector(selector) as HTMLInputElement;
  }

  // Get Button element
  getButtonElement(selector: string): HTMLButtonElement {
    return document.querySelector(selector) as HTMLButtonElement;
  }

  // Reset input to ''
  _resetInput() {
    this.nameInput.value = '';
    this.priceInput.value = '';
    this.desInput.value = '';
    this.imageInput.value = '';
    this.imageProduct.style.display = 'none';
    this.imageProduct.src = '';
    this.saveProduct.value = '';
  }

  // Display form modal
  openForm() {
    this.modal.style.display = 'block';
  }

  // Bind open form modal
  bindOpenform() {
    this.addBtn.addEventListener('click', (e) => {
      this.heading.innerText = 'Add New Product';
      this.openForm();
      this._resetInput();
    });
  }

  // Hide form modal
  closeForm() {
    this.modal.style.display = 'none';
  }

  // Bind close form modal
  bindCloseform() {
    this.closeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      this.saveProduct.value = '';
      this.closeForm();
    });
    this.modal.addEventListener('click', (e) => {
      if (e.target == e.currentTarget) this.closeForm();
    });
  }

  // Validate input in form modal
  validateInput() {
    if (this.formInput) {
      this.formInput.forEach(function (inputElement) {
        if (inputElement) {
          const formGroup = inputElement.parentElement as HTMLElement;
          const errorElement = formGroup.querySelector('.form-message') as HTMLElement;

          inputElement.onblur = () => {
            if (inputElement.value.trim() === '') errorElement.innerText = 'This field is required';
          };

          inputElement.oninput = () => {
            errorElement.innerText = '';
          };
        }
      });
    }
  }

  // Display image when selecting image file
  displayImage() {
    this.imageInput.addEventListener('change', (event) => {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        const result = reader.result as string;
        const displayImg = this.getElement('#show-image');
        displayImg.setAttribute('src', result);
        displayImg.style.display = 'block';
      });
      const listFile = this.imageInput.files;
      if (listFile != null) reader.readAsDataURL(listFile[0]);
    });
  }

  // Validate form modal
  validator() {
    this.validateInput();
    this.displayImage();
  }

  // Display product
  renderProduct(products: IProduct[]) {
    const productList = this.getElement('.product-list');

    // Display text when there are no products
    if (products.length == 0) {
      productList.innerHTML = 'There is no products in your store';
    }

    // Render product
    else {
      productList.innerHTML = '';
      products.forEach((product) => {
        const id = product.id.toString();
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        productItem.id = id;
        const productAction = document.createElement('div');
        productAction.classList.add('product-action');

        const btnEditProduct = document.createElement('button');
        const iconEdit = document.createElement('li');
        iconEdit.classList.add('fas');
        iconEdit.classList.add('fa-edit');
        iconEdit.classList.add(`edit-product-${id}`);
        btnEditProduct.append(iconEdit);
        productAction.append(btnEditProduct);

        const btnDeleteProduct = document.createElement('button');
        const iconDelete = document.createElement('li');
        iconDelete.classList.add('fas');
        iconDelete.classList.add('fa-times');
        iconDelete.classList.add('delete-product');
        iconDelete.id = id;
        btnDeleteProduct.append(iconDelete);
        productAction.append(btnDeleteProduct);

        productItem.append(productAction);

        const imgItem = document.createElement('div');
        imgItem.classList.add('img-item');
        const productImg = document.createElement('img');
        productImg.src = product.img;
        productImg.classList.add('product-img');
        imgItem.append(productImg);
        productItem.append(imgItem);
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        const productName = document.createElement('p');
        productName.classList.add('product-name');
        productName.textContent = product.name;
        productInfo.append(productName);
        const productPrice = document.createElement('p');
        productPrice.classList.add('product-price');
        productPrice.textContent = `${product.price}$`;
        productInfo.append(productPrice);
        const productDes = document.createElement('p');
        productDes.classList.add('product-des');
        productDes.textContent = product.des;
        productInfo.append(productDes);
        productItem.append(productInfo);
        productList.append(productItem);

        this.handlerClickEdit(product);
      });
    }
  }

  // Display input value when click edit product
  handlerClickEdit(product: IProduct) {
    const item = this.getElement(`.edit-product-${product.id}`);
    item.addEventListener('click', () => {
      this.openForm();
      this.heading.innerText = 'Edit Product';
      this.getInputElement('#product-name').value = product.name;
      this.getInputElement('#product-price').value = product.price.toString();
      this.getInputElement('#show-image').src = product.img;
      this.getInputElement('#show-image').style.display = 'block';
      this.getInputElement('#product-des').value = product.des;
      this.getInputElement('#save-product').value = product.id.toString();
      this.saveProduct.setAttribute('Save-product', product.id.toString());
    });
  }

  // Get value input
  getValueInput() {
    const productName = this.nameInput.value;
    const productPrice = this.priceInput.value;
    const productImg = this.imageProduct.src;
    const productDes = this.desInput.value;
    const id = this.saveProduct.value;
    const saveProduct = this.saveProduct.value;
    return { productName, productPrice, productImg, productDes, id, saveProduct };
  }

  // Get value from form modal when add new product
  bindAddproduct(handler: Function) {
    this.formModal.addEventListener('submit', (e) => {
      e.preventDefault();
      handler();
    });
  }

  // Get value from form modal when edit product
  bindEditproduct(handler: Function) {
    this.formModal.addEventListener('submit', (e) => {
      handler();
    });
  }

  // Get value from form modal when add new product
  bindDeleteProduct(handler: Function) {
    this.productList.addEventListener('click', (event) => {
      if ((event.target as any).className.indexOf('delete-product') != -1) {
        const id = parseInt((event.target as any).id);
        handler(id);
      }
    });
  }

  // Bind Delete all product
  bindDeleteAllProduct(handler: Function) {
    const removeAll = this.getElement('#remove-all');
    removeAll.addEventListener('click', () => {
      handler();
    });
  }

  // Get Id when selected product
  bindSelectedProduct(handler: Function) {
    this.productList.addEventListener('click', (event) => {
      if ((event.target as any).className.indexOf('product-item') != -1) {
        const productItem = event.target as HTMLElement;
        const id = productItem.id;
        productItem.classList.toggle('active');
        handler(id);
      }
      if ((event.target as any).className.indexOf('img-item') != -1) {
        const productItem = (event.target as any).parentElement;
        productItem.classList.toggle('active');
        const id = productItem.id;
        handler(id);
      }
      if ((event.target as any).className.indexOf('product-img') != -1) {
        const productItem = (event.target as any).parentElement.parentElement;
        productItem.classList.toggle('active');
        const id = productItem.id;
        handler(id);
      }
      if ((event.target as any).className.indexOf('product-name') != -1) {
        const productItem = (event.target as any).parentElement.parentElement;
        productItem.classList.toggle('active');
        const id = productItem.id;
        handler(id);
      }
      if ((event.target as any).className.indexOf('product-price') != -1) {
        const productItem = (event.target as any).parentElement.parentElement;
        productItem.classList.toggle('active');
        const id = productItem.id;
        handler(id);
      }
      if ((event.target as any).className.indexOf('product-des') != -1) {
        const productItem = (event.target as any).parentElement.parentElement;
        productItem.classList.toggle('active');
        const id = productItem.id;
        handler(id);
      }
    });
  }

  // Bind delete selected product
  bindDeleteSeclectedProduct(handler: Function) {
    this.removeSelected.addEventListener('click', () => {
      handler();
    });
  }
}
