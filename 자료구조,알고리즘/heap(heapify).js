
// [6,2,4,9,7,5,8] -- max heap 구성 시 [9,7,8,2,6,5,4]
//      6
//    2    4
//  9  7  5  8
/*
* 시간 복잡도 : O(nlogn) --> 최댓값 접근시 O(1)
* - peek O(1)
* - insert O(logn)
* - remove O(logn)
*/
// 힙이 되기 위해서는 
// 1. 완전 이진 트리 여야 한다.
// 2. 최대 힙을 만들기 위해서는 -> 부모 > 자식 관계를 무조건 만족 해야함
// 3. 최소 힙을 만들기 위해서는 -> 부모 < 자식 관계를 무조건 만족 해야함.

// 삽입
// 1. 젤 끝단에 데이터 추가
// 2. 부모 노드와 비교 부모노드보다 추가된 데이터가 크다면 swap root 노드 까지 반복
function _insert(arr,data) {
    arr.push(data);
    let lastIdx = arr.length-1; // 삽입한 데이터의 index

    while(lastIdx > 0) {

        const parent = Math.floor((lastIdx-1)/2);
        if(arr[parent] > arr[lastIdx]) break;

        swap(arr,lastIdx,parent);
        lastIdx = parent;
    }

    return arr;
}

// 삭제 (heap의 최상단 노드를 제거하는 작업.)
// 1. 최 상단 노드와 끝 노드 swap
// 2. 데이터 pop
// 3. heapify 
function _delete(arr) {
    let lastIdx = arr.length - 1;
    console.log(`삭제 전 : ${arr}`);
    swap(arr,0,lastIdx);
    arr.pop();
    heapify(arr);
    console.log(`삭제 후 : ${arr}`);
}





// 힙 구성 함수
function heapify(arr) {
    const length = arr.length;
    let cur = Math.floor((length / 2) - 1); // 자식이 있는 마지막 루트 노드
    
    for(let i=cur;i >=0; i-- ) {

        max_heapify(arr,i,length);
    }
    console.log(`배열 : ${arr}`);
/*
    console.log(`insert 전 배열 : ${arr}`);
    _insert(arr,6);

    console.log(`insert 후 arr : ${arr}`);*/
}


function max_heapify (arr,cur,length) {
    let parent = cur;
    let left = 2 * cur + 1;
    let right = 2 * cur + 2;

    if( left < length && arr[left] > arr[parent]) {
        parent = left;
    }

    if(right < length && arr[right] > arr[parent]) {
        parent = right;
    }

    if(cur != parent) {
        swap(arr,cur,parent);
        //console.log(`부모 노드 : ${parent} :::: 배열 : ${arr}`);
        max_heapify(arr,parent,length);
    }

}

function min_heapify (arr,cur,length) {
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
        //console.log(`부모 노드 : ${parent} :::: 배열 : ${arr}`);
        max_heapify(arr,parent,length);
    }

}


function swap(arr,i,j) {

    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;

}


heapify([8,7,4,3,1]);
//heapify([100, 10, 5, 1, 8]);
_delete([8,4,7,1,3,5]);