// UNDIRECTED GRAPH
class Graph {
  constructor() {
    this.adjencyList = {};
  }

  addVertex(name) {
    if (!this.adjencyList[name]) {
      this.adjencyList[name] = [];
    }
  }

  addEdge(v1, v2) {
    this.adjencyList[v2].push(v1);
    this.adjencyList[v1].push(v2);
  }
  removeEdge(v1, v2) {
    this.adjencyList[v1] = this.adjencyList[v1].filter((edge) => edge !== v2);
    this.adjencyList[v2] = this.adjencyList[v2].filter((edge) => edge !== v1);
  }
  removeVertex(deletedVertex) {
    for (const key in this.adjencyList) {
      this.adjencyList[key] = this.adjencyList[key].filter((v) => {
        v !== deletedVertex;
      });
    }
    delete this.adjencyList[deletedVertex];
  }
  DFRecursive(start) {
    const list = [];
    const visitedEdges = {};
    const adjencyList = this.adjencyList;
    (function traverse(vertex) {
      if (!vertex) {
        return;
      }

      list.push(vertex);
      visitedEdges[vertex] = true;
      adjencyList[vertex]?.forEach((v) => {
        if (!visitedEdges[v]) traverse(v);
      });
    })(start);

    return list;
  }
  DFIterative(start) {
    const stack = [start];
    const visitedList = [];
    const visitedEdges = {};

    visitedEdges[start] = true;
    let currentVertex;
    while (stack.length > 0) {
      currentVertex = stack.pop();
      visitedList.push(currentVertex);
      this.adjencyList;
      [currentVertex].forEach((neighbor) => {
        if (!visitedEdges[neighbor]) {
          visitedEdges[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return visitedList;
  }
  BF(start) {
    const queue = [start];
    const result = [];
    const visited = {};
    let currentVertex;
    visited[start] = true;
    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);
      this.adjencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
  }
}

const g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");
console.log(g.DFIterative("A"));

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F
