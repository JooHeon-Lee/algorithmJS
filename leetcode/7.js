/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    const MinNum = -2147483648
    const MaxNum = 2147483647
    let re = String(x).split('')
    let result = []
    let dash = false
    let ans = 0
    for(let i=0; i<re.length; i++) {
        if(re[i] === '-') {
            dash = true
            continue
        }
        result.unshift(re[i])
    }

    if(dash) {
     result.unshift('-')
     ans = Number(result.join(''))
        if (ans > MaxNum || ans < MinNum) {
          return 0;
        }
    }else {
     ans = Number(result.join(''))
     if(ans > MaxNum) return 0   
    }
    
    return ans
    
};
    
