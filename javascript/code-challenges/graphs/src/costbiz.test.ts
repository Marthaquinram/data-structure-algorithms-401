// export {};

// interface Node<NV, EV> {
//   value: NV;
//   edges: Edge<NV, EV>[];
// }

// interface Edge<NV, EV> {
//   value: EV;
//   nodes: [Node<NV, EV>, Node<NV, EV>];
// }

// class Graph<NV, EV> {
//   private nodes = new Set<Node<NV, EV>>();
//   addNode(value: NV): Node<NV, EV> {
//     const node: Node<NV, EV> = { value, edges: [] };
//     this.nodes.add(node);
//     return node;
//   }

//   addEdge(a: Node<NV, EV>, b: Node<NV, EV>, value: EV): void {
//     const edge: Edge<NV, EV> = { value, nodes: [a, b] };
//     a.edges.push(edge);
//   }

//   getNodes(): Set<Node<NV, EV>> {
//     return this.nodes;
//   }

//   neighbors(node: Node<NV, EV>): Set<Node<NV, EV>> {
//     const neighborsWithDupes = node.edges.map((edge) => edge.nodes[1]);
//     const neighbors = new Set(neighborsWithDupes);
//     return neighbors;
//   }

//   size(): number {
//     return this.nodes.size;
//   }
// }

// const graph = new Graph<string, undefined>();
// const pandora = graph.addNode("Pandora");
// const arendelle = graph.addNode("Arendelle");
// const metroville = graph.addNode("Metroville");
// const monstropolis = graph.addNode("Monstropolis");
// const narnia = graph.addNode("Narnia");
// const naboo = graph.addNode("Naboo");

// graph.addEdge(pandora, arendelle, undefined);
// graph.addEdge(arendelle, monstropolis, undefined);
// graph.addEdge(arendelle, metroville, undefined);
// graph.addEdge(metroville, monstropolis, undefined);
// graph.addEdge(metroville, narnia, undefined);
// graph.addEdge(metroville, naboo, undefined);
// graph.addEdge(monstropolis, naboo, undefined);
// graph.addEdge(narnia, naboo, undefined);
// // Bi-directional edges
// graph.addEdge(arendelle, pandora, undefined);
// graph.addEdge(metroville, arendelle, undefined);
// graph.addEdge(monstropolis, arendelle, undefined);
// graph.addEdge(monstropolis, metroville, undefined);
// graph.addEdge(naboo, metroville, undefined);
// graph.addEdge(narnia, metroville, undefined);
// graph.addEdge(naboo, monstropolis, undefined);
// graph.addEdge(naboo, narnia, undefined);

// test("businessTrip", () => {
//   expect(businessTrip(graph, ["metroville, pandora"])).toBe(82);
//   expect(businessTrip(graph, ["arendelle, monstropolis, naboo"])).toBe(82);
//   expect(businessTrip(graph, ["naboo, pandora"])).toBe(null);
//   expect(businessTrip(graph, ["narnia, arendelle, naboo"])).toBe(null);
// });
