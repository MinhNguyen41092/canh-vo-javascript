const getData = () => {
  return new Promise((resolve, reject) => {
  setTimeout(() =>
  resolve('some data'), 2000)
  })
  }
  const doSomething = async () => {
    const data = await getData()
    console.log(data)
    }
doSomething()

const getFirstUserData = async () => {
  // get users list
  const response = await fetch('./users.json')
  console.log(response)
  // parse JSON
  const users = await response.json()
  console.log(users[0])
  }
getFirstUserData()