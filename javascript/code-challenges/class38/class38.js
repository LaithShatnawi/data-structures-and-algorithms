/* eslint-disable indent */
/* eslint-disable no-unused-vars */
/* eslint-disable eol-last */
/* eslint-disable no-undef */
class Vertex {
    constructor(value) {
        this.value = value;
    }
}
class Edge {
    constructor(vertex, weight = 0) {
        this.vertex = vertex;
        this.weight = weight;
    }
}
class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }
    addVertex(vertex) {
        this.adjacencyList.set(vertex, []);
    }
    addDirectedEdge(start, end, weight) {
        if (!this.adjacencyList.has(start) || !this.adjacencyList.has(end)) {
            console.log(`vertex does not exist`);
            return;
        }
        else {
            const adjacencies = this.adjacencyList.get(start);
            let edge = new Edge(end, weight);
            adjacencies.push(edge);
        }
    }
    addUndirectedEdge(vertex1, vertex2, weight = 0) {
        if (!this.adjacencyList.has(vertex1) || !this.adjacencyList.has(vertex2)) {
            console.log(`vertex does not exist`);
            return;
        }
        else {
            const adjacencies1 = this.adjacencyList.get(vertex1);
            const adjacencies2 = this.adjacencyList.get(vertex2);
            let edge1 = new Edge(vertex2, weight);
            let edge2 = new Edge(vertex1, weight);
            adjacencies1.push(edge1);
            adjacencies2.push(edge2);
        }
    }
    getVertices() {
        return this.adjacencyList.keys();
    }
    getNeighbors(vertex) {
        if (!this.adjacencyList.has(vertex)) {
            return [];
        }
        else {
            const adjacencies = this.adjacencyList.get(vertex);
            console.log(adjacencies);
        }
    }
    getSize() {
        return this.adjacencyList.size;
    }
    depthFirst(node) {
        const visited = new Set();
        const result = [];

        const dfs = (vertex) => {
            visited.add(vertex);
            result.push(vertex);
            const collection = this.adjacencyList.get(vertex);

            for (const edge of collection) {
                if (!visited.has(edge.vertex)) {
                    dfs(edge.vertex);
                }
            }
        };
        dfs(node);
        return result;
    }
}
const zero = new Vertex(0);
const one = new Vertex(1);
const two = new Vertex(2);
const three = new Vertex(3);
const four = new Vertex(4);
const five = new Vertex(5);


const shihab = new Vertex('shihab');


const myGraph = new Graph();

myGraph.addVertex(zero);
myGraph.addVertex(one);
myGraph.addVertex(two);
myGraph.addVertex(three);
myGraph.addVertex(four);
myGraph.addVertex(five);

// console.log(myGraph);


myGraph.addDirectedEdge(zero, five);
myGraph.addDirectedEdge(zero, three);
myGraph.addDirectedEdge(three, one);
myGraph.addDirectedEdge(four, one);
myGraph.addDirectedEdge(two, three);
myGraph.addDirectedEdge(zero, two);
myGraph.addDirectedEdge(five, four);

console.log(myGraph.depthFirst(zero));