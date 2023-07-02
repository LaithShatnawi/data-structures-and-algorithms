'use strict';

// Require our linked list implementation
const Stack = require('./stack');
const Queue = require('./queue');

describe('Stack', () => {
    it('can return an empty linked list', () => {
        const stack = new Stack;
        expect(stack).toEqual({"length":0, 'top': null });
    });
    it('can properly insert into linked list', () => {
        const stack = new Stack();
        stack.push(1);
        expect(stack.top).toEqual({
            'next': null,
            'value': 1,
        });
    });
    it('The head property will properly point to the first node', () => {
        const stack = new Stack();
        stack.push(2);
        stack.push(4);
        stack.push(3);
        expect(stack.top.value).toEqual(3);
    });
    it('Can properly push multiple nodes into the linked list', () => {
        const stack = new Stack();
        stack.push(1);
        stack.push(2);
        stack.pop();
        stack.pop();
        expect(stack.pop()).toEqual('empty stack');
    });
    it('Will return true when finding a value that exists in ll', () => {
        const stack = new Stack();
        stack.push(1);
        stack.push(2);

        expect(stack.peek()).toEqual(2);
    });
    it('Will return false when a value does not exists in ll', () => {
        const stack = new Stack();
        expect(stack.pop()).toEqual('empty stack');
        expect(stack.peek()).toEqual('no top empty stack');
    });
});

describe('queue', () => {
    it('can return an empty linked list', () => {
        const queue = new Queue();
        expect(queue).toEqual({'length':0,'rear':null,'front': null });
    });
    it('can properly insert into linked list', () => {
        const queue = new Queue();
        queue.enqueue(1);
        expect(queue.front).toEqual({
            'next': null,
            'value': 1,
        });
    });
    it('The head property will properly point to the first node', () => {
        const queue = new Queue();
        queue.enqueue(2);
        queue.enqueue(4);
        queue.enqueue(3);
        expect(queue.front.value).toEqual(2);
    });
    it('Can properly push multiple nodes into the linked list', () => {
        const queue = new Queue();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.dequeue();
        queue.dequeue();
        expect(queue.dequeue()).toEqual('queue is empty');
    });
    it('Will return true when finding a value that exists in ll', () => {
        const queue = new Queue();
        queue.enqueue(1);
        queue.enqueue(2);

        expect(queue.peek()).toEqual(1);
    });
    it('Will return false when a value does not exists in ll', () => {
        const queue = new Queue();
        expect(queue.dequeue()).toEqual('queue is empty');
        expect(queue.peek()).toEqual('no front nor rear empty queue');
    });
});