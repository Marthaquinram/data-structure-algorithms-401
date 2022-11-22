const Edge = require('./edge');

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addNode(data) {
    let arr = [];
    this.adjacencyList.set(data.value, arr);
  }
  addEdge(start, end, weight = 0) {
    let e = new Edge(end, weight);
    let neighbors = this.adjacencyList.get(start.value);
    neighbors.push(e);
  }
  getNodes() {
    const nodes = [];
    for (const key of this.adjacencyList.keys()) {
      nodes.push(key);
    }
    return nodes;
  }
  getNeighbors(nodey) {
    return this.adjacencyList.get(nodey.value);
  }
  size() {
    // hashmap.size() returns the # of elements in the hashmap
    return this.adjacencyList.size;
  }
}
module.exports = Graph;
