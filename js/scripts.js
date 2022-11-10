
// Arrays
const students = ['Peter', 'Andrew', 'Ann', 'Mark',  'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
  arr.sort()
  let maxIndex = (arr.length - arr.length % 3)
  let newArr = []
  for (let i = 0; i < maxIndex; i += 3) {
    newArr.push(arr.slice(i, i + 3))
  }
  let leftStudents = 'Оставшиеся студенты: '
  if (arr.slice(maxIndex).length) {
    leftStudents += `${arr.slice(maxIndex).join(', ')}`
  } else leftStudents += '-'
  newArr.push(leftStudents)
  return newArr
}

// console.log(sortStudentsByGroups(students))

const shoppingMallData = {
  shops: [
    {
      width: 10,
      length: 5
    },
    {
      width: 15,
      length: 7
    },
    {
      width: 20,
      length: 5
    },
    {
      width: 8,
      length: 10
    }
  ],
  height: 5,
  moneyPer1m3: 30,
  budget: 50000
}

function isBudgetEnough(data) {
  let totalSquare = 0
  data.shops.forEach((value) => {
    totalSquare += value.length * value.width
  })
  let totalPrice = data.height * data.moneyPer1m3 * (totalSquare)
  if (totalPrice <= data.budget ) return 'Бюджета достаточно'
   return 'Бюджета недостаточно'
}

// console.log(isBudgetEnough(shoppingMallData))

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
  if (arr.length === 0){
    return 'Нет доступных валют'
  } else {
    // let str = ''
    arr.forEach(function (value, i){
      if (value === missingCurr){
        arr.splice(arr.indexOf(value))
      }
      // if (value !== missingCurr)
      //   str += `${value}\n`
    })
    return `Доступные валюты:\n${arr.join('\n')}`
  }
}

// console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY'))

const someString = 'This is some strange string';

function reverse(str) {
  // if (typeof (str) !== 'string')
  //   return 'Ошибка!'
  // else

  //   return str.split('').reverse().join('')

  // Variant with cycle
  let newStr =''
  for (let i = 0; i <= str.length; i +=1){
    newStr += str[str.length - i]
  }
  return newStr
}

// console.log(reverse(someString))

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
  if (arr.length === 0) return 'Семья пуста'
  else
return `Семья состоит из: ${arr.join(' ')}`
}
const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin']

function standardizeStrings(arr) {
  return arr.forEach(function (value){
    console.log(value.toLowerCase())
  } )
}

// console.log(standardizeStrings(favoriteCities))
const personalPlanPeter = {
  name: "Peter",
  age: "29",
  skills: {
    languages: ['ru', 'eng'],
    programmingLangs: {
      js: '20%',
      php: '10%'
    },
    exp: '1 month'
  },
  showAgeAndLangs: function (plan){
    return `Мне ${plan.age} и я владею языками: ${plan.skills.languages.join(' ').toUpperCase()}`
  }
}
function showExperience(plan){
  return `${plan.skills.exp}`
}
// showExperience(personalPlanPeter) => '1 month'
showExperience(personalPlanPeter)

function showProgrammingLangs(plan){
  let result =''
  for (let key in plan.skills.programmingLangs){
    if (plan.skills.programmingLangs){
      result += `Язык ${key} изучен на ${plan.skills.programmingLangs[key]} \n`
    }else { result = ''}
  }
 return result
}

showProgrammingLangs(personalPlanPeter)

// Functions

function getCoupeNumber(sitNumber) {
  if (sitNumber < 0 || isNaN(sitNumber) || !Number.isInteger(sitNumber)){
    return "Ошибка. Проверьте правильность введенного номера места"
  } else if (sitNumber === 0 || sitNumber > 36 ) {
    return "Таких мест в вагоне не существует"
  } else return Math.ceil(sitNumber / 4)

}
getCoupeNumber(4)


function getTimeFromMinutes(minutes) {
  if (minutes < 0 || isNaN(minutes) || !Number.isInteger(minutes)){
    return "Ошибка, проверьте данные"
  } else {
    const hours = Math.floor(minutes / 60)
    let finish = ''
    const lastNumber = hours % 10
    console.log(lastNumber)
    if (lastNumber === 1){
       finish = 'час'
    } else if (lastNumber > 1 && lastNumber <= 4){
      finish = 'часа'
    } else finish = 'часов'
    const leftMinutes = minutes - hours * 60
    return `Это ${hours} ${finish} и ${leftMinutes} минут`
  }
}
getTimeFromMinutes('888cf')

// getTimeFromMinutes(150) => "Это 2 часа и 30 минут"

function findMaxNumber(a, b, c, d) {
  if (typeof(a) !== 'number' || typeof(b) !== 'number' || typeof(c) !== 'number' || typeof(d) !== 'number')  {
    return 0}
  else return Math.max(a, b, c, d)

}
findMaxNumber(1, 5, '6', '10')
// findMaxNumber(1, 5, 6.6, 11); =>  11


// Fibonachi

function fib (number) {
  let num = []
  let result = ''
  if (typeof(number) !== 'number' || !Number.isInteger(number)) return ''
  for (let i = 0; i < number; i+=1 ) {
    if (i === 0){
      num[0] = 0
    } else if (i === 1){
      num[1] = 1
    } else{
      num[i] = num[i-1] + num[i-2]
    }
    if (i === 0){
      result = result + `${num[i]}`
    } else {
      result = result + ` ${num[i]}`
    }
  }
  return result
}

function fib2(number){
  let result = ''
  let first = 0
  let second = 1

  for (let i = 0; i < number; i +=1){
    if (i === number){
      result += `${first}`
    } else {
      result += `${first} `
    }
    let third = first + second
    first = second
    second = third
  }
  return result
}
// fib (8)


