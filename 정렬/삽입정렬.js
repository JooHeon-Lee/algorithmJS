/*
Big O

Worst Case: O(n^2): 정렬이 하나도 안되어있는 경우
Best Case: O(n): 이미 정렬이 되어있는 경우

*/

const arr2 = [4, 6, 1, 3, 5, 2];
const arr = [5,4,3,2,1];
let idx = 0;

for(let i=0; i< arr.length; i++)
  {
    idx = i;
    for(let j=i-1; j>=0; j--)
      {
        if(arr[idx] < arr[j])
          {
        
            let temp = arr[j];
            arr[j] = arr[idx]; 
            arr[idx] = temp;
            idx = j;
            
          }
      }
    console.log(`${i}회전 : ${arr}`);
 
  }


  function insertionSort (array) {
    for (let i = 1; i < array.length; i++) 
        {
            let cur = array[i];
            let left = i - 1;     
                while (left >= 0 && array[left] > cur) {
                    array[left + 1] = array[left];      
                    left--;    
                }    
                array[left + 1] = cur; 
                console.log(`${i}회전: ${array}`);
        }  
        return array;
    }
    console.log(insertionSort([5, 4, 3, 2, 1]));
