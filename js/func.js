// Замикання
// let num = 5; debugger
// function logNumber () {
//   // let num = 4;  // 1. num = undefined;   2. num = 4; local (num = 4); script(external) (num = 6)
//   console.log(num); debugger
// }
// num = 6; debugger
// logNumber()
//
// num = 8; debugger
// logNumber()

function createCounter () {
  let counter = 0
  const myFunction = function (){ debugger
    counter = counter + 1; debugger
    return counter; debugger
  }
  return myFunction
}
debugger
const increment = createCounter(); debugger
const c1 = increment(); debugger
const c2 = increment(); debugger
const c3 = increment(); debugger
// console.log(c1, c2, c3)

const restorantData = {
  menu: [
    {
      name: 'Salad Caesar',
      price: '14$'
    },
    {
      name: 'Pizza Diavola',
      price: '9$'
    },
    {
      name: 'Beefsteak',
      price: '17$'
    },
    {
      name: 'Napoleon',
      price: '7$'
    }
  ],
  waitors: [
    {name: 'Alice', age: 22}, {name: 'John', age: 24}
  ],
  averageLunchPrice: '20$',
  openNow: true
};

function isOpen(prop) {
  let answer = '';
  prop ? answer = 'Закрыто' : answer = 'Открыто';

  return answer;
}

console.log(isOpen(restorantData.openNow))


function isAverageLunchPriceTrue(fDish, sDish, average) {
  if (+fDish.price.slice(0, -1) + (+sDish.price.slice(0, -1)) < +average.slice(0, -1)) {
    return 'Цена ниже средней';
  } else {
    return 'Цена выше средней';
  }
}

console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));
 // todo
function transferWaitors(data) {
  const copy = {}
  for ( let key in data){
    copy[key] = data[key]
  }

  copy.waitors[0] = {name: 'Mike', age: 32};
  return copy;
}

transferWaitors(restorantData);

const copy ={}
for (let key in restorantData){
  copy[key] = restorantData[key]
}
copy.waitors = {name: 'Mike', age: 32};
// console.log(restorantData)
