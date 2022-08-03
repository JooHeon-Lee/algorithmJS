/**
 *  배열을 합치는것은 총 세가지의 방법이 존재함.
 *  1. concat
 *  2. 전개 연산자 사용 (...)
 *  3. push 함수 사용 -> 전개 연산자를 같이 쓰지 않으면 파라미터를 하나의 원소로 처리함.
 */

// 1. concat 함수
const arr = [1, 2, 3];
const newArr = arr.concat('a', ['b', 'c'], 'abc');

document.writeln(arr + '<br>'); // [1, 2, 3]
document.writeln(newArr.length + '<br>'); // 7
document.writeln(newArr); // [1, 2, 3, 'a', 'b','c', 'abc']

// 2. 전개 연산자( spread operator ) 사용
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];

const newArr2 = [
  ...arr1,
  ...arr2,
  ...arr3
];

document.write(newArr2.length + '<br>');
document.write(newArr2);

// 3. push 함수 사용
// 전개 연산자를 같이 쓰지 않으면 파라미터로 받은 배열을 하나의 원소로 처리
const arr5 = [1, 2, 3];
const arr6 = [4, 5, 6];

arr5.push(arr6);

document.write(arr5.length + '<br>'); // 4
document.write(arr5[0] + '<br>'); // 1 
document.write(arr5[1] + '<br>'); // 2
document.write(arr5[2] + '<br>'); // 3
document.write(arr5[3] + '<br>'); // [4, 5, 6]

// push 함수 사용시 전개 연산자도 같이 사용
const arr7 = [1, 2, 3];
const arr8 = [4, 5, 6];

arr7.push(...arr8);

document.write(arr7.length + '<br>'); // 6
document.write(arr7[0] + '<br>'); // 1 
document.write(arr7[1] + '<br>'); // 2
document.write(arr7[2] + '<br>'); // 3
document.write(arr7[3] + '<br>'); // 4
document.write(arr7[4] + '<br>'); // 5
document.write(arr7[5] + '<br>'); // 6

