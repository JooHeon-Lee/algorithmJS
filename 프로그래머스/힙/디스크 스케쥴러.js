function solution(jobs) {
    var answer = 0;
    jobs.sort((a,b)=>a[0]-b[0]);// 첫 작업은 가장 먼저오는 걸로
    const pq=[];//우선 순위 큐 (시작이 가능한 일들이 들어가며 작업시간 오름차순정렬됨)
    let i=0, time=0;
    while(i<jobs.length || pq.length!=0){// 우선순위큐가 비어야 종료됨
        
        //우선 순위 큐 넣는 작업
        if(i<jobs.length && jobs[i][0]<=time){
           pq.push(jobs[i++]);
           pq.sort((a,b)=>a[1]-b[1]);
           continue;//다음 것도 넣어보러 간다~~
        }
        //현재 도착한 작업이 없을 때
        if(pq.length===0){
            time=jobs[i][0]; //첫 작업을 현재 시간으로 바꿔준다.
        }else{
            const [start,work]=pq.shift();
            answer+=time+work-start;
            time+=work;
        }
        
    }
     
    return parseInt(answer/jobs.length);
}

solution([[0, 3], [1, 9], [2, 6]]);