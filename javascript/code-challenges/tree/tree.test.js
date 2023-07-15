'use strict';
const { BinarySearchTree, BinaryTree, Node } = require('./tree');

let tree = null;
let BST = null;

let one = new Node(1);
let two = new Node(2);
let three = new Node(3);
let four = new Node(4);
let five = new Node(5);
let six = new Node(6);
let seven = new Node(7);
describe("Binary Tree", () => {
    beforeAll(() => {
        four.left = two;
        four.right = six;
        two.left = one;
        two.right = three;
        six.left = five;
        six.right = seven;
        tree = new BinaryTree(four);
        BST = new BinarySearchTree(four);
    });
    it("constructor", () => {
        const newTree = new BinaryTree();
        expect(newTree.root).toBeNull();
        expect(tree.root.value).toEqual(4);
    });
    it('preOrder', () => {
        let expectedOutput = [4,2,1,3,6,5,7];
        let preOrder = tree.preOrder();
        expect(preOrder).toEqual(expectedOutput);
    });
    it('inOrder', () => {
        let expectedOutput = [1,2,3,4,5,6,7];
        let inOrder = tree.inOrder();
        expect(inOrder).toEqual(expectedOutput);
    });
    it('postOrder', () => {
        let expectedOutput = [1,3,2,5,7,6,4];
        let postOrder = tree.postOrder();
        expect(postOrder).toEqual(expectedOutput);
    });
    it('testing add ()', () => {
        BST.add(8);
        expect(seven.right.value).toEqual(8);
    });
    it('testing contains ()', () => {
        expect(BST.contains(9)).toEqual(false);
    });
})