/**
 * 최단 경로 탐색 알고리즘. ( Dijkstra Algorithm)
 * 
 * 기본 논리
 * 루프를 돌면서, 새로운 노드를 방문할 때마다 기록된 거리가 가장 짧은 노드부터 먼저 확인한다.
 * 방문할 노드로 이동한 후 각 노드에 인접한 이웃 노드들을 차례로 확인한다.
 * 각 이웃 노드에 대해 시작 노드에서부터 현재 보고 있는 노드까지 이어지는 전체 거리를 합산한다.
 * 현재 보고 있는 노드까지의 새로운 거리가 기존에 최단거리로 기록된 값보다 작으면, 새로운 더 짧은 거리를 저장한다.
 * 
 * https://velog.io/@jangws/22.-%EB%8B%A4%EC%9D%B5%EC%8A%A4%ED%8A%B8%EB%9D%BCDijkstra-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98
 */

/**
 * 가중 그래프(Weighted Graph)
 * 다익스트라 알고리즘는 가중 그래프를 기반으로 한다. 
 * 예를 들어, A 장소(vertex1)와 B 장소(vertex2) 사이의 ‘거리’를 weight로서 간선에 추가해줘야 한다.
 */

 class WeightedGraph {
    constructor() {
      this.adjacencyList = {};
    }
  
    addVertex(vertex) {
      if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
  
    addEdge(vertex1, vertex2, weight) {
      this.adjacencyList[vertex1].push({ node: vertex2, weight });
      this.adjacencyList[vertex2].push({ node: vertex1, weight });
    }

    //알고리즘 구현
    Dijkstra(start, finish) {
        // 위에서 만든 PriorityQueue 클래스로 nodes 인스턴스를 만들고, start를 추가한다. 
        const nodes = new PriorityQueue();
        nodes.enqueue(start, 0); 
        // distances 객체는 시작점부터 그 노드까지 최단 거리를 기록한다. 
        const distances = {};
        // previous 객체는 그 노드까지 최단거리로 경유해온 직전 노드를 기록한다. 
        const previous = {};
        // path 배열은 마지막에 return할 것이다.
        const path = []; 
        let smallest;
        // 다음과 같은 초기 상태를 만들기 위해 for문을 돌린다.
        // distances { A: 0, B: Infinity, C: Infinity, D: Infinity, E: Infinity, F: Infinity}
        // previous { A: null, B: null, C: null, D: null, E: null, F: null }
        for (const vertex in this.adjacencyList) {
          if (vertex === start) {
            distances[vertex] = 0;
            // 아래의 while문에서 처음에 nodes로부터 dequeue할 초깃값 추가하기
          } else {
            distances[vertex] = Infinity;
          }
          previous[vertex] = null;
        }
        
        // 무한 루프를 돌린다. 
        while (true) {
          // nodes 내부에서는 우선순위 정렬이 되어 있어 dequeue시 우선순위가 가장 높은(여기서는 최소 거리) 값을 주며, 그 값의 노드명을 smallest 변수에 재할당한다.
          smallest = nodes.dequeue().val;
          // dequeue한 값이 finish와 같으면 목적지에 도착한 것이므로,
          if (smallest === finish) {
            // return할 값을 아래의 while문을 통해 만들고 상위 while문을 break한다. 
            while (previous[smallest]) {
              path.push(smallest);
              smallest = previous[smallest];
            }
            break;
          }
          // dequeue한 값이 finish와 같지 않으면,
          else {
            // dequeue한 노드와 간선으로 이어진 노드들에 대하여 아래 과정의 반복문을 돌린다. 
            for (const neighbor in this.adjacencyList[smallest]) {
              const nextNode = this.adjacencyList[smallest][neighbor];
              // 시작점에서 현 노드까지 경유한 거리(distances[smallest])와 
              // 현 노드와 다음 노드 사이의 거리(nextNode.weight)를 합하여 최소거리 후보로 둔다.
              const candidate = distances[smallest] + nextNode.weight;
              const nextNeighbor = nextNode.node;
              // 시작점에서 다음 노드까지 가장 짧은 거리를 구하기 위해, 
              // 방금 만든 후보 값과 기존에 저장된 거리값을 비교하여, 후보 값이 더 작으면,
              if (candidate < distances[nextNeighbor]) {
                // 새로운 최소 거리 값으로 업데이트한다.
                distances[nextNeighbor] = candidate;
                // 다음 노드로 가기 위해 직전에 들린 노드를 기록한다. 
                previous[nextNeighbor] = smallest;
                // 다음 노드와 그곳까지 걸린 거리(priority)를 nodes에 넣는다.
                nodes.enqueue(nextNeighbor, candidate);
              }
            }
          }
        }
        return path.concat(smallest).reverse();
      }

  }

  // 우선순위 큐
  class PriorityQueue {
    constructor() {
      this.values = [];
    }
    enqueue(val, priority) {
      this.values.push({ val, priority });
      this.sort();
    }
    dequeue() {
      return this.values.shift();
    }
    sort() {
      this.values.sort((a, b) => a.priority - b.priority);
    }
  }
  const graph = new WeightedGraph();
  graph.addVertex("A");
  graph.addVertex("B");
  graph.addVertex("C");
  graph.addVertex("D");
  graph.addVertex("E");
  graph.addVertex("F");
  
  graph.addEdge("A", "B", 4);
  graph.addEdge("A", "C", 2);
  graph.addEdge("B", "E", 3);
  graph.addEdge("C", "D", 2);
  graph.addEdge("C", "F", 4);
  graph.addEdge("D", "E", 3);
  graph.addEdge("D", "F", 1);
  graph.addEdge("E", "F", 1);
  
  console.log(graph.Dijkstra("A", "E"));
  
  // ["A", "C", "D", "F", "E"]