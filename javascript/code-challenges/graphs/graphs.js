
class Graph {
  value;
  constructor() {
    // this.value = {};
  }
  addNode(value) {
    // this.value[value] = [];
  }
  addEdge() {

  }
  getNode() {

  }
  getNeighbors() {

  }
  size() {

  }

}


// function breadthFirst<NV, EV>(graph: Graph<NV, EV>, start: Node<NV, EV>): NV[] {
//   const q = [start];
//   const visited = new Set < Node < NV, EV>> ();
//   const traversal: NV[] = [];
//   let next = q.shift();
//   while (next !== undefined) {
//     if (!visited.has(next)) {
//       visited.add(next);
//       traversal.push(next.value);
//       q.push(...graph.neighbors(next));
//     }
//     next = q.shift();
//   }
//   return traversal;
// }

  // size(): number {
  //   let counter = 0;
  //   let tracker = this.start;
  //   while (tracker != undefined) {
  //     tracker = tracker.next;
  //     counter++;
  //   }
  //   return counter;
  // }
