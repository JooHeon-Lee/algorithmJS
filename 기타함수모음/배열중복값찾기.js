/**
 * 
 * 배열에 있는 값들이 몇번 중복되었는지 찾기
 * 
 * 1. forEach() 이용하기
 * 2. reduce() 이용하기
 * 3. Map 객체 이용하기

 */

//1. forEach() 이용하기
 const arr = ['a', 'b', 'a', 'b', 'c'];

 const result = {};
 arr.forEach((x) => { 
   result[x] = (result[x] || 0)+1; 
   // -> if(result[x])	{	result[x] = result[x] + 1;}else {    result[x] = 0 + 1;}

 });
 
 console.log(JSON.stringify(result));


 //  * 2. reduce() 이용하기
 const arr2 = ['a', 'b', 'a', 'b', 'c'];

 const result2 =  arr2.reduce((ac,v,i) => {
    ac[v] =  ac[v] ? ac[v] += 1 : ac[v] =  1;
    //  accu[curr] = (accu[curr] || 0)+1;  이거랑 같음

    return ac;
 },{});

 console.log(result2);

 // 3. Map 객체 사용하기

 const arr3 = ['a', 'b', 'a', 'b', 'c'];

 const result3 = arr3.reduce((accu,curr)=> {
   accu.set(curr, (accu.get(curr)||0) +1) ;
   return accu;
 },new Map());
 
 for (let [key, value] of result.entries()) {
   document.write(key + ' : ' + value + '<br>');
 }
 // =>Map 은 객체를 key로 지정 가능. 