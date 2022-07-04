export default class View {
  constructor() {
    this.formModal = this.getElement('.form-modal')
    this.addBtn = this.getElement('#open-form')
    this.closeBtn = this.getElement('#close-form')
    this.modal = this.getElement('.modal')
    this.saveProduct = this.getElement('#save-product')
    this.formInput = this.formModal.querySelectorAll('.form-input')
    this.imageInput = this.getElement('.img-input')
    this.imageProduct = this.getElement('.display-img')
    this.productList = this.getElement(".product-list")
    this.removeSelected = this.getElement('#remove-selected')
  }
  
  getElement(selector) {
    const element = document.querySelector(selector)
    return element
  }


  _resetInput() {
    this.formInput.forEach(input => {
      input.value = ''
    })
    this.imageProduct.style.display = 'none'
    this.getElement("#save-product").value = ''

  }

  openForm() {
    this.modal.style.display = 'block'
  }

  bindOpenform() {
    this.addBtn.addEventListener('click', e => {
      this.openForm()
      this._resetInput()
      
    })
  }

  closeForm() {
    this.modal.style.display = 'none'
  }

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

  validateInput() {
    if(this.formInput) {
      this.formInput.forEach(inputElement => {
        if(inputElement) {
          let errorElement = inputElement.parentElement.querySelector('.form-message')
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

  displayImage() {
    this.imageInput.addEventListener('change', (event) => {
      const reader = new FileReader()
      reader.addEventListener('load', () => {
        const displayImg = document.querySelector('.display-img')
        displayImg.setAttribute("src", reader.result)
        displayImg.style.display = 'block'
      })
      reader.readAsDataURL(this.imageInput.files[0])
    })
  }

  validator() {
    this.validateInput()
    this.displayImage()
  }

  renderProduct(products) {
    // let content = ''
    const productList = this.getElement('.product-list')
    if(products.length == 0) {
      productList.innerHTML = 'There is no products in your store'
    }
    else {
      productList.innerHTML = ""
    products.forEach(product => {
      const productItem = document.createElement('div')
      productItem.classList.add('product-item')
      productItem.id=product.id
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
      iconDelete.id=product.id
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

  handlerClickEdit(product) {
    this.item = this.getElement(`.edit-product-${product.id}`)
    this.item.addEventListener('click', e => {
        this.openForm()
        this.getElement("#product-name").value = product.name
        this.getElement("#product-price").value = product.price
        this.getElement(".display-img").src = product.img
        this.getElement(".display-img").style.display = 'block'
        this.getElement("#product-des").value = product.des
        this.getElement("#save-product").value = product.id

        this.saveProduct.setAttribute('Save-product', product.id)
    })
  }

  bindAddproduct(handler) {
    this.formModal.addEventListener('submit', e => {
      e.preventDefault()
      let productName = document.forms['formModal']['productName'].value
      let productPrice = document.forms['formModal']['productPrice'].value
      let productImg = document.querySelector('.display-img').src
      let productDes = document.forms['formModal']['productDes'].value
      let productId = document.forms['formModal']['id'].value
      
      if(productId) return 
      if(productName !== '' && productPrice !== '' && productImg !== ''&& productDes !== '') {
        handler(productName, productPrice, productImg, productDes)
      }
      else alert('Please enter all fields')


      this._resetInput()
      this.closeForm()
    })
  }

  bindEditproduct(handler) {
    this.formModal.addEventListener('submit', e => {
      e.preventDefault()
      let productName = document.forms['formModal']['productName'].value
      let productPrice = document.forms['formModal']['productPrice'].value
      let productImg = document.querySelector('.display-img').src
      let productDes = document.forms['formModal']['productDes'].value
      let id = document.forms['formModal']['id'].value
      
      if(this.saveProduct.value != '') {
        handler(id,productName, productPrice, productImg, productDes)
      }
      else return false
      this._resetInput()
      this.closeForm()
    })
  }

  bindDeleteProduct(handler) {
    this.productList.addEventListener('click', event => {
      if (event.target.className.indexOf("delete-product") != -1) {
        const id = parseInt(event.target.id)
        handler(id)
      }
    })
  }
  
  bindDeleteAllProduct(handler) {
    const removeAll = this.getElement('#remove-all')
    removeAll.addEventListener('click', () => {
      handler()
    })
  }

  bindSelectedProduct(handler) {
    this.productList.addEventListener('mouseenter', event => {
      this.productItem = this.productList.querySelectorAll('.product-item')
        this.productItem.forEach(item => {
          item.addEventListener('click', e => {
            item.classList.toggle('active')
            const itemInfo =  item.querySelectorAll('p')
            itemInfo.forEach(child => {
              child.classList.toggle('child-active')
            })
            const id = item.id
                handler(id)
            // itemImg.classList.toggle('child-active')
            // if( e.target.className === 'product-item active' ||
            //     e.target.className === 'product-img child-active' ||
            //     e.target.className === 'product-name child-active' ||
            //     e.target.className === 'product-price child-active' ||
            //     e.target.className === 'product-des child-active') {
                  
            //     }
          })
        })
    })
  }

  bindDeleteSeclectedProduct(handler) {
    this.removeSelected.addEventListener('click', () => {
      handler()
    })
  }

}