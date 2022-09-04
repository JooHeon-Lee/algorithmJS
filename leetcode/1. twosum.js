/*Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
*/


//삽입정렬 방식.. 최악의 경우 시간 복잡도 n제곱
const solution = (arr,target) => {
    const result = [];

    for(let i=0; i< arr.length; i++) {
        for(let j=i+1; j<arr.length; j++) {
            if(arr[i] + arr[j] == target) {
                result.push(i);
                result.push(j);
                break;
            }
        }
    }

    return result
}


//map을 사용해서 시간복잡도 문제 해결 시간 복잡도 : n
const solution2 = (arr,target) => {
    const map = {};

    for(let i=0; i< arr.length; i++) {
        const another = target - arr[i];
        console.log(`${i} 번째 반복 ==== another ::: ${another}`);
        if(another in map) {
            console.log(`${i} 번째 반복 ==== map :::${target} `);
            console.log(`map[another] :: ${map[another]} i = ${i}`)
            return [map[another], i]
        }

        map[arr[i]] = i; // map에 값 : index 로 저장
        
    }

    return null;
}
solution2([2,7,11,15],13);

/**
 * 7 - 0
 * 2 - 1
 * -2 - 2
 */