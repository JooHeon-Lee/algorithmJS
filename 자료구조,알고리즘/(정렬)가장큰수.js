/**
 * [6, 10, 2]	"6210"
 * [3, 30, 34, 5, 9]	"9534330"
 * 
 */


const solution = (array) => {

    let list = [];
    let result = array.map(c => c+ '').sort((a,b) => (b+a) - (a+b)).join('');
    // 1. map 함수 사용해서 배열의 모든 값을 형 변환
    // 2. sort 함수를 이용해서 정렬 ex) 106 - 610 => - 이므로 그대로 210 - 102 양수 이므로 변경 하면 6,2,10 으로 정렬됨.
    // 3. join함수를 통해 배열 붙이기(string 형식으로)

    console.log(result[0]);

    return result[0] === '0' ? '0' : result
}

solution([6,10,2]);