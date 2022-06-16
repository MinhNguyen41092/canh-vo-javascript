function getData(color, age) {
console.log(color,age)
}
getData('green', 24)
getData('black')

function exReturn() {
  return ['Flavio', 37]
  }
let result = exReturn()
console.log(result)

const getData2 = () => {
  const dosomething = () => {
    console.log('hello')
  }
  dosomething()
}
getData2()

// Arrow Functions
let getName = () => {
  console.log('My name is')
}
getName()

const helloWord = () => console.log('hello word')
helloWord()

const getParam = (param1, param2) =>
console.log(param1, param2)
getParam(1,2)

const getParam2 = param => console.log(param)
getParam2('param')