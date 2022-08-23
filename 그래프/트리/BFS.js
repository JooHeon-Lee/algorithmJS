/**
 * BFS(Breadth Frist Search)
 * 
 *  * 시간 복잡도 : O(n)
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
 * 
 * <<<<<<<<<<대표적인 그래프 탐색 알고리즘>>>>>>>>>>>>>>>>>>
 * 
 * 너비 우선 탐색(Breadth First Search): 정점들과 같은 레벨에 있는 노드들(형제 노드들)을 먼저 탐색하는 방식
 * 두 개의 큐를 사용한다.
 * root와 가까운 node들부터 찾기 때문에 최단거리를 탐색할 때 유용하다.
 * queue에 각 노드의 정보를 기록해야 하기 때문에 메모리를 많이 잡아 먹는다.
 * 찾고자 하는 target node가 root node와 가까이 있다고 예상될 경우 BFS를 사용한다.
 * 지도 어플에서 특정 위치까지의 최단거리 안내, 혹은 소셜미디어에서 친구 추천 등에 이용된다.

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


//https://velog.io/@sangbooom/JS-BFS-DFS 참고

const graph = {
    A: ["B", "C"],
    B: ["A", "D"],
    C: ["A", "G", "H", "I"],
    D: ["B", "E", "F"],
    E: ["D"],
    F: ["D"],
    G: ["C"],
    H: ["C"],
    I: ["C", "J"],
    J: ["I"]
  };
  
  const BFS = (graph, startNode) => {
    const visited = []; // 탐색을 마친 노드들 -- 큐
    let needVisit = []; // 탐색해야할 노드들 -- 큐
  
    needVisit.push(startNode); // 노드 탐색 시작
  
    while (needVisit.length !== 0) { // 탐색해야할 노드가 남아있다면
      const node = needVisit.shift(); // queue이기 때문에 선입선출, shift()를 사용한다.
      if (!visited.includes(node)) { // 해당 노드가 탐색된 적 없다면
        visited.push(node); 
        needVisit = [...needVisit, ...graph[node]];
      }
    }
    return visited;
  };
  
  console.log(BFS(graph, "A"));
  // ["A", "B", "C", "D", "G", "H", "I", "E", "F", "J"]