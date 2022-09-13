/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 * Input: a = "11", b = "1"
    Output: "100"
    Example 2:

    Input: a = "1010", b = "1011"
    Output: "10101"

    1. a의 끝자리와 b의 끝자리 더하기
    2. 2이상이면 0으로 치환 해주고 carry=true
    3. 
 */
 var addBinary = function(a, b) {
    let sum = String(Number(a) + Number(b))
    let result = []
    let carry = false

    for(let i=sum.length; i>=0; i--) {
        if(carry) {
            let val = sum[i] + 1
        }else {
            let val = sum[i]
        }
        
        if(val == 2) {
            result.push(0)
            carry = true
        }else {
            result.push(Number(sum))
            carry = false
        }
        if(i == 0 && carry) {
            result.unshift(val)
        }
        
    }




};

console.log(
    addBinary("11","1"))