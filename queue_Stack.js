const Stack = require('./stack');

class Queue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(data) {
    this.stack2.push(data);
  }

  dequeue() {
    if (this.stack1.top === null) {
      while (!isEmpty(this.stack2)) {
        this.stack1.push(this.stack2.pop());
      }
    }
    return this.stack1.pop();
  }
}

function peek(queue) {
}

function isEmpty(stack) {
  return stack.top === null;
}

function display(queue) {
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
  q.dequeue();
  console.log(JSON.stringify(q, null, 2));
}
main();
