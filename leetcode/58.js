/**
 * @param {string} s
 * @return {number}
 */

// 내 풀이

 var lengthOfLastWord = function(s) {
    
    let result = []
    let flag = false
    for(let i=s.length; i > 0; i--) {
        if(s[i] !== ' ' && flag){
            result.push(s[i])
        }else if(result.length == 0) {
            flag = true
        }else {
            flag = false
            break
        }
    }
    return result.length
};

lengthOfLastWord("   fly me   to   the moon  ")

let st = "   fly me   to   the moon  "

console.log(st[0] === ' ')


//다른 사람 풀이
const solution = (s) => {
    var arr = s.trim()
    .split(" ");

    return arr[arr.length-1].length
}

solution("   fly me   to   the moon  ")