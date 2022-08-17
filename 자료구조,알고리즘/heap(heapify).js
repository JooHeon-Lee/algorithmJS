
// [6,2,4,9,7,5,8] -- max heap 구성 시 [9,7,8,2,6,5,4]
//      6
//    2    4
//  9  7  5  8


// 힙이 되기 위해서는 
// 1. 완전 이진 트리 여야 한다.
// 2. 최대 힙을 만들기 위해서는 -> 부모 > 자식 관계를 무조건 만족 해야함
// 3. 최소 힙을 만들기 위해서는 -> 부모 < 자식 관계를 무조건 만족 해야함.
// 힙 구성 함수
function heapify(arr) {
    const length = arr.length;
    let cur = Math.floor((length / 2) - 1); // 자식이 있는 마지막 루트 노드
    
    for(let i=cur;i >=0; i-- ) {

        max_heapify(arr,i,length);
    }

}


function max_heapify (arr,cur,length) {
    let parent = cur;
    let left = 2 * cur + 1;
    let right = 2 * cur + 2;

    if( left < length && arr[left] < arr[parent]) {
        parent = left;
    }

    if(right < length && arr[right] < arr[parent]) {
        parent = right;
    }

    if(cur != parent) {
        swap(arr,cur,parent);
        console.log(`부모 노드 : ${parent} :::: 배열 : ${arr}`);
        max_heapify(arr,parent,length);
    }

}


function swap(arr,i,j) {

    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;

}


heapify([1,5,6,4,3,2]);
//heapify([100, 10, 5, 1, 8]);