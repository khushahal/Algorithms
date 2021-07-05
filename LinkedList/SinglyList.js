class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  _push(val) {
    const _newNode = new Node(val);

    /* Check Wheather List is Empty... */
    if (this._isEmpty()) {
      this.head = _newNode;
      this.tail = _newNode;
      this.length = 1;
      return _newNode.val;
    }

    this.tail.next = _newNode;
    this.tail = _newNode;
    this.length += 1;
    return _newNode.val;
  }

  _isInValid(index) {
    return index < 0 || index > this.length || !this.length;
  }

  _reintializeList() {
    let _node = this.head.val;
    this.length = 0;
    this.head = null;
    this.tail = null;
    return _node;
  }

  _pop() {
    /* Check Wheather List is Empty ... */

    if (this._isEmpty()) return null;

    if (this.length === 1) return this._reintializeList();

    let node = this.head;

    while (node.next !== this.tail) node = node.next;

    let temp = { ...this.tail };
    node.next = null;
    this.tail = node;
    this.length -= 1;

    return temp.val;
  }

  _isEmpty() {
    return !this.length;
  }

  _traverse() {
    if (this._isEmpty()) return null;

    let _string = ``;
    let node = this.head;
    while (node !== null) {
      _string += node.next !== null ? `${node.val} --> ` : `${node.val}`;
      node = node.next;
    }

    console.log(_string);
  }

  _getNode(postiton) {
    if (this._isInValid(postiton)) return null;

    let count = 0;
    let node = this.head;

    while (node !== null) {
      count += 1;
      if (count === postiton) {
        return node;
      }
      node = node.next;
    }
  }

  _insertAfter(position, val) {
    if (this._isInValid(position)) return null;
  
    const _newNode = new Node(val);

    if (position === 1) {
      let temp = this.head;
      this.head = _newNode;
      this.head.next = temp;
      return;
    }

    let count = 1;
    let node = this.head;

    while(node !== null) {
      if(count === position) {
        break;
      }

      ++count;
      node = node.next;
    }

    let _temp = node.next;
    node.next = _newNode;
    _newNode.next = _temp;
    this.length += 1;

    return _newNode.val;
  }
}

let list = new SinglyLinkedList();
list._push(10);
list._push(0);
list._push(300);
list._push("Suraj");
list._push("Shivam");
list._insertAfter(1, "Shivani Shingh");
list._traverse();
