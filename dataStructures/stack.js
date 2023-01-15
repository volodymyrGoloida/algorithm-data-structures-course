class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

//last in  === first out
//
class StackLinkList {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push() {
    var newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }

    return ++this.size;
  }
  pop() {
    if (this.first) {
      return null;
    }
    const temp = this.first;
    if (this.size === 0) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.val;
  }
}
//or
const stack = [];
stack.push("qwe");
stack.pop();
// or shift unshfit but pop push is O(n)
