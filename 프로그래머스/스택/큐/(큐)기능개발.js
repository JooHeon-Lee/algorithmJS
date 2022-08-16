/**
 * progresses	            speeds	            return
 * [93, 30, 55]	            [1, 30, 5]	        [2, 1]
 * [95, 90, 99, 99, 80, 99]	[1, 1, 1, 1, 1, 1]	[1, 3, 2]
 * 입출력 예 #2
 * 모든 기능이 하루에 1%씩 작업이 가능하므로, 작업이 끝나기까지 남은 일수는 각각 5일, 10일, 1일, 1일, 20일, 1일입니다. 
 * 어떤 기능이 먼저 완성되었더라도 앞에 있는 모든 기능이 완성되지 않으면 배포가 불가능합니다.
 * 따라서 5일째에 1개의 기능, 10일째에 3개의 기능, 20일째에 2개의 기능이 배포됩니다.


 */


const solution = (progresses, speeds) => {
    let answer = [0];
    let days = progresses.map((progress, idx) => Math.ceil((100-progress)/speeds[idx]));
    let maxDay = days[0];
    
    for(let i=0, j=0; i<days.length; i++){
        if(days[i] <= maxDay){
            answer[j] += 1;
        }     
        else{
            answer[++j] = 1;
            maxDay = days[i];
        }
    }

    return answer;

}

console.log(solution([93, 30, 55],[1, 30, 5]));

/**
 * progresses	speeds	return
  [93, 30, 55]	[1, 30, 5]	[2, 1
   7  3  3
    */


   const solution2 = (p,s) => {
    let days = [];
    let result = [0];
    let k = 0;
    p.map((v,i) => {
        let per = Math.ceil((100-v) / s[i]);
        days.push(per);
    })

    let std = days[0]; // 기준 일 //[ 5, 10, 1, 1, 20, 1 ] 
    //[ 7, 3, 9 ]

    for(let i=0, j=0; i< days.length; i++) {
        if(std >= days[i]) {
            result[j] += 1;
        } else {
            result[++j] = 1;
            std = days[i];
        }
    }
    
    
}



solution2([93, 30, 55],[1, 30, 5]);
solution2([95, 90, 99, 99, 80, 99],[1, 1, 1, 1, 1, 1]);
