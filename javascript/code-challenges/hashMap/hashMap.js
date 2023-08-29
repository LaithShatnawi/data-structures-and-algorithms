"use strict";
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
    append(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = node;
    }
    print() {
        let values = [];
        let current = this.head;
        while (current) {
            values.push(current.value);
            current = current.next;
        }
        return values;
    }
}

class Hashmap {
    constructor(size) {
        this.size = size;
        this.map = new Array(size);
    }
    hash(key) {
        const asciiCodeSum = key.split("").reduce((acc, char) => {
            return acc + char.charCodeAt();
        }, 0);
        const multiPrime = asciiCodeSum * 599;
        const theIndex = multiPrime % this.size;
        return theIndex;
    }
    keys() {
        const arr = []
        this.map.forEach((ll) => {
            ll.print().map((item, idx) => {
                arr.push(Object.keys(ll.print()[idx]))
            })
        })
        return arr

    }
    has(key) {
        let index = this.hash(key)
        let curr = this.map[index]?.head
        while (curr) {
            if (curr.value.hasOwnProperty(key)) {
                return true
            }
            curr = curr.next
        }
        return false
    }
    get(key) {
        let index = this.hash(key)
        let curr = this.map[index].head
        while (curr) {
            if (curr.value.hasOwnProperty(key)) {
                return curr.value[key]
            }
            curr = curr.next
        }

    }
    set(key, value) {
        const hash = this.hash(key);
        if (!this.map[hash]) {
            this.map[hash] = new LinkedList();
        }
        // console.log(this.map[hash][0][0])
        // for (let i = 0; i < this.map[hash].length; i++) {
        //       if (this.map[hash][i][0] === key) {
        //         this.map[hash][i][1] = value;
        //       return;
        //       }
        // }
        this.map[hash].append({ [key]: value })
    }
}

const myHashmap = new Hashmap(10);

myHashmap.set("laith", 1)
myHashmap.set("ahmed", 2)
myHashmap.set("jamal", 3)
myHashmap.set("mohammed", 4)
myHashmap.set("abdullah", 5)
myHashmap.set("abdullah", 6)
myHashmap.map.forEach((ll) => {
    console.log(ll.print());
})
console.log(myHashmap.keys())