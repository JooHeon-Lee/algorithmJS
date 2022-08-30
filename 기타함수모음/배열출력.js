/**
 * 
 * 배열 출력하는 모든 방법 정리
 * 
 * 1. for
 * 2. forEach()
 * 3. for in
 * 4. for of
 */

//1. for
// 배열 선언
const arr = ['A', 'B', 'C'];

// 배열 출력 (for 문)
for(let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

//2. forEach()

const arr2 = ['A', 'B', 'C'];

// 배열 출력 (forEach)
arr2.forEach(element => {
  console.log(element);
})

//3. for in
//for...in을 사용하여 객체의 key를 가져올 수 있습니다. -> key = index

// 배열 선언
const arr3 = ['A', 'B', 'C'];

// 배열 출력 (for in)
for(let index in arr3) {
  console.log(arr3[index]);
}

//4. for of
/*
 for...of는 배열을 포함한 iterable 객체를 순회하는 반복문입니다.
 for...in이 배열의 index를 참조하는 것과 달리
 for...of는 배열의 element 값을 참조할 수 있습니다.
*/
// 배열 선언
const arr4 = ['A', 'B', 'C'];

// 배열 출력 (for of)
for(let element of arr4) {
  console.log(element);
}