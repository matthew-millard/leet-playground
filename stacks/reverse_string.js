export class Stack {
    stack;
    constructor() {
        this.stack = [];
    }
    // add to stack
    add(value) {
        this.stack.push(value);
    }
    //  remove from stack
    remove() {
        return this.stack.pop();
    }
    // read value on top of stack
    read() {
        return this.stack[this.stack.length - 1];
    }
    // reverse string
    reverseString(text) {
        const reversedArray = [];
        for (let index = 0; index < text.length; index++) {
            this.add(text[index]);
        }
        while (this.stack.length > 0) {
            reversedArray.push(this.remove());
        }
        return reversedArray.join("");
    }
}
const stack = new Stack();
const stringReversed = stack.reverseString("Hello Hamish");
console.log(stringReversed);
