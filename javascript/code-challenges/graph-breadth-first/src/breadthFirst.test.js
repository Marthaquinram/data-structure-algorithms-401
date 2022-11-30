
describe('breadthFirst', () => {
  it('performs a bfs and returns the nodes in the order that they were visited', () => {
    class Graph {
      constructor() {
        this.adjacencyList = new Map();
        const graph = new Graph();
        const n1 = new Node('Pandora');
        const n2 = new Node('Arendelle');
        const n3 = new Node('Metroville');
        const n4 = new Node('Monstroplolis');
        const n5 = new Node('Narnia');
        const n6 = new Node('Naboo');

        graph.addNode(n1);
        graph.addNode(n2);
        graph.addNode(n3);
        graph.addNode(n4);
        graph.addNode(n5);
        graph.addNode(n6);

        graph.addEdge(n1, n2);
        graph.addEdge(n2, n3);
        graph.addEdge(n2, n4);
        graph.addEdge(n3, n4);
        graph.addEdge(n3, n5);
        graph.addEdge(n3, n6);
        graph.addEdge(n4, n6);

        expect(graph.breadthFirst(n1)).toEqual(['Pandora', 'Arendelle', 'Metroville', 'Monstroplolis', 'Narnia', 'Naboo']);
      }
    }
  });
});
