// 2.1 Modify the style of the paragraph text through javascript code
const js_style = () => {
  const text = document.querySelector('#text')
  text.style.color = 'red'
  text.style.fontWeight = 'bold'
  text.style.fontSize = '22px'
}

// 2.2 Write a JavaScript function to get the values of First and Last name of the following form.
const getFormvalue = () => {
  const input = document.querySelectorAll('input')
  input.forEach(item => {
    if(item.type === 'text') alert(item.value)
  })
 }

// 2.3 Write a JavaScript program to set the background color of a paragraph
const setBg = document.querySelector('.setBg')
setBg.style.marginTop = '20px'
setBg.onclick = () => {
  const text = document.querySelector('.text-3')
  text.style.backgroundColor = 'green'
}

// 2.4 Write a JavaScript function to get the value of the href, hreflang, rel, target, 
//     and type attributes of the specified link.
const getAttributes = () => {
  const link = document.querySelector('#w3r')
  console.log(link.href)
  console.log(link.hreflang)
  console.log(link.rel)
  console.log(link.target)
  console.log(link.type)
}

// 2.5 Write a JavaScript function to add rows to a table
const insert_Row = () => {
  const tbody = document.querySelector('#sampleTable tbody')
  const tr = document.createElement('tr')
  tbody.appendChild(tr)
  const td = document.createElement('td')
  td.textContent = 'Content'
  tr.appendChild(td)
}

// 2.6 Write a JavaScript function that accept row, column, (to identify a particular cell) 
//     and a string to update the content of that cel
const changeContent = () => {
rn = window.prompt("Input the Row number(0,1,2)", "0");
cn = window.prompt("Input the Column number(0,1)","0");
content = window.prompt("Input the Cell content");  
const x=document.getElementById('myTable').rows[parseInt(rn,10)].cells;
x[parseInt(cn,10)].innerHTML=content;
}

//  2.7 Write a JavaScript function that creates a table, accept row, column numbers from the user, 
//      and input row-column number as content (e.g. Row-0 Column-0) of a cell.
const createTable = () => {
  const row = document.querySelector('input[name=row]').value
  const col = document.querySelector('input[name=col]').value

  for(let r=0;r<parseInt(row,10);r++)
  {
   let x=document.getElementById('secondTable').insertRow(r)
   console.log(x)
   for(let c=0;c<parseInt(col,10);c++)  
    {
     var y=  x.insertCell(c)
     y.innerHTML=`Row-${r} Column-${c}`
    }
   }
}

// 2.8 Write a JavaScript program to remove items from a dropdown list
const removecolor = () => {
  const select = document.getElementById('colorSelect')
  select.remove(select.selectedIndex)
}

// 2.9 Write a JavaScript program to count and display the items of a dropdown list, in an alert window.
const getOptions = () => {
  const option = document.querySelectorAll('#mySelect option')
  var x = 0
  var str = 'option:'
  for(let i=0; i<option.length; i++) {
    x+=1
    str = `${str} ${option[i].label}`
  }
  alert(`${str}; count: ${x}`)
}

// 2.10 Write a JavaScript program to calculate the volume of a sphere.
const calculateForm = document.querySelector('#calculateForm')
calculateForm.addEventListener('submit',(e) => {
  e.preventDefault()
  const value = calculateForm.querySelector('input[name="radius"]').value
  const result = (4*Math.PI*parseInt(value)**3)/3
  const volume = calculateForm.querySelector('input[name="volume"]')
  volume.value= result.toFixed(4)
})

// 2.11  Write a JavaScript program to display a random image 
const img_array = [
  "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg",
  "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg", 
  "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg",
]

const display_random_image = () => {
  randomIndex = Math.floor(Math.random() * img_array.length)
  selected_image = img_array[randomIndex]
  document.querySelector('#img_shower').src = `${selected_image}`
}

// 2.12 Write a JavaScript program to highlight the bold words of the following paragraph, 
//      on mouse over a certain link
const highLight = document.querySelector('.high-light')

highLight.addEventListener('mouseenter', () => {
  const boldWords = document.querySelectorAll('strong')
  boldWords.forEach(item => {
    item.style.color = 'blue'
    item.style.fontSize = '20px'
  })
})

highLight.addEventListener('mouseleave', () => {
  const boldWords = document.querySelectorAll('strong')
  boldWords.forEach(item => {
    item.style.color = 'unset'
    item.style.fontSize = 'unset'
  })
})

// 2.13 Write a JavaScript program to get the width and height of the window
const windowBtn = document.querySelector('.window-btn')
windowBtn.addEventListener('click', () => {
  alert(`widht: ${screen.width}, height ${screen.height}`)
})