

/*
  Array implementation of Max Heaps.
*/

class MaxHeap {
    constructor() {
        this.values = [];
    }

    _swap(pos1, pos2) {
      let _temp = this.values[pos1];
      this.values[pos1] = this.values[pos2];
      this.values[pos2] = _temp;
    }

    _insert(value) {
       /* Checking wheather Heap is Empty or not. */
       if(this._isEmpty()) {
          this.values.push(value);
          return value;
       }

       this.values.push(value);
       this._buubleUp();
       return value;
    }

    _buubleUp() {
        let _it = this.values.length - 1;

        while(_it>= 0) {
            let _parentIndex = Math.floor((_it - 1)/ 2);

            if(this.values[_parentIndex] < this.values[_it]) {
               this._swap(_parentIndex, _it);
            }

            _it = _parentIndex;
        }
    }

    _printHeap() {
        console.log('Heap :-', this.values, '\n');
    }

    _isEmpty() {
        return !this.values.length;
    }

    createMaxHeap(array) {
        if()
        for(let i = 0; i < array.length; i++) {

        }
    }
}

let maxHeap = new MaxHeap();
maxHeap._insert(15);
maxHeap._insert(10);
maxHeap._insert(0);
maxHeap._insert(21);
maxHeap._insert(90);
maxHeap._insert(91);
maxHeap._insert(-1);
maxHeap._printHeap();