/**
 * 
 * 동적 프로그래밍 ? ( 기억하기 프로그래밍)
 * -> 테이블을 만든다는 의미
 * 
 * 메모이제이션 ? :: Top-Down 
 * ->재귀 호출 시, 이전에 계산했던 값들을 저장해두었다가 재사용 하는 방법.
 *   메모이제이션은 동적 프로그래밍 방법 중 하나.
 * 
 * 상향식 계산법 :: Bottom-up
 * 
 * 메모이제이션보다 상향식 계산법이 성능이 좋은 경우가 더 많음.
 * 
 * 
 */

//상향식 계산법

var c = (s,numRows) => {
    if(s.length <= numRows || numRows < 2) return s
    const len = s.length
    const num = 2 * (numRows - 1)

    let res = Array(numRows).fill('')
    let tmp = 0

    for(let i=0; i< len; i++) {
        tmp = i % num
        console.log(`tmp : ${tmp}`)
        if( tmp < numRows) {
            res[tmp] += s[i]
        }else {
            res[num - tmp] += s[i]
        }
    }

    return res.join('')
}

c('PAYPALISHIRING',4)