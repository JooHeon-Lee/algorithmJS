
/**
 * 
 * I             1
V             5
X             10
L             50
C             100
D             500
M             1000
 * @param {String} s 
 */

const solution = (s) => {

    let result = 0;
    const value = {
        "I" : 1,
        "V" : 5,
        "X" : 10,
        "L" : 50,
        "C" : 100,
        "D" : 500,
        "M" : 1000 
    }
    for(let i=0; i<s.length; i++){
        let current = value[s[i]];
        let next = value[s[i+1]];
        
        if(current < next) {
            result += next - current;
            i++;
        }
        else{
            result += current;
        }
    }
    return result;
}
solution("III")



const str = "III"
console.log(str.split(''))


const dd = (s) => {
    //조건식을 쓰지말고 조금 더 논리적으로 생각해보기..... 
    // 규칙을 보면 앞문자와 뒷문자의 숫자 크기 차이로 해결 가능함...
    const map = {
        "I" : 1,
        "V" : 5,
        "X" : 10,
        "L" : 50,
        "C" : 100,
        "D" : 500,
        "M" : 1000,
        "IV" : 4,
        "IX" : 9,
        "XL" : 40,
        "XC" : 90,
        "CD" : 400,
        "CM" : 900
    }
    let sum = 0
    let jump = false

    for(let i=0; i< s.length; i++) {

        if(jump) {
            jump = false
            continue
        }else {
            if((s[i] == "I" && (s[i+1] == "V" || s[i+1] == "X")) || (s[i] == "X" && (s[i+1] == "L" || s[i+1] == "C")) || (s[i] == "C" && (s[i+1] == "D" || s[i+1] == "M"))){
                sum += map[s[i].concat(s[i+1])]
                jump = true
            }else {
                sum += map[s[i]]     
            }
        }
    }

    console.log(sum)
}

dd("MCMXCIV")