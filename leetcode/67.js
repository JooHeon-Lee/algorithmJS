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
    const aLen = a.length
    const bLen = b.length

    let aidx = aLen - 1 
    let bidx = bLen - 1
    let carry = 0
    let result = []

    while(aidx >=0 && bidx >= 0) {
        const val = Number(a[aidx]) + Number(b[bidx])
        if(val > 1) {
            carry = val - 1
        }else {
            result.unshift(val)
        }

        if(carry == 1) {
            result.unshift(1)
        }
        aidx--
        bidx--
    }
    console.log(result)

    
return result.join('')


};

console.log(
    addBinary("11","1"))




    /**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let carry = 0 
    const res = []

    const aLen = a.length;
    const bLen = b.length;

    for (let i = aLen - 1, j = bLen - 1; 0 <= (i >= j ? i : j) || 0; --i, --j) {
        let aBin = i >= 0 ? Number(a[i]) : 0;
        let bBin = j >= 0 ? Number(b[j]) : 0;

        res.push((aBin + bBin + carry) % 2);
        carry = aBin + bBin + carry > 1

    }
    if (carry) {
        res.push(1)
    }
    return res.reverse().join('')
};