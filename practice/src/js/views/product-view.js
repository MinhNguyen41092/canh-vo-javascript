/**
 * @class ProductView
 *
 * Visual representation of the model.
 */
export default class ProductView {
  constructor() {
    this.formModal = this.getElement('#formModal')
    this.addBtn = this.getElement('#open-form')
    this.closeBtn = this.getElement('#close-form')
    this.modal = this.getElement('#modal')
    this.editHeading = this.getElement('#form-heading')
    this.saveProduct = this.getElement('#save-product')
    this.formInput = this.formModal.querySelectorAll('.form-input')
    this.imageInput = this.getElement('#product-image')
    this.imageProduct = this.getElement('#show-image')
    this.productList = this.getElement(".product-list")
    this.removeSelected = this.getElement('#remove-selected')
  }
  
  // Retrieve an element from the DOM
  getElement(selector) {
    const element = document.querySelector(selector)
    return element
  }

  // Reset input to '' 
  _resetInput() {
    this.formInput.forEach(input => {
      input.value = ''
    })
    this.imageInput.value = ''
    this.imageProduct.style.display = 'none'
    this.imageProduct.src =''
    this.getElement("#save-product").value = ''
  }

  // Display form modal
  openForm() {
    this.modal.style.display = 'block'
  }

  // Bind open form modal
  bindOpenform() {
    this.addBtn.addEventListener('click', e => {
      this.openForm()
    })
  }

  // Hide form modal
  closeForm() {
    this.modal.style.display = 'none'
  }

  // Bind close form modal
  bindCloseform() {
    this.closeBtn.addEventListener('click', e => {
      e.preventDefault()
      this.saveProduct.value = ''
      this.closeForm()
    })
    this.modal.addEventListener('click', e => {
      if (e.target == e.currentTarget) this.closeForm()
    })
  }

  // Validate input in form modal
  validateInput() {

    if(this.formInput) {
      this.formInput.forEach(inputElement => {
        if(inputElement) {
          const errorElement = inputElement.parentElement.querySelector('.form-message')
          inputElement.onblur = () => {
            if(inputElement.value.trim() === '') errorElement.innerText = 'This field is required'
          }
          inputElement.oninput = () => {
            errorElement.innerText = ''
          }
        }
      })
    }
    
  }

  // Display image when selecting image file 
  displayImage() {
    this.imageInput.addEventListener('change', (event) => {
      const reader = new FileReader()
      reader.addEventListener('load', () => {
        const displayImg = document.querySelector('#show-image')
        displayImg.setAttribute("src", reader.result)
        displayImg.style.display = 'block'
      })
      reader.readAsDataURL(this.imageInput.files[0])
    })
  }

  // Validate form modal
  validator() {
    this.validateInput()
    this.displayImage()
  }

  // Display product
  renderProduct(products) {
    const productList = this.getElement('.product-list')

    // Display text when there are no products
    if(products.length == 0) {
      productList.innerHTML = 'There is no products in your store'
    }

    // Render product
    else {
      productList.innerHTML = ""
      products.forEach(product => {
      const productItem = document.createElement('div')
      productItem.classList.add('product-item')
      productItem.id = product.id
      const productAction = document.createElement('div')
      productAction.classList.add('product-action')

      const btnEditProduct = document.createElement('button')
      const iconEdit = document.createElement('li')
      iconEdit.classList.add('fas')
      iconEdit.classList.add('fa-edit')
      iconEdit.classList.add(`edit-product-${product.id}`)
      btnEditProduct.append(iconEdit)
      productAction.append(btnEditProduct)

      const btnDeleteProduct = document.createElement('button')
      const iconDelete = document.createElement('li')
      iconDelete.classList.add('fas')
      iconDelete.classList.add('fa-times')
      iconDelete.classList.add('delete-product')
      iconDelete.id = product.id
      btnDeleteProduct.append(iconDelete)
      productAction.append(btnDeleteProduct)

      productItem.append(productAction)

      const imgItem = document.createElement('div')
      imgItem.classList.add('img-item')
      const productImg = document.createElement('img')
      productImg.src= product.img
      productImg.classList.add('product-img')
      imgItem.append(productImg)
      productItem.append(imgItem)
      const productInfo = document.createElement('div')
      productInfo.classList.add('product-info')
      const productName = document.createElement('p')
      productName.classList.add('product-name')
      productName.textContent = product.name
      productInfo.append(productName)
      const productPrice = document.createElement('p')
      productPrice.classList.add('product-price')
      productPrice.textContent = `${product.price}$`
      productInfo.append(productPrice)
      const productDes = document.createElement('p')
      productDes.classList.add('product-des')
      productDes.textContent = product.des
      productInfo.append(productDes)
      productItem.append(productInfo)
      productList.append(productItem)
      
      this.handlerClickEdit(product)
    })
    }
  }

