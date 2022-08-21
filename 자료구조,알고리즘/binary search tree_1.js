/**
 * 이진 검색 트리
 * -> 현재 노드보다 작은건 왼쪽 큰 거는 오른쪽.
 * 
 * Big O
 * 검색,삽입,삭제 : O(log n)
 * 삽입 : 최 상위 노드 부터 추가 하는 값(x) 과 크기 비교 -> 작으면 왼쪽 자식 노드 위치 크면 우측 자식 노드 위치로 이동. 자식 노드가 없으면 x 추가
 * 검색 : 삽입과 동일하게 최상위 노드부터 자식노드로 내려가면서 값 비교
 * 삭제 : case 1) 자식 노드가 없을 때         : 그냥 삭제 하면됨
 *        case 2) 자식 노드가 하나 존재 할 때 : 삭제 시켜주고 할아버지 노드와 연결
 *        case 3) 자식 노드가 많을 때         :  우측 서브트리에서 가장 왼쪽 자식 값을 삭제하고자 하는 값과 바꿔 주면 됨.
 */

 class BinarySearchTree {
    //BST의 constructor를 구현합니다.
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
    // tree에 value를 추가합니다.
    insert(value) {
      // 인자의 value가 this.value보다 작을 경우, 왼쪽 노드에서 진행합니다.
      if (value < this.value) {
        // this.left에 아무것도 없을 경우, 새로운 자식 노드를 추가합니다.
        if (this.left === null) {
          this.left = new BinarySearchTree(value);
        }
        // this.left의 자식 노드가 있을 경우, 자식 노드에서 insert 재귀를 사용합니다.
        else {
          this.left.insert(value);
        }
      }
      // 인자의 value가 this.value보다 클 경우, 오른쪽 노드에서 진행합니다.
      else if (value > this.value) {
        // this.right에 아무것도 없을 경우, 새로운 자식 노드를 추가합니다.
        if (this.right === null) {
          this.right = new BinarySearchTree(value);
        }
        // this.left의 자식 노드가 있을 경우, 자식 노드에서 insert 재귀를 사용합니다.
        else {
          this.right.insert(value);
        }
      } else {
        // 이미 value값을 포함하고 있습니다.
      }
    }
    // tree의 value값을 탐색합니다.
    contains(value) {
      // 찾는 value값이 노드의 value와 일치한다면, true를 리턴합니다.
      if (value === this.value) {
        return true;
      }
      // 찾는 value값이 노드의 value 보다 작다면, 왼쪽에서 contains의 재귀를 진행합니다.
      if (value < this.value) {
        return !!(this.left && this.left.contains(value));
      }
      // 찾는 value값이 노드의 value 보다 크다면, 오른쪽에서 contains의 재귀를 진행합니다.
      if (value > this.value) {
        return !!(this.right && this.right.contains(value));
      }
    }
    //tree를 전위 순회 합니다.
    preorder(callback) {
      callback(this.value);
      if (this.left) {
        this.left.preorder(callback);
      }
      if (this.right) {
        this.right.preorder(callback);
      }
    }
    // tree를 중위 순회 합니다
    inorder(callback) {
      if (this.left) {
        this.left.inorder(callback);
      }
      callback(this.value);
      if (this.right) {
        this.right.inorder(callback);
      }
    }
    //tree를 후위 순회 합니다
    postorder(callback) {
      if (this.left) {
        this.left.postorder(callback);
      }
      if (this.right) {
        this.right.postorder(callback);
      }
      callback(this.value);
    }
  }