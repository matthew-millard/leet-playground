class Stack {
  stack: string[];

  constructor() {
    this.stack = [];
  }

  // push value to onto stack
  push(value: string) {
    this.stack.push(value);
  }

  // pop value off stack
  pop() {
    this.stack.pop();
  }

  // read value on top of stack
  read() {
    return this.stack[this.stack.length - 1];
  }

  isOpenBracket(value: string): boolean {
    return ["(", "{", "["].includes(value);
  }

  isClosingBracket(value: string): boolean {
    return [")", "}", " ]"].includes(value);
  }

  hasCorrespondingOpeningBracket(value: string): boolean {
    const top = this.read();
  }
}

const stack = new Stack();

export function lint(syntax: string) {
  for (let i = 0; i < syntax.length - 1; i++) {
    if (stack.isOpenBracket(syntax[i])) {
      stack.push(syntax[i]);
      continue;
    } else if (stack.isClosingBracket(syntax[i]) && stack.hasCorrespondingOpeningBracket(syntax[i])) {
      stack.pop();
      continue;
    }
  }

  console.log(stack);

  if (stack.stack.length !== 0) {
    console.error("Syntax error");
  }
}

lint("(var x = {y:[1,2,3]})");
