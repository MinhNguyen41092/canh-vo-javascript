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
  
  /** 
   * Returns element after adding class and id.
   *
   * @param {string} element Element want to create.
   * @param {Array<string>} classes List classname want to create in element.
   * @param {string(optional)} id Id want to create in element.
   * @return {HTMLElement} element Element after adding class and id.
   */
  createElement(element: string, classes?: Array<string>, id?: string) {
    const e = document.createElement(element);

    if(id) e.id = id

    if(classes) {
      classes.forEach(c => e.classList.add(c))
    }

    return e
  }

  // Create nodes
  createItem(product: IProduct) {
    const id = product.id.toString();

    const productItem = this.createElement('div', ['product-item'], id)
    const productAction = this.createElement('div', ['product-action'])
    
    const btnEditProduct = this.createElement('button')
    const iconEdit = this.createElement('li', ['fas', 'fa-edit', `edit-product-${id}`])
    btnEditProduct.append(iconEdit)
    productAction.append(btnEditProduct)

    const btnDeleteProduct = this.createElement('button')
    const iconDelete = this.createElement('li', ['fas', 'fa-times', 'delete-product'], id)
    btnDeleteProduct.append(iconDelete);
    productAction.append(btnDeleteProduct);
    productItem.append(productAction);

    const imgItem = this.createElement('article', ['img-item'])
    
    const productImg = this.createElement('img', ['product-img']) as HTMLImageElement
    productImg.src = product.img
    imgItem.append(productImg);
    productItem.append(imgItem);
   
    const productInfo = this.createElement('div', ['product-info'])
    
    const productName = this.createElement('p', ['product-name'])
    productName.textContent = product.name;
    productInfo.append(productName);
   
    const productPrice = this.createElement('p', ['product-price'])
    productPrice.textContent = `${product.price}$`;
    productInfo.append(productPrice);

    const productDes = this.createElement('p', ['product-des'])
    productDes.textContent = product.des;
    productInfo.append(productDes);

    productItem.append(productInfo);
    this.productList.append(productItem);
  }

  // Display product
  renderProduct(products: IProduct[]) {

    // Display text when there are no products
    if (products.length == 0) {
      this.productList.innerHTML = 'There is no products in your store';
    }
    // Render product
    else {
      this.productList.innerHTML = '';
      products.forEach((product) => {
        this.createItem(product)
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

  // Get Id for get id for newly added product when selected
  selectProduct(selector: string, handler: Function ) {
    const e = document.getElementById(selector)
    e?.addEventListener('click', () => {
      e.classList.toggle('active')
      const id = e.id
      handler(id)
    })
  }

  // Get Id when selected product
  bindSelectedProduct(handler: Function) {
    const productItem = document.querySelectorAll('.product-item')
    productItem.forEach(item => {
      item.addEventListener('click', () => {
        item.classList.toggle('active')
        const id = item.id
        handler(id)
      })
    })
  }

  // Bind delete selected product
  bindDeleteSeclectedProduct(handler: Function) {
    this.removeSelected.addEventListener('click', () => {
      handler();
    });
  }
}
