/** 
 * validBraces("(){}[]") // => True
 * validBraces("([{}])") // => True --> LIFO -> 스택 
 * validBraces("(}") // => False
 * validBraces("[(])") // => False
 * validBraces("[({})](]") // => False
*/

/**
 * 
 * @param {string} value
 * @return Boolean 
 */
var validBraces = function(value)
{
    let dic = {"(" : ")", "{" : "}", "[" : "]"};
    let chk = false;

    let result = value.split('').reduce((ac,cv) => {
        if(cv === dic[ac[ac.length-1]])
        {
            ac.pop();
        } else{
            ac.push(cv);
        }

        return ac;
    },[]);

        return console.log(result.length === 0);

}

validBraces("(){}[]") // => True
validBraces("([{}])") // => True --> LIFO -> 스택 
validBraces("(}") // => False
validBraces("[(])") // => False
validBraces("[({})](]") // => False

