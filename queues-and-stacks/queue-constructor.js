// FIFO - first in - first out

// implementing with array
// pop or push is O(1)
// shift or unshift O(n)

// implementing with LL
// popping O(n) - deque from the end
// pushing O(1)
// shift O(1)
// unshift O(1)
// we better use the beginning for btoh queueing and dequeueing

// head/tail = first, last

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
 
class Queue {
    constructor(value) {
        const newNode = new Node(value);
        this.first = newNode;
        this.last = newNode;
        this.length = 1;
    } 

    printQueue() {
        let temp = this.first;
        while (temp !== null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }

    getFirst() {
        if (this.first === null) {
            console.log("First: null");
        } else {
            console.log("First: " + this.first.value);
        }
    }

    getLast() {
        if (this.last === null) {
            console.log("Last: null");
        } else {
            console.log("Last: " + this.last.value);
        }
    }

    getLength() {
        console.log("Length: " + this.length);
    }

    makeEmpty() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    enqueue(value) {  // add to end, push in LL
        const newNode = new Node(value);

        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return this;
    }

    dequeue() {  // shift in LL
        if (this.length === 0) {
            return undefined;
        }

        let temp = this.first;

        if (this.length === 1) {
            this.first = null;
            this.last = null;
        } else {
            this.first = this.first.next;
            temp.next = null;
        }
        this.length--;
        return temp;
    }
}

function test() {
    let myQueue = new Queue(4);

    myQueue.getFirst();
    myQueue.getLast();
    myQueue.getLength();

    console.log("\nQueue:");
    myQueue.printQueue();

    myQueue.enqueue(8);
    myQueue.enqueue(11);

    myQueue.dequeue(11);
}
test();
/*
    EXPECTED OUTPUT:
    ----------------
    First: 4
    Last: 4
    Length: 1
    
    Queue:
    4

*/