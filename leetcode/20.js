/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 */

const solution = (s) => {
    
    const map = {
        "(" : ")",
        "{" : "}",
        "[" : "]"
    }

    const result = s.split('').reduce((ac,v,i) => {

        if(v == map[ac[ac.length-1]]) {
            ac.pop()
        }else {
            ac.push(v)
        }

        return ac
    },[])
    return result.length === 0
}

const map = {
    "(" : ")",
    "{" : "}",
    "[" : "]"
}

console.log(solution("(])"))