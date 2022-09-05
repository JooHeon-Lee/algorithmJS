/**
 * Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 */


const solution = (nums,target) => {

    const map = {};
    for(let i=0; i< nums.length; i++) {
        const cha = target - nums[i];

        if(cha in map) {
            return [map[cha], i]
        }
        map[nums[i]] = i;
    }
}

/**
 * Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
 */

const solution2 = (l1,l2) => {
    const result = []
    let carry = false


}


/**
 * Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3
 */

const ans = (s) => {
    let result = ''

    for(let i=0; i< s.length; i++) {
        result = result.substring(s.indexOf(s[i]) + 1)

        result += s[i]
        
    }
}