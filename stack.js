/// stack
class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    if (this.top === null) {
      this.top = new _Node(data, null);
    } else {
      this.top = new _Node(data, this.top);
    }
  }
  pop() {
    if (this.top === null) {
      console.error('stack is empty');
    } else {
      let node = this.top; //preserve node
      this.top = node.next;
      return node.data;
    }
  }
}
module.exports = Stack;

function peek(stack) {
  if (stack.top === null) {
    console.error('stack is empty');
    return null;
  } else {
    return stack.top.data;
  }
}

function isEmpty(stack) {
  return stack.top === null;
}

function display(stack) {
  let result = '';
  let curr = stack.top;
  while (curr !== null) {
    result += curr.data + ', ';
    curr = curr.next;
  }
  return result;
}

function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  let stack = new Stack();

  for (let i = 0; i < s.length; i++) {
    stack.push(s[i]);
  }

  let result = '';
  let curr = stack.top;
  while (curr !== null) {
    result += curr.data;
    curr = curr.next;
  }

  return result === s;
}

function matchParenthese(str) {
  const stack = new Stack();

  if (str.length % 2 !== 0) {
    return false;
  }
  if (str.length % 2 === 0) {
    for (let i = 0; i < str.length; i++) {
      if (str[i] === '(' || str[i] === '[' || str[i] === '{') {
        stack.push(str[i]);
      } else if (str[i] === ')') {
        if (peek(stack) === '(') {
          stack.pop();
        }
      } else if (str[i] === ']') {
        if (peek(stack) === '[') {
          stack.pop();
        }
      } else if (str[i] === '}') {
        if (peek(stack) === '{') {
          stack.pop();
        }
      }
    }
  }
  return isEmpty(stack);
}

// O(n^2)
function sortStack(stack) {
  let tempStack = new Stack();
  let holder;

  while (!isEmpty(stack)) {
    holder = stack.pop();
    while (!isEmpty(tempStack) && peek(tempStack) > holder) {
      stack.push(tempStack.pop());
    }
    tempStack.push(holder);
  }

  while (!isEmpty(tempStack)) {
    stack.push(tempStack.pop());
  }

  return stack;
}

function main() {
  // let starTrek = new Stack();
  // starTrek.push('Kirk');
  // starTrek.push('Spock');
  // starTrek.push('McCoy');
  // starTrek.push('Scotty')
  // console.log(display(starTrek))
  
  // console.log(JSON.stringify(stack, null, 2))
  // console.log(is_palindrome('A man, a plan, a canal: Panama'))
  // console.log(matchParenthese('()[}]'));

  let stack = new Stack();
  stack.push(1);
  stack.push(5);
  stack.push(3);
  stack.push(6);
  stack.push(2);
  console.log(display(stack));
  console.log(display(sortStack(stack)));
}

// main();
