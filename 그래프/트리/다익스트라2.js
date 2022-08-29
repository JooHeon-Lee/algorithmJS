/**
 * 간선에 음수 가중치가 있으면 안된다.
 *  

/*
 1. 최단 경로를 저장할 Distance 배열을 만든다. 출발 노드는 자기 자신이니 0으로 초기화한다. 

 Dist=[0, Infinity, Infinity, Infinity, Infinity]
 
  
 
 2. A에서 다음으로 갈 수 있는 지점들의 가중치를 변경한다.
 
  이때, Dist[A]+G[A][B]와 Dist[B]를 비교한다.
 
 Dist에 기록된 A까지의 최단 경로에 추가될 B의 가중치를 합한 값과 Dist에 기록된 B의 최단 경로를 비교하는 것.
 
 0 + 10 < Infinity이므로 Dist를 갱신한다.
 
 Dist=[0, 10, Infinity, Infinity, Infinity]
 
  
 
 3. A가 갈 수 있는 또다른 이웃 정점인 C도 똑같이 갱신해준다.
 
 Dist[A]+G[A][C]와 Dist[C]의 비교
 
 Dist=[0, 10, 5, Infinity, Infinity]
 
  
 
 4. A를 visited 처리해준다.
 
 A는 더이상 사용하지 않는다.
 
  
 
 5. 미탐색 정점 중 최단 경로를 가진 정점으로 간다.
 
 현재 Dist배열에서 최단 경로를 가진 정점은 C 정점이다.
 
  
 
 6. C 정점을 선택하고 경로를 확정한다.
 
 이 경로는 추후에도 값이 바뀌지 않는다.
 
  
 
 7. C에서 다음으로 갈 수 있는 지점들의 가중치를 변경한다.
 
 Dist[C](5)+G[C][B](3)와 Dist[B](10),
 
 Dist[C](5)+G[C][D](9)와 Dist[D](Infinity),
 
 Dist[C](5)+G[C][E](2)와 Dist[E](Infinity)를 각각 비교해 최단 경로를 갱신한다. 
 
 Dist=[0, 8, 5, 14, 7]
 
  
 
 8. C를 visited 처리해준다. 
 
  
 
 9. 미탐색 정점 중 최단 경로를 가진 정점으로 간다.
 
 현재 Dist배열에서 A,C를 제외한 최단 경로를 가진 정점은 E 정점이다. 
 
  
 
 10. 목적 정점인 D가 visited 처리가 되거나, 더 이상 미탐색 정점이 없을 때까지 반복한다.
*/

 class Heap {
    constructor() {
      this.items = [];
    }
  
    swap(idx1, idx2) {
      [this.items[idx1], this.items[idx2]] = [this.items[idx2], this.items[idx1]];
    }
  
    findParentIdx(idx) {
      return Math.floor((idx - 1) / 2);
    }
  
    findLeftChildIdx(idx) {
      return idx * 2 + 1;
    }
  
    findRightChildIdx(idx) {
      return idx * 2 + 2;
    }
  
    findParent(idx) {
      return this.items[this.findParentIdx(idx)];
    }
  
    findLeftChild(idx) {
      return this.items[this.findLeftChildIdx(idx)];
    }
  
    findRightChild(idx) {
      return this.items[this.findRightChildIdx(idx)];
    }
  
    peek() {
      return this.items[0];
    }
  
    size() {
      return this.items.length;
    }
  }

  // 힙을 상속받은 최소 힙 구현
  class MinHeap extends Heap {

    //값을 넣을 때 최소 힙이 유지될 수 있게 알맞은 위치로 넣어주는 bubbleUp
    bubbleUp() {
      let index = this.items.length - 1; //마지막으로 추가된 원소를 찾기
  
      while (this.findParent(index) && this.findParent(index)[1] > this.items[index][1]) {
        //부모값이 존재 && 자식이 부모보다 최솟값이라면
        this.swap(index, this.findParentIdx(index)); //두 값을 바꿔준다.
        index = this.findParentIdx(index); //계속해서 최소 힙을 만들어줌.
      }
    }
  
    //최솟값이 빠지면 마지막 노드를 root로 보내고 재배치하는 bubbleDown
    bubbleDown() {
      let index = 0;
  
      while ((this.findLeftChild(index) && this.findLeftChild(index)[1] < this.items[index][1]) ||
              (this.findRightChild(index) && this.findRightChild(index)[1] < this.items[index][1])) {
        //자식 중 부모보다 더 작은 값이 존재
        let smallerIndex = this.findLeftChildIdx(index);
  
        if (
          this.findRightChild(index) &&
          this.findRightChild(index)[1] < this.items[smallerIndex][1]
        ) {
          //오른쪽 자식이 존재하고, 왼쪽 값보다 더 작은 값이라면
          smallerIndex = this.findRightChildIdx(index);
        }
  
        this.swap(index, smallerIndex);
  
        index = smallerIndex;
      }
    }
  
    add(value) {
      this.items.push(value);
      this.bubbleUp();
    }
  
    poll() {
      if (this.items.length === 1) {
        return this.items.pop();
      }
      const value = this.items[0];
      this.items[0] = this.items.pop();
      this.bubbleDown();
  
      return value;
    }
  }

  //다익스트라 구현
  const dijkstra = (start, adjList, V) => {
    const minHeap = new MinHeap();
    const dist = Array(V + 1).fill(Infinity); 
    dist[start] = 0;
    minHeap.add([start, 0]);
  
    while (minHeap.size()) {
      const [vertex, cost] = minHeap.poll();
  
      if (!adjList[vertex]) continue;
      if (dist[vertex] < cost) continue;
  
      for (let i = 0; i < adjList[vertex].length; i++) {
        const [nextVertex, nextCost] = adjList[vertex][i];
  
        if (dist[nextVertex] > cost + nextCost) {
          dist[nextVertex] = cost + nextCost;
          minHeap.add([nextVertex, dist[nextVertex]]);
        }
      }
    }
  
    return dist;
  };

  const main = (function () {
    const fs = require('fs');
    const input = fs.readFileSync('input.txt').toString().trim().split('\n');
  
    const [V, E] = input[0].trim().split(' ').map(Number);
  
    const adjList = {};
  
    for (let i = 1; i <= V; i++) {
      adjList[i] = [];
    }
  
    for (let j = 1; j <= E; j++) {
      const [from, to, price] = input[j].trim().split(' ').map(Number);
      adjList[from].push([to, price]);
    }
  
    const answer = dijkstra(1, adjList, V); // A:1 부터 시작.
    console.log(answer);
  })();