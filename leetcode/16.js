/**
 * Input: nums = [-1,2,1,-4], target = 1
 * Output: 2
 * Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
 */


const solution = (nums,target) => {

    let result// 합계 저장.
    nums.sort((a,b) => a-b)
    for(let i=0; i<nums.length; i++) {
        let std = nums[i] // 기준값 하나 설정
        let left = i+1
        let right = nums.length -1


        while(left < right) {
            const sum = std + nums[left] + nums[right]
            if(sum === target) return sum

            if (typeof result === "undefined" || Math.abs(target - sum) < Math.abs(target - result)) 
            {
                result = sum;
            }

            sum > target ? right-- : left++
        }
    }

    return result
}

solution([-1,2,1,-4],1)