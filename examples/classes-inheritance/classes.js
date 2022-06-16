class Person {
  // name

  // hello() {
  //   return 'Hello, I am Flavio'
  // }
  constructor(name) {
    this.name = name
    }
    hello() {
    return 'Hello, I am ' + this.name + '.'
  }
  static genericHello() {
    return 'Hello'
  }
}

// const flavio = new Person()
// flavio.name = 'Flavio'
// console.log(flavio.name)
// const title = new Person()
// console.log(title.hello())
const canh = new Person('canh')
console.log(canh.hello())
console.log(Person.genericHello())

class Programmer extends Person {}

const canhvo = new Programmer('Duc Canh')
console.log(canhvo.hello())



