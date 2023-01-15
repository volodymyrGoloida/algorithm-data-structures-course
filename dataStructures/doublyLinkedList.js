class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.tail) return undefined;
    const poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      const newTail = poppedNode.prev;
      this.tail = newTail;
      newTail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }
  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    const halfLength = Math.floor((this.length - 1) / 2);
    let current;
    let count;
    if (index <= halfLength) {
      count = 0;
      current = this.head;
      while (count !== index) {
        current = current.next;
        count++;
      }
    } else {
      count = this.length - 1;
      current = this.tail;
      while (count !== index) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }
  set(index, val) {
    const node = this.get(index);
    if (node !== null) {
      node.val = val;
      return true;
    }
    return false;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    let newNode = new Node(val);
    let beforeNode = this.get(index - 1);
    let afterNode = beforeNode.next;

    (beforeNode.next = newNode), (newNode.prev = beforeNode);
    (newNode.next = afterNode), (afterNode.prev = newNode);
    this.length++;
    return true;
  }
  remove(index) {
    //index = 1
    if (index < 0 || index > this.length) return null;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    const deletedNode = this.get(index);
    // console.log(deletedNode);
    deletedNode.prev.next = deletedNode.next; // 2.prev(1).next(2) =  2(deletedNode).3(next)
    deletedNode.next.prev = deletedNode.prev;

    deletedNode.next = null;
    deletedNode.prev = null;
    this.length--;

    console.log("after", { beforeNode, newNode });
    return deletedNode;
  }
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let oldPrev;
    let oldNext;

    for (let i = 0; i < this.length; i++) {
      oldNext = node.next; // oldNext  = 5.10
      oldPrev = node.prev; //oldPrev = null
      node.next = oldPrev; //5.(10,15,20) = null 5.next = nu;ll
      node.prev = oldNext; //5.prev(null) = 10

      node = oldNext; // 5 = 10
    }
    return this;
  }
  print() {
    var arr = [];
    var current = this.head;
    console.log({ head: this.head });
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }

  //   insert(indx, val) {
  //     if (indx === 0) {
  //       return !!this.unshift();
  //     }
  //     if (indx === this.length) {
  //       return !!this.push;
  //     }
  //     const newNode = new Node(val);
  //     const replacedNode = this.get(indx);
  //     if (replacedNode !== null) {
  //       newNode.prev = { ...replacedNode.prev };
  //       newNode.next = replacedNode;
  //       if (replacedNode.prev) {
  //         replacedNode.prev.next = newNode;
  //       }

  //       replacedNode.prev = newNode;
  //       this.length++;
  //       return true;
  //     }
  //     return false;
  //   }

  shift() {
    if (!this.head) return undefined;
    const oldHead = this.head;
    if (this.length === 1) {
      this.tail = null;
      this.head = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }

    this.length--;

    return oldHead;
  }
}
const list = new DoublyLinkedList();
list.push(5).push(10).push(15).push(20);
list.print();
list.reverse();
console.log(list);
list.print();
// list.print();
// console.log(list.remove(1), list);