  // Display input value when click edit product
  handlerClickEdit(product) {
    this.item = this.getElement(`.edit-product-${product.id}`)
    this.item.addEventListener('click', e => {
        this.openForm()
        this.editHeading.innerText = 'Edit Product'
        this.getElement("#product-name").value = product.name
        this.getElement("#product-price").value = product.price
        this.getElement("#show-image").src = product.img
        this.getElement("#show-image").style.display = 'block'
        this.getElement("#product-des").value = product.des
        this.getElement("#save-product").value = product.id
        this.saveProduct.setAttribute('Save-product', product.id)
    })
  }
  
  // Get value input
  getValueInput() {
      const productName = document.forms['formModal']['productName'].value
      const productPrice = document.forms['formModal']['productPrice'].value
      const productImg = document.querySelector('#show-image').src
      const productDes = document.forms['formModal']['productDes'].value
      const id = document.forms['formModal']['id'].value
      const saveProduct = this.saveProduct.value
      return {productName, productPrice, productImg, productDes, id, saveProduct}
  }

  // Get value from form modal when add new product
  bindAddproduct(handler) {
    this.formModal.addEventListener('submit', e => {
      e.preventDefault()
      handler()
      this._resetInput()
      this.closeForm()
    })
    
    
  }

  // Get value from form modal when edit product
  bindEditproduct(handler) {
    this.formModal.addEventListener('submit', e => { 
      handler()
      this._resetInput()
      this.closeForm()
    })
  }

  // Get value from form modal when add new product
  bindDeleteProduct(handler) {
    this.productList.addEventListener('click', event => {
      if (event.target.className.indexOf("delete-product") != -1) {
        const id = parseInt(event.target.id)
        handler(id)
      }
    })
  }
  
  // Bind Delete all product
  bindDeleteAllProduct(handler) {
    const removeAll = this.getElement('#remove-all')
    removeAll.addEventListener('click', () => {
      handler()
    })
  }

  // Get Id when selected product
  bindSelectedProduct(handler) {
    this.productList.addEventListener('click', event => {
      if (event.target.className.indexOf("product-item") != -1) {
        const productItem = event.target
        const id = productItem.id
        productItem.classList.toggle('active')
        handler(id)
      }
      if (event.target.className.indexOf("img-item") != -1) {
        const productItem = event.target.parentElement
        productItem.classList.toggle('active')
        const id = productItem.id
        handler(id)
      }
      if (event.target.className.indexOf("product-img") != -1) {
        const productItem = event.target.parentElement.parentElement
        productItem.classList.toggle('active')
        const id = productItem.id
        handler(id)
      }
      if (event.target.className.indexOf("product-name") != -1) {
        const productItem = event.target.parentElement.parentElement
        productItem.classList.toggle('active')
        const id = productItem.id
        handler(id)
      }
      if (event.target.className.indexOf("product-price") != -1) {
        const productItem = event.target.parentElement.parentElement
        productItem.classList.toggle('active')
        const id = productItem.id
        handler(id)
      }
      if (event.target.className.indexOf("product-des") != -1) {
        const productItem = event.target.parentElement.parentElement
        productItem.classList.toggle('active')
        const id = productItem.id
        handler(id)
      }
    })
  }

  // Bind delete selected product
  bindDeleteSeclectedProduct(handler) {
    this.removeSelected.addEventListener('click', () => {
      handler()
    })
  }

}