'use strict';

// Require our linked list implementation
const Linkedlist = require('../index');

describe('Linked List', () => {
  it('works', () => {
    expect(true).toBeTruthy();
  });
  it('can return an empty linked list', () => {
    const ll = new Linkedlist();
    expect(ll).toEqual({ 'head': null });
  });
  it('can properly insert into linked list', () => {
    const ll = new Linkedlist();
    ll.insert(1);
    expect(ll.head).toEqual({
      'next': null,
      'value': 1,
    });
  });
  it('The head property will properly point to the first node', () => {
    const ll = new Linkedlist();
    ll.insert(2);
    ll.insert(4);
    ll.insert(3);
    expect(ll.head.value).toEqual(2);
  });
  it('Can properly insert multiple nodes into the linked list', () => {
    const ll = new Linkedlist();
    ll.insert(1);
    ll.insert(2);
    expect(ll).toEqual({
      'head': {
        'next': {
          'value': 2,
          'next': null
        },
        'value': 1
      },
    });
  });
  it('Will return true when finding a value that exists in ll', () => {
    const ll = new Linkedlist();
    ll.insert(1);
    ll.insert(2);
    expect(ll.includes(2)).toEqual(true);
  });
  it('Will return false when a value does not exists in ll', () => {
    const ll = new Linkedlist();
    ll.insert(1);
    ll.insert(2);
    expect(ll.includes(3)).toEqual(false);
  });
  it('Can properly return a collection of all the values that exist in the linked list', () => {
    const ll = new Linkedlist();
    ll.insert(3);
    ll.insert(2);
    ll.insert(1);
    expect(ll).toEqual({
      'head': {
        'next': {
          'value': 2,
          'next': {
            'value': 1,
            'next': null
          }
        },
        'value': 3
      }
    });
  });
});
