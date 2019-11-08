class _Node {
  constructor(data, next, prev) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    let node = new _Node(data, null, null);
    if (!this.first) {
      this.first = node;
    }

    if (this.last) {
      this.last.next = node;
      node.prev = this.last;
    }

    this.last = node;
  }

  dequeue() {
    let node = this.first;
    if (node === null) {
      console.error('Queue is empty!');
      return;
    }

    this.first = node.next;
    this.first.prev = null;
    if (node === this.last) {
      this.last = null;
    }
    return node.data;
  }
}

function peek(queue) {
  if (queue.first) {
    return queue.first.data;
  }
  return null;
}

function isEmpty(queue) {
  return queue.first === null;
}

function display(queue) {
  let result = '';
  let curr = queue.first;
  while (curr !== null) {
    result += `[${curr.data}, Prev: ${curr.prev ? curr.prev.data : 'null'}, Next: ${curr.next ? curr.next.data : 'null'}]
    `;
    curr = curr.next;
  }
  return result;
}

function main() {
  let q = new Queue();
  q.enqueue('Kirk');
  q.enqueue('Spock');
  q.enqueue('Uhura');
  q.enqueue('Sulu');
  q.enqueue('Checkov');
  // console.log(JSON.stringify(q, null, 2));
  // console.log(JSON.stringify(peek(q), null, 2));
  console.log(display(q));
}
main();