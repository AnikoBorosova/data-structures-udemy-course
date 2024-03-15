// constructor - creates a new node
// push - creates a new node, adds to the end
// unshift - creates a new node, adds to beginning
// insert - creates a new node, inserts node

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        // creates a new node
        const  newNode = new Node(value);
        this.head = newNode; // pointer to the node
        this.tail = this.head; // points to the same thing as head
        this.length = 1; // tracking the length
    }

    // push
    // create a new node, last node in the list point to it, tail points to it as well
    // edge: what if LL does not have any node yet, head and tail points to null - head and tail need to points to new node
    push(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
            console.log(this.tail.next); // null
        }
        this.length++;
        return this; // return the linked list we named myLinkedList
    }

    // remove item from end, move tail to the previous item, return the item we removed
    // edge: ll have no items
    // edge: ll have 1 item
    pop() {
        // if no item
        if (!this.head) {
            return undefined;
        }

        // if more than 1 item
        let temp = this.head;
        let pre = this.head;
        while (temp.next) { // while temp.next is true, there is a node that it points to, not null
            pre = temp;
            temp = temp.next;
        }
        this.tail = pre;
        this.tail.next = null; // this breaks the last item from the list
        this.length--;
        
        // if 1 item
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return temp; // item we popped off
    }

    // create new node, want it to point to the first node in ll, equal to head, 
    // edge: empty ll, head and tail should equal to new node
    unshift(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    // move head to the next item, remove first item, return the removed item
    // edge: 1 item
    // edge: no item
    shift() {
        if (!this.head) {
            return undefined;
        }
        let temp = this.head;
        this.head = this.head.next;
        temp.next = null;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return temp;
    }

    // get the node that is in a particular index
    get(index) {
        if (index < 0 || index >= this.length) {
            return undefined;
        }

        let temp = this.head;
        for (let i = 0; i < index; i++) {
            temp = temp.next;
        }
        return temp;
    }

    // go to index, change the value at that index
    // utilizing the get method
    set(index, value) {
        let temp = this.get(index);
        if (temp) {
            temp.value = value;
            return true;
        }
        return false;
    }

    // insert a new node with a particular value at a particular index
    // if index is zero, use unshift
    // if index is last, use push
    // if not valid index, return false
    insert(index, value) {
        if (index === 0) {
            return this.unshift(value);
        }

        if (index === this.length) {
            return this.push(value);
        }

        if (index < 0 || index > this.length) {
            return false;
        }

        const newNode = new Node(value);
        const temp = this.get(index - 1);
        newNode.next = temp.next;
        temp.next = newNode;
        this.length++;
        return true;
    }

    // remove first - use shift
    // remove last - use pop
    // invalid index, return false
    remove(index) {
        if (index === 0) {
            return this.shift();
        }

        if (index === this.length - 1) {
            return this.pop();
        }

        if (index < 0 || index >= this.length) {
            return undefined;
        }

        const pre = this.get(index - 1);
        // let temp = this.get(index); - this is an O(n) operation
        const temp = before.next;   // this is more efficient operation from bigO perspective
        
        pre.next = temp.next;
        temp.next = null;
        this.length--;
        return temp;
    }
    
    // need to keep track of values
    reverse() {
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;

        let next = temp.next;
        let prev = null;

        for (let i = 0; i < this.length; i++) {
            next = temp.next;
            temp.next = prev;
            prev = temp;
            temp = next;
        }
        return this;
    }
}

let myLinkedList = new LinkedList(11);
console.log(myLinkedList);
myLinkedList.push(3);
myLinkedList.push(23);
myLinkedList.push(7);
console.log(myLinkedList);
//myLinkedList.pop();
//console.log(myLinkedList);
//myLinkedList.pop();
//console.log('one', myLinkedList);
//myLinkedList.pop();
//console.log('zero', myLinkedList);
// myLinkedList.unshift(4);
//console.log(myLinkedList);
// myLinkedList.shift();
// console.log(myLinkedList);
// myLinkedList.shift();
// console.log(myLinkedList);
/*
const zero = myLinkedList.get(3);
console.log(zero);
const one = myLinkedList.get(-1);
console.log(one);
const two = myLinkedList.get(8);
console.log(two);
*/
myLinkedList.set(-1, 99);
console.log(myLinkedList);
const newN = myLinkedList.get(1);
console.log(newN);

