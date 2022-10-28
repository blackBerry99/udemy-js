// Место для первой задачи
function firstTask() {
  // Пишем решение вот тут
  for (let i = 5; i <= 10; i +=1){
    console.log(i)
  }

}

// Место для второй задачи
function secondTask() {
  // Пишем решение вот тут
  for (let i = 20; i >= 10; i -=1){
    console.log(i);
    if (i === 13) {
      break;
    }
  }

}

// Место для третьей задачи
function thirdTask() {
  // Пишем решение вот тут
  for (let i = 2; i <= 10; i += 1){
    if (i%2 === 0) {
      console.log(i);
    }
  }

}

// Место для четвертой задачи

// Цикл, который нужно переписать:

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

function fourthTask() {
  // Пишем решение вот тут
  let i = 2;
  while (i <= 16) {
    if (i % 2 !== 0){
      console.log(i);
    }
    i +=1;
  }

}

// Место для пятой задачи

function fifthTask() {
  const arrayOfNumbers = [];

  first: for (let i = 5; i <= 10; i += 1){
    for (let j = i - 5; j <= 5; j += 1){
      arrayOfNumbers[j] = i;
      continue first;
    }
  }
  return arrayOfNumbers;
}


function firstTask() {
  // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
  const arr = [3, 5, 8, 16, 20, 23, 50];
  const result = [];

  // Пишем решение вот тут


  // Не трогаем
  return result;
}
