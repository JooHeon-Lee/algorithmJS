/*
arr                      cmd                                 result
[1, 5, 2, 6, 3, 7, 4]	[[2, 5, 3], [4, 4, 1], [1, 7, 3]]	[5, 6, 3]
입출력 예 설명
[1, 5, 2, 6, 3, 7, 4]를 2번째부터 5번째까지 자른 후 정렬합니다. [2, 3, 5, 6]의 세 번째 숫자는 5입니다.
[1, 5, 2, 6, 3, 7, 4]를 4번째부터 4번째까지 자른 후 정렬합니다. [6]의 첫 번째 숫자는 6입니다.
[1, 5, 2, 6, 3, 7, 4]를 1번째부터 7번째까지 자릅니다. [1, 2, 3, 4, 5, 6, 7]의 세 번째 숫자는 3입니다.*/


const solution = (array, commands) => {
    let result = [];
     let sliceArr = commands.reduce((ac,v,i) => {
     let t = [];
     
     if(v[0] == v[1]) {
         t = [array[v[0]-1]];
     }else {
         t = array.slice(v[0]-1,v[1]).sort((a,b) => {return a-b});
     }
 
     result.push(t[v[2]-1]);
     return ac;
 
 },[]);
 
     return result
 }