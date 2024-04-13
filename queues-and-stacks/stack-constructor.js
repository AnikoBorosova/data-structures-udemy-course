// LIFO - last in, first out
// implementing stacks with arrays - always use the end
// add/remove at the end is (O1)
// using the beginning needs index rearranging, reindexing (On)

// using linked lists we will use the beginning/left end
// removing/adding from the end is (On)
// add/remove at the beginning is (O1)
// haid/tail = top/bottom

// first create a node, same as in LL
/*
{
    value: 11,
    next: null
}
*/
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(value) {
        const newNode = new Node(value);
        this.top = newNode;
        // this.bottom = newNode - but we don't use it in stack
        this.length = 1;
    }

    printStack() {
        let temp = this.top;
        while (temp !== null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }

    getTop() {
        if (this.top === null) {
            console.log("Top: null");
        } else {
            console.log("Top: " + this.top.value);
        }
    }

    getLength() {
        console.log("Length: " + this.length);
    }

    push(value) {   // unshift in LL - using the top
        const newNode = new Node(value);
        if (this.length === 0) {
            this.top = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }
        this.length++;
        return this;  // "this" is the entire stack
    }

    pop(value) {  // shift in LL
        if (this.length === 0) {
            return undefined;
        }

        let temp = this.top;
        this.top = this.top.next;
        temp.next = null;
        this.length--;
        return temp;
    }

}

function test() {
    let myStack = new Stack(4);

    myStack.getTop();
    myStack.getLength();

    console.log("\nStack:");
    myStack.printStack();

    myStack.push(3);
    myStack.push(4);

    myStack.pop(4);
}
test();

/*
    EXPECTED OUTPUT:
    ----------------
    Top: 4
    Length: 1

    Stack:
    4
*/