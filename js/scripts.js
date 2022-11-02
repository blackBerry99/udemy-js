// Место для первой задачи
function sayHello(name) {
  return 'Привет, ' + name
}

// Место для второй задачи
function returnNeighboringNumbers(number) {
  let arr = []
  arr[0] = number -1
  arr[1] = number
  arr [2] = number + 1
  return arr
}

// Место для третьей задачи
function getMathResult(base, iterator) {
  let result = 0
  let resultString = ''
  if (iterator <= 0 || typeof(iterator) !="number"){
    resultString = base
  }
  for (let i = 1; i <= iterator; i +=1){
    result += base
    if (i === iterator) {
      resultString +=result
    } else resultString +=result + '---'
  }
  return resultString
}
