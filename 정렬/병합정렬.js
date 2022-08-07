/**
 * Big O
 * Worst Case: O(n^2)
 * Best Case: O(nlog₂n)
 * -
 */

function mergesort(arr)
{
    //1.쪼개기
    if(arr.length < 2)
    {
        return arr;
    }

    const mid = arr.length/2;
    const left = arr.slice(0,mid);
    const right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));

    function merge(left,right)
    {
        const resultArray = [];
        let leftIndex = 0;
        let rightIndex = 0;

        while(leftIndex < left.length && rightIndex < right.length)
        {
            if(left[leftIndex] < right[rightIndex])
            {
                resultArray.push(left[leftIndex]);
                leftIndex++;
            }else{
                resultArray.push(right[rightIndex]);
                rightIndex++;
            }
        }

        return resultArray.concat(left.slice(leftIndex),right.slice(rightIndex));
    }
}
console.log(mergesort([5,4,3,2,1]));



function sumnum(arr)
{
    if(arr.length == 0)
    {
        return 0;
    }
    
    if(arr.length == 1)
    {
        return arr[0];
    }

    return arr[0] + sumnum(arr.slice(1));

}


