//FIRST IN FIRST OUT
const queue = [];
queue.push("qwe");
queue.shift();
// or unshift + pop
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

//FIRST IN FIRST OUT

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }
  dequeue() {
    if (!this.head) return null;
    const currentFirst = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = currentFirst.next;
    this.size--;

    return currentFirst.val;
  }
}
