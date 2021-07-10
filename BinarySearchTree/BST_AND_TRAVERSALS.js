class Node {
  constructor(value) {
    this._left = null;
    this._right = null;
    this.value = value;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  _insert(value) {
    if (this._isEmpty()) {
      this.root = new Node(value);
      return this;
    }

    let _dir = "";
    let it = this.root;
    let previous = null;

    while (it) {
      _dir = it.value < value ? "_right" : "_left";
      previous = it;
      it = it[_dir];
    }

    previous[_dir] = new Node(value);

    return previous[_dir];
  }

  _find(value) {
    if (this._isEmpty()) return null;

    let it = this.root;
    let isExist = false;

    while (it) {
      if (it.value === value) {
        isExist = true;
        break;
      }
      it = it.value < value ? it._right : it._left;
    }

    console.log(`${value} ${isExist ? "" : "not"} exists in BST \n`);
  }

  _isEmpty() {
    return !this.root;
  }

  _BFSTraversal() {
    let traversedString = "Breadth First Traversal is:- \n ";
    if (this._isEmpty()) return null;

    let _queue = [this.root];

    while (_queue.length) {
      let temp = _queue.shift();
      traversedString += `${temp.value} `;

      if (temp._left) _queue.push(temp._left);
      if (temp._right) _queue.push(temp._right);
    }

    console.log(traversedString);
  }

  _DFSInOrderTraversal() {
    let traversedString = "Inorder Traversal is:- \n ";
    if (this._isEmpty()) return null;

    const _recursiveCall = (node) => {
      if (node) {
        _recursiveCall(node._left);
        traversedString += `${node.value} `;
        _recursiveCall(node._right);
      }
    };

    _recursiveCall(this.root);

    console.log(traversedString);
  }

  _DFSPostOrderTraversal() {
    let traversedString = "PostOrder Traversal is:- \n ";
    if (this._isEmpty()) return null;

    const _recursiveCall = (node) => {
      if (node) {
        _recursiveCall(node._left);
        _recursiveCall(node._right);
        traversedString += `${node.value} `;
      }
    };

    _recursiveCall(this.root);

    console.log(traversedString);
  }

  _DFSPreOrderTraversal() {
    let traversedString = "PreOrder Traversal is:- \n ";
    if (this._isEmpty()) return null;

    const _recursiveCall = (node) => {
      if (node) {
        traversedString += `${node.value} `;
        _recursiveCall(node._left);
        _recursiveCall(node._right);
      }
    };

    _recursiveCall(this.root);

    console.log(traversedString);
  }
}

const bst = new BST();

bst._insert(15);
bst._insert(19);
bst._insert(10);
bst._insert(29);
bst._insert(100);
bst._insert(25);
bst._insert(5);
bst._insert(11);
bst._insert(99);
bst._insert(0);
bst._insert(-1);

bst._find(1000);
bst._find(100);
bst._find(19);
bst._find(-2);
bst._find(10);

bst._BFSTraversal();
bst._DFSInOrderTraversal();
bst._DFSPreOrderTraversal();
bst._DFSPostOrderTraversal();
