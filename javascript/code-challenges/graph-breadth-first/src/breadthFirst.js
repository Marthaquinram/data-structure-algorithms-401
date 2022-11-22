
function breadthFirstSearch(node) {
  const results = [];
  const queue = [];
  const visited = new Set();
  visited.add(node.value);
  queue.push(node);
  while (queue.length > 0) {
    let front = queue.shift();
    results.push(front.value);
    let neighbors = this.getNeighbors(front);
    for (let i = 0; i <= neighbors.length; i++) {
      if (!visited.has(neighbors[item].node)) {
        queue.push(neighbors[item].node);
        visited.add(neighbors[item].node);
      }
    }
  }
  return results;
}
module.exports = breadthFirstSearch;
