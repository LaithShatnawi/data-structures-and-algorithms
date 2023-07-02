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
            return this.top.value;
        }
    }
}

module.exports = Stack;