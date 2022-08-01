/*
arr.map(callback(currentValue[, index[, array]])[, thisArg])

배열(arr)의 각각의 element들이 callback 함수의 파라미터로 전달되고,
map() 함수는 이 callback 함수가 return 하는 값으로 새로운 배열을 만들어서 리턴합니다.

*/

const arr1 = [1, 2, 3, 4];

const arr2 = arr1.map((currValue) => currValue + 1);
const arr3 = arr1.map(function add(currValue) {
  return currValue + 1;
})

document.writeln(arr1 + '<br>'); // [1, 2, 3, 4]
document.writeln(arr2 + '<br>'); // [2, 3, 4, 5]
document.writeln(arr3 + '<br>'); // [2, 3, 4, 5]

const a = [1, 2, 3, 4];

const a2 = a.map(function add(currValue) {
  currValue = currValue + 1;
})

document.writeln(a + '<br>'); // [1, 2, 3, 4]
document.writeln(a2[0] + '<br>'); // undefined