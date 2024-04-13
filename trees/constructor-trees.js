// a LL is a tree that doesn't fork
/*

a binary tree has two arrows

{
    value: 4,
    left: null,
    right: null
}

{
    value: 4,
    left: {
        value: 5,
        left: null,
        right: null
    },
    right: {
        value: 6,
        left: null,
        right: null
    },
}

// doesn't have to be binary, can have more branches

// terminology
// full tree: either item can point to 2 nodes or 0 nodes
// perfect tree: every line that has items in it is completely filled across all rows
// complete
// parent, children, sibling
// every child node have only 1 parent, can't have 2 parents
// leaf: a node that doesn't have any children
*/

// special type of binary tree: Binary search trees
// if an item is greater than the parent (top node), goes to the right, if smaller, goes to the left
// if another item is greater than the parent, goes to right, but we now compare it again to the before added child - if greater, goes to right, if smaller, goes to left
// always start the comparing on the top and going down and comparing

// Big O of BST ---- ?????? needs revisiting
// O(log n)   2^1, 2^2 etc.  --> best
// divide and conquer in case of log n
// lookup, insert, remove -- O(log n)

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
 
class BST {
    constructor() { // can pass value, if creting the first node
        // not needed, root with null is enough
        //const newNode = new Node(value);
        //this.root = newNode;
        this.root = null;
    }

    // create a new node

    // if root is null, we set root to newNode

    // compare the value to top
    // if less, go to left, if bigger, go to right
    // if the spot is null, insert newNode, else move to next (down)
    // if less, go to left, if bigger, go right
    // if spot null, insert, else move to enxt

    // we dont't know how many times we need to loop, so better use while loop
    // need a temp variable attached to top pointer
    // moving temp to the node we comparing to
    // root points to top

    // one more edge case:
    // value is equal to an existing node in the tree
    // we can't have this, we can't have duplicates
    // if newNode === temp, return undefined
    
    // what if we want duplicates?
    // add new property: count:2  
    insert(value) {
        const newNode = new Node(value);

        if (this.root === null) {
            this.root = newNode;
            return this;
        }

        let temp = this.root;
        while(true) {
            if (newNode.value === temp.value) {
                return undefined;
            }
            if (newNode.value < temp.value) {
                if (temp.left === null) {
                    temp.left = newNode;
                    return this;
                }
                temp = temp.left;
            } else {
                if (temp.right === null) {
                    temp.right = newNode;
                    return this;
                }
                temp = temp.right;
            }
        }
    }

    contains(value) {
        if (root === null) {
            return false;
        }

        let temp = this.root;
        while (temp) {
            if(value < temp.value) {
                temp = temp.left;
            } else if (value > temp.value) {
                temp = temp.right;
            } else {
                return true;
            }
        }
        return false;
    }
}

function test() {
    let myBST = new BST();   
    
    if (myBST.root === null) {
        console.log("Root: null");
    } else {
        console.log("Root:", myBST.root.value);
    }
}

test();


/*
    EXPECTED OUTPUT:
    ----------------
    Root: null

*/

