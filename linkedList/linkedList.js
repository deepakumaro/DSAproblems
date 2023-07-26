class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  #size;
  constructor() {
    this.head = null;
    this.tail = null;
    this.#size = null;
  }

  get size() {
    return this.#size;
  }

  push(value) {
    const node = new Node(value);
    // if list is empty add the element and make it head of the list
    if (this.head == null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.#size++;
  }

  pop() {
    if (this.head == null) return;
    if (this.size == 1) {
      this.head = null;
      this.tail = null;
      this.#size = 0;
      return;
    }
    let currentNode = this.head;
    let newTail = null;
    while (currentNode) {
      if (currentNode.next) {
        newTail = currentNode;
      }
      currentNode = currentNode.next;
    }
    const deletedNode = this.tail;
    this.tail = newTail;
    this.tail.next = null;
    this.#size = this.#size - 1;
    return deletedNode;
  }

  // remove duplicate from a linked list
  // it will work when list is sorted
  removeDuplicate() {
    let currentNode = this.head;
    while (currentNode) {
      let nextDistinctNode = currentNode.next;
      while (nextDistinctNode && nextDistinctNode.value == currentNode.value) {
        nextDistinctNode = nextDistinctNode.next;
      }
      currentNode.next = nextDistinctNode;
      currentNode = nextDistinctNode;
    }
  }

  printList() {
    if (this.head == null) {
      console.log("list is empty");
    }
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }
}

const list = new LinkedList();
list.push(6);
list.push(6);
list.push(8);
list.push(9);
list.push(10);
list.push(10);
list.printList();

console.log("after duplicate remove");
list.removeDuplicate();
list.printList();
console.log("size of list", list.size);
// list.pop();
// list.pop();
// list.pop();
list.printList();
console.log("size of list", list.size);
