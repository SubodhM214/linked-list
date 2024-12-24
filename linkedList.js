// Linked List in Javascript

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }

  prepend(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  append(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
  }

  getHead() {
    return this.head.data;
  }

  getTail() {
    let temp = this.head;
    while (temp.next) {
      temp = temp.next;
    }
    return temp.data;
  }

  size() {
    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }

  at(index) {
    let len = this.size();
    let count = 0;
    if (index < 0 || index >= this.size()) {
      console.error("Invalid Index");
      return null;
    }
    let current = this.head;
    while (count < index) {
      count += 1;
      current = current.next;
    }
    return current.data;
  }

  contains(data) {
    let current = this.head;
    while (current) {
      if (current.data === data) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  find(data) {
    let count = 0;
    let current = this.head;
    while (count < this.size()) {
      if (current.data === data) {
        return count;
      }
      count += 1;
      current = current.next;
    }
    return null;
  }

  insertAt(data, index) {
    if (index < 0 || index > this.size()) {
      console.error("Invalid Index");
      return;
    }

    const newNode = new Node(data);
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }

    newNode.next = current.next;
    current.next = newNode;
  }

  pop() {
    if (!this.head) {
      return;
    }

    let current = this.head;
    while (current.next.next) {
      current = current.next;
    }

    current.next = null;
  }

  removeAt(index) {
    if (index < 0 || index > this.size()) {
      console.error("Invalid Index");
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }

    if (current.next) {
      current.next = current.next.next;
    }
  }

  toString() {
    let current = this.head;
    let result = "";
    while (current) {
      result += `(${current.data})->`;
      current = current.next;
    }
    result += "null";
    return result;
  }
}
module.exports = LinkedList;
