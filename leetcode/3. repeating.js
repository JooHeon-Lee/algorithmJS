/**
 * Input: s = "abcabcbb"
Output: 3
 */

const solution = (s) => {
    if (s.length < 2) return s.length;
    let cur = ''
    let maxLen = 0
    for(let i=0; i< s.length; i++) {
      
        cur = cur.substring(cur.indexOf(s[i]) + 1)

        cur += s[i]

        if (cur.length > maxLen) maxLen = cur.length;

    }
    return maxLen
}


console.log(solution("abcabcbb"))




/**
 * a 입력 b 입력 c 입력  b 입력 b입력!
 * 
 */