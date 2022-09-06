/**
 * ["flower","flow","flight"]
Output: "fl"
 * @param {array} strs 
 */

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

console.log(["flower","flow","flight"])
console.log(["flow"] in ["flower","flow"])