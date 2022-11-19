export {};

interface Node<NV, EV> {
  value: NV;
  edges: Edge<NV, EV>[];
}

interface Edge<NV, EV> {
  value: EV;
  nodes: [Node<NV, EV>, Node<NV, EV>];
}

class Graph<NV, EV> {
  private nodes = new Set<Node<NV, EV>>();
  addNode(value: NV): Node<NV, EV> {
    const node: Node<NV, EV> = { value, edges: [] };
    this.nodes.add(node);
    return node;
  }

  addEdge(a: Node<NV, EV>, b: Node<NV, EV>, value: EV): void {
    const edge: Edge<NV, EV> = { value, nodes: [a, b] };
    a.edges.push(edge);
  }

  getNodes(): Set<Node<NV, EV>> {
    return this.nodes;
  }

  neighbors(node: Node<NV, EV>): Set<Node<NV, EV>> {
    const neighborsWithDupes = node.edges.map((edge) => edge.nodes[1]);
    const neighbors = new Set(neighborsWithDupes);
    return neighbors;
  }

  size(): number {
    return this.nodes.size;
  }
}

function businessTrip(
  graph: Graph<string, number>,
  tripQueue: Node<string, number>[]
): number | null {
  let cost = 0;
  let currentCity = tripQueue.shift()!;
  //while we can go through the list
  while (tripQueue.length > 0) {
    //find the adjacent city
    let neighbors = graph.neighbors(currentCity);
    let next = tripQueue.shift()!;
    //if the next city is not adjacent return null
    if (!neighbors.has(next)) {
      return null;
    }
    //otherwise, add the cost and continue
    cost +=
      currentCity.edges.find(
        (edge: Edge<string, number>) => edge.nodes[1] === next
      )?.value ?? 0;

    currentCity = next;
  }
  return cost;
}
