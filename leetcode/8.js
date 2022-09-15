/**
 * @param {string} s
 * @return {number}
 */
 var myAtoi = function(s) {
    const MinNum = -2147483648
    const MaxNum = 2147483647

    let result = parseInt(s)

    if(result > MaxNum) return MaxNum
    if(result < MinNum) return MinNum

    return result

};


myAtoi('     -42')


let s = '   -42'
let s1 = '4193 with words'
let s2 = 'words and 987'
let arr = s2.split(' ')
console.log(arr)


// 1. 선행 공백 무시.
// 2. - 또는 + 기호 찾기.
// 3. 숫자 찾기.
// 4. 1단계 후 문자 나오면 return 0
// 5. 모든 단계 후 숫자 범위 확인



const solution = (str) => {
    const MinNum = -2147483648
    const MaxNum = 2147483647

    let nStr = s.trimStart().split('') // 선행 공백 제거
    let result = ''
    for(let i=0; i< nStr.length; i++) {
        if(i > 0 &&( nStr[i] === ' ' || isNaN(Number(nStr[i])))) break;

        result += nStr[i]
    }
    if(result.length === 0) return 0

    if(Number(result) > MaxNum) return MaxNum
    if(Number(result) < MinNum) return MinNum

    return isNaN(Number(result)) ? 0 : Number(result)
}

solution('       -42    ')

/**
 * @param {string} s
 * @return {number}
 */
 var myAtoi = function(s) {
    const MinNum = -2147483648
    const MaxNum = 2147483647

    let nStr = s.trimStart().split(' ') // 선행 공백 제거
    if(isNaN(parseInt(nStr[0]))) return 0
    
    if(parseInt(nStr[0]) > MaxNum) return MaxNum
    if(parseInt(nStr[0]) < MinNum) return MinNum

    return parseInt(nStr[0])

};