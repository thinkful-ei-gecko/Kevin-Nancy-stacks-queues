const Stack = require('./stack');

class Queue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
    // this.first = null;
    // this.last = null;
  }

  enqueue(data) {
    if (this.stack2.top === null) {
      this.stack2.push(data);
      // this.first = this.stack2.top;
      // this.last = this.first;
    } else {
      this.stack2.push(data);
      // this.last = this.stack2.top;
    }
    // console.log('stack2', this.stack2);
  }

  dequeue() {
    if (this.stack1.top === null) {
      while (!isEmpty(this.stack2)) {
        this.stack1.push(this.stack2.pop());
      }
    }
    let temp = this.stack1.pop();
    if (this.stack1.top === null) {
      // this.first = null;
      // this.last = null;
    }
    // console.log('stack1', this.stack1);
    return temp;
  }
}

function peek(queue) {
  if (queue.first) {
    return queue.first.data;
  }
  return null;
}

function isEmpty(stack) {
  return stack.top === null;
}

function display(queue) {
  // let result = '';
  // let curr = queue.first;
  // while (curr !== null) {
  //   result += curr.data + ', ';
  //   curr = curr.next;
  // }
  // return result;

}

function main() {
  let q = new Queue();
  q.enqueue('Kirk');
  q.enqueue('Spock');
  q.dequeue();
  q.enqueue('Luke');
  q.dequeue();
  q.enqueue('Chewbacca');
  q.dequeue();
  q.enqueue('HanSolo');
  q.dequeue();
  console.log(JSON.stringify(q, null, 2));
}
main();
