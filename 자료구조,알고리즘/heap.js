/**
 * 힙(Heap)은 최솟값이나 최댓값을 빠르게 찾아내기 위해 완전 이진 트리를 기반으로 하는 트리
 * 1. 완전 이진 트리 기반
 * 2. 부모 트리는 모든 경우에 대해 자식 트리보다 크다.
 * 3. 최댓값, 최솟값을 구할때 유용하다.
 * 시간 복잡도 : O(nlogn) --> 최댓값 접근시 O(1)
 * 
 * 
 * 힙트리 만들때 개념 
 * 1. Heapify : 일반 트리를 heap 트리로 변경하는것.
 *              -> 자식이 있는 마지막 노드부터 순회. p = (size/2) -1 ==> 자식이 있는 마지막 노드
 * 2. siftdown : 자식과 비교해서 큰 값으로 변경 자식이 없을때까지.
 * 
 * 힙 SORT
 * -> 1. 루트 노드와 마지막 노드를 swap ( 마지막 노트는 정렬 완료 처리)
 *    2. 루트 노드 부터 siftdown
 * 
 * 힙 정렬은 최대 힙 트리(Max Heap Tree)나 최소 힙 트리(Min Heap Tree)를 구성하여 정렬하는 방식입니다.
 * 힙(Heap)? 완전 이진 트리의 일종으로 우선순위 큐를 위해 만들어진 자료구조
 * 완전 이진 트리? 삽입할 때 왼쪽부터 차례대로 추가하는 이진 트리
 * 최대 힙 트리? 부모 노드의 키 값이 자식 노드의 키 값보다 크거나 같은 완전 이진 트리
 * 최소 힙 트리? 부모 노드의 키 값이 자식 노드의 키 값보다 작거나 같은 완전 이진 트리
 */


 class Heap {
    constructor() {
      this.heap = [];
    }
  
    getLeftChild = (parent) => {
      return parent * 2 + 1;
    };
  
    getRightChild = (parent) => {
      return parent * 2 + 2;
    };
  
    getParent = (child) => {
      return Math.floor((child - 1) / 2);
    };
  
    insert = (key, value) => {
      const node = { key, value };
      this.heap.push(node);
      this.heapifyUp();
    };
  
    remove = () => {
      const count = this.heap.length;
      const root = this.heap[0];
  
      if (count <= 0) return;
  
      if (count === 1) {
        this.heap = [];
      } else {
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
      }
  
      return root;
    };
  
    heapifyUp = () => {
      let index = this.heap.length - 1;
      const insertedNode = this.heap[index];
  
      while (index > 0) {
        const parent = this.getParent(index);
  
        if (this.heap[parent].key > insertedNode.key) {
          this.heap[index] = this.heap[parent];
          index = parent;
        } else {
          break;
        }
      }
  
      this.heap[index] = insertedNode;
    };
  
    heapifyDown = () => {
      let index = 0;
      const count = this.heap.length;
      const root = this.heap[index];
  
      while (this.getLeftChild(index) < count) {
        const leftChild = this.getLeftChild(index);
        const rightChild = this.getRightChild(index);
  
        let minChild;
  
        if (
          rightChild < count &&
          this.heap[rightChild].key < this.heap[leftChild].key
        ) {
          minChild = rightChild;
        } else {
          minChild = leftChild;
        }
  
        if (this.heap[minChild].key <= root.key) {
          this.heap[index] = this.heap[minChild];
          index = minChild;
        } else {
          break;
        }
      }
  
      this.heap[index] = root;
    };
  }
  
  function heapSort(arr) {
    const heap = new Heap();
  
    for (const element of arr) {
      heap.insert(element);
    }
  
    const sorted = [];
  
    while (heap.heap.length) {
      const { key } = heap.remove();
      sorted.push(key);
    }
    
    return sorted;
  }


  console.log(heapSort([7,6,5,4,2,1,3]));