const solution = (s) => {
let answer = "";
//정규표현식 활용->찾는 문자열 또는 숫자기준으로 매치 
s = s.match(/zero|one|two|three|four|five|six|seven|eight|nine+|[0-9]/g); 
    //객체 이용 
let change = { 
    "zero" : 0, 
    "one" : 1, 
    "two" : 2, 
    "three" : 3, 
    "four" : 4, 
    "five" : 5, 
    "six" : 6, 
    "seven" : 7, 
    "eight" : 8, 
    "nine" : 9 
} 

for(let x of s){ //객체에 해당 key가 있으면 value 삽입. 없으면 문자열 x삽입 
    answer += change[x] === undefined ? x : change[x] 
} //숫자형으로 변환 

    
    return Number(answer);

    
}
