/*
이 함수가 a, b 두개의 element를 파라미터로 입력받을 경우,
이 함수가 리턴하는 값이 0보다 작을 경우,  a가 b보다 앞에 오도록 정렬하고,
이 함수가 리턴하는 값이 0보다 클 경우, b가 a보다 앞에 오도록 정렬합니다.
만약 0을 리턴하면, a와 b의 순서를 변경하지 않습니다.

*/

//sort() 함수로 숫자 오름차순 정렬하기

const arr = [2, 1, 3, 10];

arr.sort(function(a, b)  {
  return a - b;
});
document.writeln(arr + '<br>'); // [1, 2, 3, 10]

//sort() 함수로 숫자 내림차순 정렬하기
const arr2 = [2, 1, 3, 10];

arr2.sort(function(a, b)  {
  return b - a;
});
document.writeln(arr2 + '<br>'); // [10, 3, 2, 1]
