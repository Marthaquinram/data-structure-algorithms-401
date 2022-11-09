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
