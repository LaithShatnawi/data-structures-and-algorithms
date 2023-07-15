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
class BinarySearchTree extends BinaryTree {
    constructor(root) {
        super(root);
    }
    add(value) {
        let newNode = new Node(value);
        let traverse = (node) => {
            if (newNode.value < node.value) {
                if (!node.left) {
                    node.left = newNode;
                } else {
                    if (node.left) traverse(node.left);
                }
            } else {
                if (!node.right) {
                    node.right = newNode;
                } else {
                    if (node.right) traverse(node.right);
                }
            }
        }
        traverse(this.root);
    }
    contains(value) {
        let result = [];
        let traverse = (node) => {
            if (node.left) traverse(node.left);
            result.push(node.value);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return result.includes(value);
    }
}

let tree = null;

let one = new Node(1);
let two = new Node(2);
let three = new Node(3);
let four = new Node(4);
let five = new Node(5);
let six = new Node(6);
let seven = new Node(7);

four.left = two;
four.right = six;
two.left = one;
two.right = three;
six.left = five;
six.right = seven;

tree = new BinaryTree(four);
let BST = new BinarySearchTree(four);

let preOrder = tree.preOrder();
let inOrder = tree.inOrder();
let postOrder = BST.postOrder();

console.log('preOrder: ', preOrder);
console.log('inOrder: ', inOrder);
console.log('postOrder: ', postOrder);
BST.add(8);
console.log(seven.right);
console.log(BST.contains(4));

module.exports = {
    Node: Node,
    BinaryTree: BinaryTree,
    BinarySearchTree: BinarySearchTree
}