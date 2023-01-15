class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  find(value) {
    if (this.root === null) return false;
    var current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }

  BFS() {
    // breadth first  search solution
    const result = [];
    const queue = [];
    queue.push(this.root);
    let node = null;
    while (queue.length !== 0) {
      node = queue.shift();
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
      result.push(node.value);
    }
    return result;
  }

  DFSPreOrder() {
    const data = [];

    const traverse = (node) => {
      data.push(node.value);
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
    };
    traverse(this.root);
    return data;
  }

  DFSPostOrder() {
    const data = [];

    const traverse = (node) => {
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
      data.push(node.value);
    };
    traverse(this.root);
    return data;
  }
  DFSInOrder() {
    const data = [];

    const traverse = (node) => {
      if (node.left) {
        traverse(node.left);
      }
      data.push(node.value);
      if (node.right) {
        traverse(node.right);
      }
    };
    traverse(this.root);
    return data;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (value === current.value) {
        return undefined;
      }
      if (value < current.value) {
        // 5 < 10  4 < 10 4 < 5
        if (current.left === null) {
          // true   false true
          current.left = newNode; // left = 5    left  = 4
          return this;
        }
        current = current.left; // current = 5
      } else if (value > current.value) {
        //13 > 10
        if (current.right === null) {
          // true
          current.right = newNode; // right 13
          return this;
        }
        current = current.right;
      }
    }
  }
}

//      10
//   5      13
// 4  7    12 16

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(13);
tree.insert(5);
tree.insert(4);
tree.insert(7);
tree.insert(12);
tree.insert(16);

const tree2 = new BinarySearchTree();
tree2.insert(10);
tree2.insert(6);
tree2.insert(8);
tree2.insert(3);
tree2.insert(15);
tree2.insert(20);
console.log(tree2.BFS());
console.log(tree2.DFSInOrder());
console.log(tree2.DFSPostOrder());
