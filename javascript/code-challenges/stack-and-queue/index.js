class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.length = 0;
    }
    isEmpty() {
        return this.top === null;
    }
    push(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.top = newNode;
            this.length++;
        } else {
            newNode.next = this.top;
            this.top = newNode;
            this.length++;
        }
    }
    pop() {
        if (this.isEmpty()) {
            return 'empty stack';
        } else {
            const temp = this.top;
            this.top = temp.next;
            temp.next = null;
            this.length--;
            return temp.value;
        }
    }
    peek() {
        if (this.isEmpty()) {
            return 'no top empty stack';
        } else {
            return this.top;
        }
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