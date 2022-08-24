// stack 1개 큐 1개

const graph = {
    A: ['B', 'C'],
    B: ['A', 'D'],
    C: ['A', 'G', 'H', 'I'],
    D: ['B', 'E', 'F'],
    E: ['D'],
    F: ['D'],
    G: ['C'],
    H: ['C'],
    I: ['C', 'J'],
    J: ['I']
  };

  //console.log(...graph['A']);

const dfs = (graph,startNode) => {

    let visited = [];
    let unvisitedStack = [];

    unvisitedStack.push(startNode);

    while(unvisitedStack.length !== 0) {
        const node = unvisitedStack.pop();
        console.log(`node :: ${node}`)
        if(!visited.includes(node)) {
            visited.push(node);
            unvisitedStack = [...unvisitedStack,...graph[node]];
            console.log(`graph[${node}] : ${graph[node]}`);
            console.log(`unvisitedStack : ${unvisitedStack}`);
            console.log(`visited :::: ${visited}`);
        } 
    }

    return visited;

}

console.log(dfs(graph, 'A'));