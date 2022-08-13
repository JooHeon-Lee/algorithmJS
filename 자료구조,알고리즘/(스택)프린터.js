/**
 * 6개의 문서(A, B, C, D, E, F)가 인쇄 대기목록에 있고 중요도가 1 1 9 1 1 1 이므로 C D E F A B 순으로 인쇄합니다.
 * priorities	location	return
    [2, 1, 3, 2]	2	1
    [1, 1, 9, 1, 1, 1]	0	5
 */

/*
    const solution = (p,l) => {
        let p_copy = [ ...p ];  
        let p_copy2 = [ ...p];      
        let max = p_copy.sort()[p.length-1];
        let ranking = [];
        let i = 0;
        let j = p.length;
        while(j > 0) {
            
            if(p[i] >= max) {
                j--;
                return false;
            }else {
                let value = p_copy2.shift();

               p_copy2.push(value);
               i++;
               j--;
            }
            console.log(p_copy2);
        }
            
        
    }

    solution([2, 1, 3, 2],2)


let arr = ['a','b','c','d'];
let v = arr.shift();
let t = [];
t.push(v);
console.log(t);*/


function solution(priorities, location) {

    // 순위 초기화
    let ranking = 0;

    // 대기목록이 다 비워질 때 까지
    while (priorities.length) {
        // 대기목록 첫번째 요소 배열 최대값보다 작은 경우
        if (priorities[0] < Math.max(...priorities)) {
            // 첫번째 요소가 자신일 경우 location을 배열 마지막으로 옮김
            if (--location < 0) location = priorities.length - 1;
            // 제일 앞 요소를 뺴서 제일 뒤에 넣는다
            priorities.push(priorities.shift());
        } else {
            // 순위를 업데이트 해줌
            ranking++;
            // 배열을 빠져나가는 게 자신일 경우 멈추고 순위를 return
            if (--location < 0) return ranking;
            // 자신이 아니면 제일 앞의 요소 빼낸다.
            priorities.shift();
        }
    }
}

console.log(solution([2, 1, 3, 2], 2));
console.log(solution([1, 1, 9, 1, 1, 1], 0));