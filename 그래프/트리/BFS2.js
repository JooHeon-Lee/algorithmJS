
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
        console.log(`graph[${node}] : ${graph[node]}`);
        console.log(`unvisitedStack : ${needVisit}`);
        console.log(`visited :::: ${visited}`);
      }
    }
    return visited;
  };
  
  console.log(BFS(graph, "A"));
  // ["A", "B", "C", "D", "G", "H", "I", "E", "F", "J"]