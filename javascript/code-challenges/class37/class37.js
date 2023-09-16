'use strict';

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
            let edge1 = new Edge(vertex2, weight)
            let edge2 = new Edge(vertex1, weight)
            adjacencies1.push(edge1)
            adjacencies2.push(edge2)
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
            console.log(adjacencies)
        }
    }
    getSize() {
        return this.adjacencyList.size
    }
}

function businessTrip(graph, cities) {
    let price = 0;
    let firstCity = cities[0];
    console.log(graph.adjacencyList.keys())
    if (!graph.adjacencyList.has(firstCity)) {
        for (let i = 1; i < cities.length; i++) {

        }
    }
    // for(const city of cities){
    //   if(!this.adjacencyList.has(city)){

    //   }
    // }
}

const zero = new Vertex('amman');
const one = new Vertex('irbid');
const two = new Vertex('jerash');
const three = new Vertex('zarqa');
const four = new Vertex('mafraq');
const five = new Vertex('aqaba');


const shihab = new Vertex('shihab');


const myGraph = new Graph();

myGraph.addVertex(zero);
myGraph.addVertex(one);
myGraph.addVertex(two);
myGraph.addVertex(three);
myGraph.addVertex(four);
myGraph.addVertex(five);

// console.log(myGraph);


myGraph.addUndirectedEdge(zero, five, 30);
myGraph.addUndirectedEdge(zero, three, 40);
myGraph.addUndirectedEdge(three, one, 90);
myGraph.addUndirectedEdge(four, one, 50);
myGraph.addUndirectedEdge(two, three, 10);
myGraph.addUndirectedEdge(zero, two, 20);
myGraph.addUndirectedEdge(five, four, 70);


const cities = ['amman', 'jerash', 'zarqa'];

console.log(businessTrip(myGraph, cities));
// console.log(myGraph)



// myGraph.addDirectedEdge(shihab, one);


// console.log("after", myGraph);

// for (const [k, v] of myGraph.adjacencyList.entries()) {
//     console.log('k=> ', k, 'v=> ', v);
// }

// console.log(myGraph.getVertices())
// console.log(myGraph.getSize())
// console.log(myGraph.getNeighbors(zero))