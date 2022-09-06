/**
 * ["flower","flow","flight"]
Output: "fl"
 * @param {array} strs 
 */

//str 하나를 기준으로 str[][] 요소 다 비교. false 되면 slice
const solution = (strs) => {

    if(!strs.length) return '';
    
    for(let i = 0; i < strs[0].length; i++) { // i = f, l, o, w, e, r
        for(let s of strs) { // s = flower, flow, flight

            if(s[i] !== strs[0][i]) {
                return s.slice(0, i);
            }
        }
    }
    return strs[0];
}

solution(["flower","flow","flight"])