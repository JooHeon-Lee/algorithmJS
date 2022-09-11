/**
 * Input: nums = [1,1,2]
 * Output: 2, nums = [1,2,_]
 * 
 * Input: nums = [0,0,1,1,1,2,2,3,3,4]
 * Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
 */


const solution = (nums) => {

    if (nums.length == 0) return 0;
    var i = 0;
    for (var j = 1; j < nums.length; j++) {
        if (nums[j] != nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
}

solution(
    [0,0,1,1,1,2,2,3,3,4])

/*
//테스트용 코드
const nums = [...]; // Input array
let expectedNums = [...]; // The expected answer with correct length

let k = removeDuplicates(nums); // Calls your implementation

let kl = expectedNums.length;
for (let i = 0; i < kl; i++) {
    let nums[i] = expectedNums[i];
}*/