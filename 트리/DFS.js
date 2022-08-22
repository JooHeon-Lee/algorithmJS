/**
 * DFS(Depth Frist Search)
 * 
 * 깊이 즉, 자식들이 우선순위가 된다. 부모로 부터 자식까지 아래로 쭉 훑고, 그 옆의 부모 노드로 방문이 넘어가게 된다.
 * 
 *  회사의 조직도에서 사장 다음에 영업부서, 개발부서, 디자인부서가 있다고 한다면,
 *  각각의 부서에서는 부장-대리-사원이 있다. 
 * 이 회사의 구성원들을 깊이우선탐색으로 이름을 나열하면, 
 * 영업부서의 부장-대리-사원, 개발부서의 부장-대리-사원, 디자인부서의 부장-대리-사원 순으로 이름이 나열될 것이다.
 * 
 * 구현 
 *  깊이(위의 예에서 부서)의 구분을 어떻게 할 것인가? 라는 질문을 던질 수 있다. 
 * 층을 구분 할 때에는 큐의 뒤에다가 계속해서 자식을 쌓으면 자연스레 구분이 되었다.
 *  우선순위가 어디에 있는가 생각하면 조금은 쉽게 문제가 해결된다.
 * 결국, 내 부서 팀원, 내 자식이 중요하다. 그럼? 아까 unvisitedQueue 의 앞에다가 내 자식들의 정보를 먼저 넣어주면 되지 않을까?
 * BFS의 구현과 차별을 두기 위해서 unvisitedQueue => unvisitedList 로 바꾸었다.
 * push 가 아닌 unshift() 메소드를 사용함으로써 우선순위가 내 자식들이 먼저가 된다.
 */

 class Node {
    constructor(data) {
        this.data = data; // 다른 노드와 차별점을 두는 데이터
        this.children = []; // 자식들과의 정보(주소)를 담을 배열
    }

    add(data) { // 자식 추가하는 메소드
        this.children.push(new Node(data)); // 자식 노드를 생성하고 바로 배열에 저장한다. (주소를 저장하는 행위)
    }

    remove(data) { // 자식의 정보를 지우는 메소드
        this.children = this.children.filter(child => child.data === data ? false : true); // filter 를 거쳐서 해당하는 자식의 정보를 배열에서 빼주면 된다. 
    }
}


class Tree {
    constructor() {
        this.root = null;
    }

    DFS(fn) {
        if(this.root === null) return;

        const unvisitedList = [this.root];
        while(unvisitedList.length !== 0) {
            const current = unvisitedList.shift();
            unvisitedList.unshift(...current.children); // list 앞에다 넣어준다. (우선순위: 내 자식들이 먼저야! )
            fn(current);
        }
    }
}



const lettersDFS = [];
const t = new Tree();
t.root = new Node('a');
t.root.add('b');
t.root.add('d');
t.root.children[0].add('c');


t.DFS(node => lettersDFS.push(node.data));
console.log(lettersDFS);