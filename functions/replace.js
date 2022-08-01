/** 
 * replace() 함수는 문자열에서 변경하려는 문자열이 여러 번 반복될 경우, 첫 번째로 발견한 문자열만 치환해 줍니다.
 * ex) eplacT('banana', 'tomato')를 실행하면 첫번째로 발견된 'banana'만 치환되어 'apple, tomato, banana' 로 됨.
 * 
 * 
 * 
 
*/

//모든 문자열 치환 하는 법. 
let str = 'apple, banana, orange, banana';
let replaced_str = str.replace(/banana/g, 'tomacto'); // => g :> global match 

console.log('변경 전 : ', str, '<br/>'); // apple, banana, orange, banana
console.log('변경 후 : ', replaced_str, '<br/>'); // apple, tomato, orange, tomato

// 대소문자 구분 없이 치환

let str2= 'apple, Banana, orange';
let replaced_str2 = str2.replace(/banana/i, 'tomato'); // => i:> ignore case

console.log('변경 전 : ', str2, '<br/>'); // apple, Banana, orange
console.log('변경 후 : ', replaced_str2, '<br/>'); // apple, tomato, orange

// 모든 문자열 대소문자 구분 없이 치환

let str3 = 'apple, Banana, orange, banana';
let re = str3.replace(/banana/gi,'tomato')

console.log('변경 전 : ', str3, '<br/>');//  apple, Banana, orange, banana
console.log('변경 후 : ', re, '<br/>'); // apple, tomato, orange, tomato