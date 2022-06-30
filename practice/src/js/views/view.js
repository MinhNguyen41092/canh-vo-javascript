export default class View {
  constructor() {
    this.formModal = this.getElement('.form-modal')
    this.addBtn = this.getElement('#open-form')
    this.closeBtn = this.getElement('#close-form')
    this.modal = this.getElement('.modal')
    // this.erroMessage = this.getElement('.form-message')
    this.formInput = document.querySelectorAll('.form-input')
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

  validator() {
    if(this.formInput) {
      this.formInput.forEach(inputElement => {
        if(inputElement) {
          let erroElement = inputElement.parentElement.querySelector('.form-message')
          inputElement.onblur = () => {
            if(inputElement.value.trim() === '') erroElement.style.display = 'block'
          }
          inputElement.oninput = () => {
            erroElement.style.display = 'none'
          }
        }
      })
    }
  }

  
}