const body = document.querySelector('body')
body.style.fontFamily = 'Arial, sans-serif'

const nickName = document.querySelector('#nickname')
const favorites = document.querySelector('#favorites')
const homeTown = document.querySelector('#hometown')

nickName.textContent = 'CanhVo'
favorites.textContent= 'Football'
homeTown.textContent= 'Quang Binh'

const li = document.querySelectorAll('li')
li.forEach((item) => {
  item.className = 'list-item'
})

const myImg = document.createElement('img');
myImg.src = 'https://scontent.fdad3-1.fna.fbcdn.net/v/t31.18172-8/20988563_491709794495981_5817802086377252193_o.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=QH7DpPg-Kg0AX8S1_3A&tn=A9S2bo-3KQLOc0pl&_nc_ht=scontent.fdad3-1.fna&oh=00_AT8ApvV2R9yfi2ULDNKSI9QTsUdnYCw9xntAF-LKIKCfjw&oe=62D561B4'
document.body.appendChild(myImg);
myImg.style.width = '300px'