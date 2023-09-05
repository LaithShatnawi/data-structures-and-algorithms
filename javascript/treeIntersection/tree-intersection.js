class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}
class BinaryTree {
    constructor(root = null) {
        this.root = root;
    }
    preOrder() {
        let result = [];
        let traverse = (node) => {
            result.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return result;
    }
    inOrder() {
        let result = [];
        let traverse = (node) => {
            if (node.left) traverse(node.left);
            result.push(node.value);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return result;
    }
    postOrder() {
        let result = [];
        let traverse = (node) => {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            result.push(node.value);
        }
        traverse(this.root);
        return result;
    }
}

class Node2 {
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
        const newNode = new Node2(key, value);
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

function tree_intersection(treeA, treeB) {
    const valueMap = new Hashmap(100);
    const traverse = (node) => {
        if (node) {
            valueMap.set(node.value, true);
            traverse(node.left);
            traverse(node.right);
        }
    };
    traverse(treeA.root);
    const intersectionSet = new Set();
    const check = (node) => {
        if (node) {
            if (valueMap.has(node.value)) {
                intersectionSet.add(node.value);
            }
            check(node.left);
            check(node.right);
        }
    };
    check(treeB.root);
    const arr = Array.from(intersectionSet);

    return arr;
}

const tree1 = new BinaryTree(
    new Node(10,
        new Node(5,
            new Node(2),
            new Node(7)
        ),
        new Node(15,
            new Node(12),
            new Node(20)
        )
    )
);

const tree2 = new BinaryTree(
    new Node(15,
        new Node(7,
            new Node(5),
            new Node(10)
        ),
        new Node(25,
            new Node(20),
            new Node(30)
        )
    )
);

const output = tree_intersection(tree1, tree2);
console.log(output);


