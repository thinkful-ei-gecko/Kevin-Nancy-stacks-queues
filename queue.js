class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    let node = new _Node(data, null);
    if (!this.first) {
      this.first = node;
    }

    if (this.last) {
      this.last.next = node;
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
    result += curr.data + ', ';
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
  q.dequeue();
  q.dequeue();
  // console.log(JSON.stringify(q, null, 2));
  // console.log(JSON.stringify(peek(q), null, 2));
  console.log(display(q));
}
// main();

function pairDancers(arr) {
  let qf = new Queue();
  let qm = new Queue();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].substring(0, 1) === 'F') {
      qf.enqueue(arr[i]);
    } else {
      qm.enqueue(arr[i]);
    }
  }

  let results = '';
  while (!isEmpty(qm) && !isEmpty(qf)) {
    let man = qm.dequeue();
    let woman = qf.dequeue();
    results += `
    Female dancer is ${woman.substring(2)}, and the male dancer is ${man.substring(2)}`;
  }
  if (!isEmpty(qm)) {
    let count = 0;
    while (!isEmpty(qm)) {
      qm.dequeue();
      count++;
    }
    results += `
    There are ${count} male dancers waiting to dance`;
  }
  if (!isEmpty(qf)) {
    let count = 0;
    while (!isEmpty(qf)) {
      qf.dequeue();
      count++;
    }
    results += `
    There are ${count} female dancers waiting to dance`;
  }

  return results;
}

function ophidianBank(people) { 
  let q = new Queue();
  for(let i = 0; i < people.length; i++){
    q.enqueue(people[i])
  }
  
  while(!isEmpty(q)){
    let person = q.dequeue()
    console.log(`serving ${person}`)
    if(Math.random() <= 0.25) {
      q.enqueue(person)
    } 
  }
}

function main2() {
  let dancers = [
    'F Jane',
    'M Frank',
    'M John',
    'M Sherlock',
    'F Madonna',
    'M David',
    'M Christopher',
    'F Beyonce',
    'F Aa',
    'F Bb',
    'F Cc',
  ];

  let people = [
    'Jane',
    'Frank',
    'John',
    'Sherlock',
  ];
  ophidianBank(people);

}
main2();
