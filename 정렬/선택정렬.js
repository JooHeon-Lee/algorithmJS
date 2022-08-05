/**
 * 
 * Big O

    Worst Case: O(n^2): 정렬이 하나도 안되어있는 경우
    Best Case: O(n^2): 이미 정렬이 되어있는 경우
    --> 성능이 매우 떨어짐
    
    */

function selectionSort (array) { 
    
    for (let i = 0; i < array.length; i++) {    
        let minIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[minIndex] > array[j]) {
                minIndex = j;      
            }    
        }    
        if (minIndex !== i) {
            let swap = array[minIndex];
            array[minIndex] = array[i];
            array[i] = swap;    
        }    
    console.log(`${i}회전: ${array}`);  
    }  
return array;
}
console.log(selectionSort([5, 4, 3, 2, 1]));


const arr2 = [4, 6, 1, 3, 5, 2];
const arr = [1,4,3,2,5];

for(let i=0; i<arr.length; i++)
  {
    let minimum = arr[i];
    for(let j=i+1; j< arr.length; j++)
      {
        if(minimum > arr[j])
          {
            minimum = arr[j];
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
          }
      }
  }
  console.log(arr);
