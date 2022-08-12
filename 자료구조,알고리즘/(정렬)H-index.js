/**
 * [3, 0, 6, 1, 5]	3
입출력 예 설명
이 과학자가 발표한 논문의 수는 5편이고, 그중 3편의 논문은 3회 이상 인용되었습니다.
 그리고 나머지 2편의 논문은 3회 이하 인용되었기 때문에 이 과학자의 H-Index는 3입니다.
 */


 const solution = (array) => {

    let answer = 0;

    array.sort((a,b) => a-b);

    for(let i=array.length; i > 0 ; i--) {
        if(array[array.length - i] >= i) {
            answer = i;
            break;
        }
    }

    return answer;

 }

 console.log(solution([3, 0, 6, 1, 5]));