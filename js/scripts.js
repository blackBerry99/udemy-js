
// function firstTask() {
//   // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//   const data = [5, 10, 'Shopping', 20, 'Homework'];
//   const result = [];
//
// for (let i = data.length - 1; i >= 0; i -= 1){
//   result[i] = data[data.length -1 - i]
//   console.log(result)
// }
//   // console.log(result)
//   // Не трогаем
//   return result;
// }
// firstTask()




const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) {
  for (let j = 0; j <= lines - i; j++) {
    result += " ";
  }
  for (let j = 0; j < 2 * i + 1; j++) {
    result += "*";
  }
  result += "\n";
}

console.log(result)
