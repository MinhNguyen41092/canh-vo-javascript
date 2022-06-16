const a = [1, 2, 3]
console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(`lenght: ${a.length}`)
a.length=2
console.log(a)
a.push(4)
console.log(a)
a.unshift(0)
console.log(a)
a.unshift(-2, -1)
console.log(a)
a.pop()
console.log(a)
a.shift()
console.log(a)
console.log(a.includes(1))
console.log(a.includes(8))

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
console.log(matrix[0][0])
console.log(matrix[2][0])

const b = Array(12).fill(0)
console.log(b)

const c = [1, 2]
const d = [3, 4]
const e = c.concat(d)
console.log(e)
const f = [...c, ...d]
console.log(f)

const my_id = 2
let customers = [
  {
    id: 0,
    name: 'A',
  },
  {
    id: 1,
    name: 'C',
  }, 
  {
    id: 2,
    name: 'D',
  },  
]
console.log(customers.find(c => c.id === my_id))