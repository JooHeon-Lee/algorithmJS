/**
 * BFS(Breadth Frist Search)
 * 
 * 트리를 탐색(순회) 하는 방법 중 하나가 바로 너비우선탐색이다 ( 너비=층 )
 * 
 * 예로는 회사의 사내 조직도 인데, 가장 높으신 분(?) 으로 부터 일반 평사원까지의 정보를 알고 싶다면,
 *  층을 따라서 위에서 부터 아래로 내려오면 된다. 사장-부장-대리-사원 이런식으로 층을 따라 사장, 부장, 대리, 이름을 쭉 나열하고,
 *  그 다음 평사원의 이름을 쭉 나열하면 된다. 
 * 탐색을 하는데 있어서 우선순위가 너비=층 이 된다는 것이 핵심이다.
 * 
 * 구현 
 *  First in First Out 구조를 가진 큐를 사용하면 어떨까? 계층이 우선 순위니까, 층마다 우선순위를 가지면 된다. 
 */

class Tree {
    constructor() {
        this.root = null;
    }

    BFS(fn) {
        if(this.root == null) return;

        const unvisitedQueue = [this.root];

        while(unvisitedQueue.length !== 0) {
            const current = unvisitedQueue.shift(); // dequeue
            unvisitedQueue.push(...current.children); // 현재 부모 노드의 자식들을 모두 다 큐에 담는다. 
            fn(current); // 현재 노드를 가지고 callback 함수 실행
        }
    }
}





// 실행

const lettersBFS = [];
const t = new Tree();
t.root = new Node('a');
t.root.add('b');
t.root.add('d');
t.root.children[0].add('c');

t.BFS(node => lettersBFS.push(node.data));
