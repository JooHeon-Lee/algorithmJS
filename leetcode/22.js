/**
 * @param {number} n
 * @return {string[]}
 */
 const generateParenthesis = (n) => {
    const result = [];
    generate([], 0, 0); //recursion실행
    return result;
    
   
    function generate(A, left, right) {
        
        //추가될 parantheses
        if (A.length === 2 * n) { // n 은 괄호 쌍의 갯수,
            //만약 Aarray가 쌍갯수와 같아지면 
            result.push(A.join(''));//결과에 추가될때 결과가 추가되며 recursion끝  
            console.log("join")
            return;
        }
        if (left < n) { //만약 ( 갯수가 n보다 작으면
        	A.push('(');
            console.log("result1"+ A)
            generate(A, left + 1, right); // "("가 추가되고 left 카운트가 +1이 된후 다시 recursion시작
            console.log("pop1" + A.pop()); //pop을 해주는 이유는, backtrack에서 다시 돌아가는 역할
           
        }
        if (right < left) { //만약 )갯수가 (보다 작으면 
        	A.push(')')
            console.log("result2"+ A)
            generate(A, left, right + 1);
            console.log("pop2" + A.pop()); 
        }
    }
    
};