class Stack {
    items = [];
    push = element => this.items.push(element);
    pop = () => this.items.pop();
    isempty = () => this.items.length === 0;
    empty = () => (this.items.length = 0);
    size = () => this.items.length;
    peek = () => this.items[this.items.length - 1];
  }
  
  let str = 'a+b*(c^d-e)^(f+g*h)-i';
  
  //Function to return precedence of operators
  function prec(c) {
    if (c == '^') return 3;
    else if (c == '/' || c == '*') return 2;
    else if (c == '+' || c == '-') return 1;
    else return -1;
  }
  
  function InfixPostfix(str) {
    str = str.split('');
    let stack = new Stack();
    let result = '';
    // If the item is operand push it into the stack
    for (let i = 0; i < str.length; i++) {
      let item = str[i];
      if (
        (item >= 'a' && item <= 'z') ||
        (item >= 'A' && item <= 'Z') ||
        (item >= 0 && item <= 9)
      ) {
        result += item;
      } else if (item === '(') {
        stack.push(item);
      } else if (item === ')') {
        while (stack.peek() != '(') {
          result += stack.peek();
          stack.pop();
        }
        stack.pop();
      } else {
        while (!stack.isempty() && prec(item) <= prec(stack.peek())) {
          result += stack.peek();
          stack.pop();
        }
        stack.push(item);
      }
    }
  
    // Pop all the remaining elements from the stack
    while (!stack.isempty()) {
      result += stack.peek();
      stack.pop();
    }
    return result;
  }
  
  let data = InfixPostfix(str);
  console.log(data);