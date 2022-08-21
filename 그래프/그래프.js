/**
 * vertex 와 egde 가 있을때 그래프라고 부름
 * 
 * Direct Graph - 엣지가 방향성이 있을때
 * 
 * un-direct Graph - 방향성(화살표)이 없을때
 * 
 * weighted graph - 엣지가 벨류가 있을때  
 * 
 * vertext-List - 리스트안에 그래프의 vertex를 넣어주면 vertex-list [0,1,2,3,4,5]
 * 
 * edge-List - 엣지를 리스트에 넣으면 edge list -> [(0,1),(1,0)..]
 * 
 * Adjacency-List - 인프런 강의 참고
 * ㄴ> 장점 공간복잡도가 낮음 O(n) 리스트이기 때문에 loop 돌 수 있음.
 * 
 * Adjacency-Matrix - 인프런 강의 참고 엣지가 있으면 1 없으면 0 
 * ㄴ> 장점 엣지가 있는지 없는지 한번의 검색으로 알 수 있음. 단점 공간복잡도 n^2
 */