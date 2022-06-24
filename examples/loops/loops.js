// while loops
console.log('while loops examples:')
const whileList = ['a', 'b', 'c']
let i = 0
while (i < whileList.length) {
console.log(whileList[i]) //value
console.log(i) //index
i = i + 1
}

while (true) {
  if (true) {
    console.log('hello')
  }
  break
}

const whileList2 = ['a', 'b', 'c']
let x = 0
do {
console.log(whileList2[x]) //value
console.log(x) //index
x = x + 1
} while (x < whileList2.length && whileList[x] === 'c')

// for loops
console.log('for loops examples:')
const forList = ['a', 'b', 'c']
for (let i = 0; i < forList.length; i++) {
console.log(forList[i]) //value
console.log(i) //index
}

const forList2 = ['a', 'b', 'c']
for (const value of forList2) {
  console.log(value) //value
}