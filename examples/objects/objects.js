function Car(brand, model) {
  this.brand = brand
  this.model = model
}
const myCar = new Car('Ford', 'Fiesta')
console.log(myCar.brand)
console.log(myCar.model)

// Object properties
const car = {
  color: 'blue',
  'the color': 'green',
  brand: {
    name: 'ford'
  }
  }
console.log(car.color)
console.log(car['the color'])
console.log(car.brand.name)
console.log(car['brand']['name'])

car.color = 'yellow'
console.log(car.color)

car.model = 'Fiesta'
console.log(car.model)

delete car.brand
console.log(car)

// Object methods
const newCar = {
  brand: 'Ford',
  model: 'Fiesta',
  start: function() {
    console.log(`Started
    ${this.brand} ${this.model}`)
  },
  // start: () => {
  //   console.log(`Started
  //   ${this.brand} ${this.model}`) //not going to work
  //   }
  goTo: function(destination) {
    console.log(`Going to ${destination}`)
  }
}
newCar.start()
newCar.goTo('Rome')