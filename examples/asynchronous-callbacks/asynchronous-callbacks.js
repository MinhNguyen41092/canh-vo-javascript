console.log('before')
setTimeout(() => {
// runs after 2 seconds
console.log('inside the function')
}, 2000)
console.log('after')

// const doSomething = (callback) => {
//   callback(123)
// }
// const myCallback = (value) => {
//   console.log('value: ', value)
// }
// doSomething(myCallback)

const doSomething = callback => {
  //do things
  //do things
  const result = 123
  callback(result)
}
const myCallback = value => {
  console.log('value:', value)
}
doSomething(myCallback)