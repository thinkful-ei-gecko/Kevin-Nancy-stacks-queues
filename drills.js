
/// stack
class _Node {
    constructor(data, next) {
        this.data = data
        this.next = next
    }
}

class Stack {
    constructor() {
        this.top = null
    }

    push(data){
        if(this.top === null){
            this.top = new _Node(data, null)
        }
        else {
            this.top = new _Node(data, this.top)

        }
    }
    pop(){
        if(this.top === null){
            console.error('stack is empty')
        }
        else {
            let node = this.top //preserve node
            this.top = node.next
            return node.data 
        }
    }
}

function peek(stack){
    if(stack.top === null) {
        console.error('stack is empty')
    }
    else {
        return stack.top.data
    }
}

function isEmpty(stack) {
    if(stack.top === null) {
        return true
    }
    return false

}
function display(stack) {
    let result = ''
    let curr = stack.top
    while (curr !== null) {
        result += curr.data + ', '
        curr = curr.next
    }
    return result 
}

function is_palindrome(s) { //'hello' 
s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
// Your code goes here

    let stack = new Stack()

    for(let i = 0; i < s.length; i++){
        stack.push(s[i])
    }
    
    let result = ''
    let curr = stack.top
    while (curr !== null) {
        result += curr.data
        curr = curr.next
    }

    return result === s
}

//input: () (  )
//output: true 
//input: ()[]{}
//output: true 
// Input: "("
// Output: false
function matchParenthese(str) {  
    const stack = new Stack()

    if(str.length % 2 !== 0){
        return false
    }
    if(str.length % 2 === 0) {

        for(let i = 0; i < str.length; i++) {
            if(str[i] === '(' || str[i] === '[' || str[i] === '{'){
                stack.push(str[i])
            }
            else if(str[i] === ')') {
                if(peek(stack) === '(') {
                    stack.pop()
                }
            }
            else if (str[i] === ']') {
                if(peek(stack) === '[') {
                    stack.pop()
                }
            }
            else if (str[i] === '}') {
                if(peek(stack) === '{') {
                    stack.pop()
                }
            }
    }
    }
    return isEmpty(stack)
}

function main() {
    let starTrek = new Stack() 
    starTrek.push('Kirk')
    starTrek.push('Spock')
    starTrek.push('McCoy')
    // starTrek.push('Scotty')
    // stack.pop()
    // peek(stack)
    // console.log(display(starTrek))
    // console.log(isEmpty(stack))
    // console.log(JSON.stringify(stack, null, 2))
    // console.log(display(starTrek))
    // console.log(is_palindrome('A man, a plan, a canal: Panama'))
    console.log(matchParenthese('()[}]'))

}

main()