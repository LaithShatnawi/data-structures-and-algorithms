"use strict";

class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(key, value) {
        const newNode = new Node(key, value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    find(key) {
        let current = this.head;
        while (current) {
            if (current.key === key) {
                return current.value;
            }
            current = current.next;
        }
        return undefined;
    }
}

class Hashmap {
    constructor(size) {
        this.size = size;
        this.map = new Array(size).fill(null).map(() => new LinkedList());
    }

    hash(key) {
        key = String(key);
        const asciiCodeSum = key.split("").reduce((acc, char) => {
            return acc + char.charCodeAt();
        }, 0);
        const multiPrime = asciiCodeSum * 599;
        const theIndex = multiPrime % this.size;
        return theIndex;
    }

    keys() {
        const arr = [];
        this.map.forEach((ll) => {
            let current = ll.head;
            while (current) {
                arr.push(current.key);
                current = current.next;
            }
        });
        return arr;
    }

    has(key) {
        const index = this.hash(key);
        const ll = this.map[index];
        if (!ll) {
            return false;
        }
        return ll.find(key) !== undefined;
    }

    get(key) {
        const index = this.hash(key);
        const ll = this.map[index];
        if (!ll) {
            return undefined;
        }
        return ll.find(key);
    }

    set(key, value) {
        const index = this.hash(key);
        let ll = this.map[index];
        if (!ll) {
            ll = new LinkedList();
            this.map[index] = ll;
        }
        ll.append(key, value);
    }
}

function leftJoin(synonymsMap, antonymsMap) {
    const result = new Hashmap(synonymsMap.size);

    synonymsMap.keys().forEach((key) => {
        let synonymList = synonymsMap.get(key);
        let antonymList = antonymsMap.get(key);

        if (antonymList) {
            if (!Array.isArray(synonymList)) {
                synonymList = [synonymList];
            }
            if (!Array.isArray(antonymList)) {
                antonymList = [antonymList];
            }

            const mergedList = synonymList.concat(antonymList);
            result.set(key, mergedList);
        } else {
            result.set(key, synonymList);
        }
    });

    return result;
}

const synonymsMap = new Hashmap(5);
synonymsMap.set("happy", "joyful");
synonymsMap.set("sad", "unhappy");
synonymsMap.set("bright", "shiny");
synonymsMap.set("small", "tiny");

const antonymsMap = new Hashmap(5);
antonymsMap.set("happy", "unhappy");
antonymsMap.set("big", "small");
antonymsMap.set("bright", "dull");

const result = leftJoin(synonymsMap, antonymsMap);
console.log(result.keys());
console.log(result.get("happy"));
