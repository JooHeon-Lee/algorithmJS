/**
 *   s	     answer
 * "()()"	true
 * "(())()"	true
 * ")()("	false
 * "(()("	false
 */


const solution = (s) => {
    let stackCnt = 0;
    let arr = s.split('');
    for(let i=0; i<arr.length; i++) {
        arr[i] === '(' ? stackCnt += 1 : stackCnt -= 1;
        if(stackCnt < 0) return false;
        
    }

    return stackCnt == 0 ? true : false;
}

solution(")()()");