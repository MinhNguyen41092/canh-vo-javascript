const doSomething = new Promise(
  (resolve, reject) => {
  //some code
  const success = 1
  if (success) {
  resolve('ok')
  } else {
  reject('this error occurred')
  }
  }
  )
  doSomething.then(() => {
    console.log('ok')
  })
  doSomething.catch(() => {
    console.log('erro')
  })
 