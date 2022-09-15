/**
 * @param {number[]} height
 * @return {number}
 */

// DP 방식 131ms, 54.5MB -> 메모리 너무 많이 씀.
 var maxArea = function(height) {
    let start = 0
    let end = height.length - 1
    let result = 0
    let r = []
    let i = 0    
    while(start < end) {
     
    if(height[start] >= height[end]) {
        const area = height[end] * (end - start) // end - start 는 공통부분이므로 뺄 수 있다. 앞의 값은 최소값을 찾아서 곱해주면됨. 즉 증감식 말고는 한줄로 구현 가능.
        r.push(area)
        end--
    }else {
        const area = height[start] * (end - start)
        r.push(area)
        start++
    }
    
    result = Math.max(result,r[i])
   
    i++
    }    
    return result
};

/**
 * @param {number[]} height
 * @return {number}
 * 
 * 130ms, 49.7MB -> 메모리 너무 많이 씀.
 */
 var maxArea = function(height) {
    let start = 0
    let end = height.length - 1
    let max = 0
    while(start < end) {
     
    let x = end - start
    let y = Math.min(height[start],height[end])
    
    let area = x*y
    
    if(area > max) max = area
        
    if(height[start] >= height[end]) {
        end--
    }else {
        start++
    }
    
    }    
    return max
};