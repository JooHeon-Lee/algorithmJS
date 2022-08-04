/**
 * 형식 ) arr.reduce(callback(accumulator, currentValue [, currentIndex[, array]]) [, initialValue])
 * 
 * ex) let value = arr.reduce(function(accumulator, currentValue, currentIndex, array) {   // ... }, [initialValue]);
 * 
 * 배열(arr)의 각 element들에 대해서 
 * 파라미터로 입력받은 callback 함수를 실행하여,
 * 하나의 리턴값을 반환하는 함수입니다.
 * 
 * reduce() 함수를 사용하면, 배열을 순차적으로 순회하면서 배열의 값을 누적하는데 유용합니다.
 */

// 초기값 지정 시 [[[ 배열의 합계 구하기 ]]]
const arr = [1, 2, 3];

const result = arr.reduce(function add(sum, currValue) {
  return sum + currValue;
}, 0);


// arrow function 사용
const arr2 = [1, 2, 3];

const result2 = arr2.reduce((sum,currValue) => {
    return sum + currValue;
},0)

console.log(result); // 6

// 초기값 미 지정 시 -- 초기값은 arr3[0] 이 되지만 현재 arr3[0]에 접근 할 수 없으므로 에러 생김.
const arr3 = [];

const result3 = arr3.reduce(function add(sum, currValue) {
  return sum + currValue;
});

console.log(result); // 에러남.

// 배열의 평균 구하기

const arr5 = [1,2,3,4,5,6];

const arrSum = arr5.reduce((sum,currValue) => {
    
    return sum + currValue;
},0)

const avg = arrSum / arr5.length;

console.log("avg ::: " + arrSum);


//reduceRight() -> reduce함수와 똑같지만 배열의 오른쪽 부터 연산 함.
const arr6 = ['a', 'b', 'c'];

const result6 = arr6.reduceRight(function (str, currValue) {
  return str + currValue;
}, '');

document.writeln(result6); // cba