var books = [
  {
    title: 'The Design of EveryDay Things',
    img: 'http://ecx.images-amazon.com/images/I/41j2ODGkJDL._AA115_.jpg',
    author: 'Don Norman',
    alreadyRead: false
  },
  {
    title: 'The Most Human Human',
    img: 'http://ecx.images-amazon.com/images/I/41Z56GwEv9L._AA115_.jpg',
    author: 'Brian Christian',
    alreadyRead: true
}]; 

const bookList = document.createElement('ul')
books.forEach(item => {
  bookItem = document.createElement('li')
  bookList.appendChild(bookItem)
  bookImg = document.createElement('img')
  bookImg.src = item.img
  bookItem.appendChild(bookImg)
  const bookDes = document.createTextNode(`${item.title} by ${item.author}`)
  bookItem.appendChild(bookDes)
  if(item.alreadyRead) bookItem.style.color = '#E6E6FA'
})

document.body.appendChild(bookList)

