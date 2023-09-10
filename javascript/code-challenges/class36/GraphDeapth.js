class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.length = 0;
    }
    isEmpty() {
        return this.front === null;
    }
    enqueue(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.front = newNode;
            this.rear = newNode;
            this.length++;
        } else {
            this.rear.next = newNode;
            this.rear = newNode;
            this.length++;
        }
    }
    dequeue() {
        if (this.isEmpty()) {
            return 'queue is empty';
        } else {
            const temp = this.front;
            this.front = temp.next;
            temp.next = null;
            this.length--;
            return temp.value;
        }
    }
    peek() {
        if (this.isEmpty()) {
            return 'no front nor rear empty queue';
        } else {
            return this.front.value;
        }
    }
}


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
            console.log(`vertex does not exist`)
            return;
        }
        else {
            const adjacencies = this.adjacencyList.get(start);
            let edge = new Edge(end, weight);
            adjacencies.push(edge);
        }
    }
    BreadthFirst(vertex) {
        const nodes = new Map();
        const breadth = new Queue();
        const visited = new Set();

        breadth.enqueue(vertex);
        visited.add(vertex);

        while (!breadth.isEmpty()) {
            const front = breadth.dequeue();
            nodes.addVertex(front);
            front.forEach(element => {

            });
        }
        return nodes;
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

console.log(myGraph);


myGraph.addDirectedEdge(zero, five);
myGraph.addDirectedEdge(zero, three);
myGraph.addDirectedEdge(three, one);
myGraph.addDirectedEdge(four, one);
myGraph.addDirectedEdge(two, three);
myGraph.addDirectedEdge(zero, two);
myGraph.addDirectedEdge(five, four);





myGraph.addDirectedEdge(shihab, one);


console.log("after", myGraph);

for (const [k, v] of myGraph.adjacencyList.entries()) {
    console.log('k=> ', k, 'v=> ', v);
}
