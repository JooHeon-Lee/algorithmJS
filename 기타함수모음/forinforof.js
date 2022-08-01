/**
 * for...of 는 ES6에 추가된 문법입니다. 이 반복문은 배열 또는 map객체 등 iterable 객체의 값들을 순회할 수 있습니다.
 */


// 1. 배열 

const arr = [1,2,3,4,5];

for(element of arr)
{
    console.log(element);
}

// 2. 문자열

const str = 'apple';

for(element of str)
{
    console.log(element);
}

// 3.Map

const map = new Map();

map.set('key1','value1');
map.set('key2','value2');

for(element of map)
{
    console.log(`${element[0]}, ${element[1]}` ) // [key, value] 형태의 배열 객체를 하나씩 가져옵니다.
}

// 4. set

const set = new Set();

set.add("value1");
set.add("value2");

for(element of set)
{
    console.log(element); // 한개씩 값을 가져옴.
}