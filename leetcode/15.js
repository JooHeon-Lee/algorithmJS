/**
 * Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
 */

/**
 * 
 * @param {number} nums
 * @return {number}  
 */
const solution = (nums) => {

    let sortedNums = nums.sort((a,b) => a-b)
    let result = []

    for(let i=0; i<sortedNums.length; i++) {
        let num1 = sortedNums[i]
        let target = nums[i] * -1

        if(i !==0 && sortedNums[i] === sortedNums[i-1]){
            continue;
        }

        let map = new Map()

        for (let j=i+1; j<sortedNums.length; j++){
            let num2 = sortedNums[j];
            let k = map.get(target - num2);
             // 두 번째로 고르는 숫자 이후에 같은 숫자가 있으면 중복
            if(sortedNums[j] === sortedNums[j+1]){
                map.set(num2, j);
                continue;
            }
            if ((k !== undefined) && (i !== j) && (j !== k) && (k !== i)){
                result.push([num1, num2, sortedNums[k]]); 
            }
            map.set(num2, j);
    }
}

    
    console.log(result)

    return result

}


solution([-1,0,1,2,-1,-4])