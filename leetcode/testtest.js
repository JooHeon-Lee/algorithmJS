/**
 * 
 * @param {
 * } arr
 * 
 * [[2,1],[2,5],[1,5]] 
 */

const solution = (arr) => {
    let result = []
    for(let i =0; i<arr.length; i++) {
        if(arr[i][0] !==arr[i+1][0]) {
            result.push(arr[i+1][0])
        }
        if(arr[0][i] !== arr[0][i+1]) {
            result.push(arr[0][i])
        }
    }
    console.log(result)


}
solution([[2,1],[2,5],[1,5]])

