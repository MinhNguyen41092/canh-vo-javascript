export default class View {
  constructor() {
    this.formModal = this.getElement('.form-modal')
    this.addBtn = this.getElement('#open-form')
    this.closeBtn = this.getElement('#close-form')
    this.modal = this.getElement('.modal')
    this.saveProduct = this.getElement('#save-product')
    this.formInput = document.querySelectorAll('.form-input')
    this.listProduct = this.getElement('.product-list')
    this.imageInput = this.getElement('.img-input')
  }
  
  getElement(selector) {
    const element = document.querySelector(selector)
    return element
}

  openForm() {
    this.modal.style.display = 'block'
  }

  bindOpenform() {
    this.addBtn.addEventListener('click', e => {
      this.openForm()
    })
  }

  closeForm() {
    this.modal.style.display = 'none'
  }

  bindCloseform() {
    this.closeBtn.addEventListener('click', e => {
      this.closeForm()
    })
    this.modal.addEventListener('click', e => {
      if (e.target == e.currentTarget) this.closeForm()
    })
  }

  // validator() {
  //   if(this.formInput) {
  //     this.formInput.forEach(inputElement => {
  //       if(inputElement) {
  //         let erroElement = inputElement.parentElement.querySelector('.form-message')
  //         inputElement.onblur = () => {
  //           if(inputElement.value.trim() === '') erroElement.innerText = 'This field is required'
  //         }
  //         inputElement.oninput = () => {
  //           erroElement.innerText = ''
  //         }
  //       }
  //     })
  //   }
  // }

  displayImage() {
    this.imageInput.addEventListener('change', () => {
      const file = this.imageInput.files
      const displayImg = document.querySelector('.display-img')
      if(file) {
        displayImg.src = URL.createObjectURL(file)
      }
      // let displayImg = ''
      // const reader = new FileReader()
      // reader.addEventListener('load', () => {
      //   displayImg = reader.result
      //   document.querySelector('.display-image').style.backgroundImage = `url(${displayImg})`
      // })
      // reader.readAsDataURL(this.files[0])
    })
  }

  bindAddproduct(handler) {
    this.saveProduct.addEventListener('click', e => {
      e.preventDefault()
      const productName = document.forms['formModal']['productName'].value
      const productPrice = document.forms['formModal']['productPrice'].value
      const productImg = document.forms['formModal']['productImg'].value
      const productDes = document.forms['formModal']['productDes'].value
      
      handler(productName, productPrice, productImg, productDes)
    })
    
  }

  renderProduct(productName, productPrice, productImg, productDes) {
    let content = ''
      content += `
      <div class="product-item">
        <div class="product-action">
          <button><i class="fas fa-edit"></i></button>
          <button><i class="fas fa-times"></i></button>
        </div>
        <img src="${productImg}" alt="Product image" class="product-img">
        <p class="product-name">${productName}</p>
        <p class="product-price">${productPrice} $</p>
        <p class="product-des">${productDes}</p>
      </div>` 
      this.listProduct.innerHTML = content
  }
}