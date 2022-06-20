const demoId = document.querySelector('#demo-id');
demoId.textContent = 'Demo ID text updated.';

const demoClasses = document.querySelectorAll('.demo-class')
demoClasses.forEach(element => {
  element.textContent = 'All demo classes updated.'
});
console.log(demoClasses[0])

const img = document.querySelector('img')
img.setAttribute('src', 'https://images.unsplash.com/photo-1655684936814-f5c04d7a6fa6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60')
img.src = 'https://images.unsplash.com/photo-1655710130882-fcaf3839372e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'

const firstDiv = document.querySelector('.div-1')
firstDiv.className = 'warning'

const secondDiv = document.querySelector(".active")
secondDiv.classList.add('hidden')
secondDiv.classList.remove('hidden')
// secondDiv.classList.toggle('hidden')
secondDiv.classList.replace('active', 'warning')

const thirdDiv = document.querySelector('.div-3')
thirdDiv.setAttribute('style', 'text-align: center') 
thirdDiv.style.height = '100px'
thirdDiv.style.width = '100px'
thirdDiv.style.border = '2px solid black'
thirdDiv.style.borderRadius = '50%'
thirdDiv.style.display = 'flex'
thirdDiv.style.justifyContent = 'center'
thirdDiv.style.alignItems = 'center'

