/**
 * Big O
 * Worst Case: O(n^2)
 * Best Case: O(nlog₂n)
 * -
 * Not In place -> 매우 간단하고 쉽지만 데이터 양이 늘어나면 공간의 낭비가 심해짐. (stable)
 * ㄴ> 0번째 값을 피벗으로 설정 피벗 값보다 작은걸 left 배열 큰걸 right 배열 피벗은 pivot 배열에 넣은 후 concat 해준다 ( 재귀호출 )
 * In place -> 공간 낭비 문제를 해결한 방법 (unstable)
 * ㄴ> 가운데 값을 pivot으로 설정 / 가장 왼쪽 값과 오른쪽 값이 시작 점.
 * ㄴ> 가장 왼쪽 값 부터 비교해서 피벗보다 큰 값이 나올때까지 우측으로 옮긴다.
 */

function quickSort (arr, left = 0, right = arr.length - 1)
{
    if(left >= right)
    {
        return;
    }

    const mid = Math.floor((left + right)/2);
    const pivot = arr[mid];
    const partition = divide(arr,left,right,pivot);

    quickSort(arr, left, partition - 1);
    quickSort(arr, partition, right);

    function divide(arr, left, right, pivot)
    {
        console.log(`array : ${arr}, left: ${arr[left]}, pivot : ${pivot}, right: ${arr[right]}`);
        
        while(left <= right)
        {
            while(arr[left] < pivot )
            {
                left++;
            }

            while(arr[right] > pivot )
            {
                right--;
            }

            if(left <= right) 
            {
                let swap = arr[left];
                arr[left] = arr[right];
                arr[right] = swap;
                left++;
                right--;
            }
        }
        return left;
    }

    return Array;

}
console.log(quickSort([5, 3, 7, 1, 9]))