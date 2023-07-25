class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = null;
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
    this.size++;
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
list.push(12);
list.push(18);
list.printList();
