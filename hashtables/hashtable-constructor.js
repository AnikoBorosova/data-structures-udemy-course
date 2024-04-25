// built-in hash tables in JS are objects
// but we can build our own

// hashes are one-way - gives the address
// but cannot use the address to get the value

// deterministic - the next time will always produce the same number/address 

// produces the outout/address based on calculations on the inout

// collision - multiple things at the same address

// set
// get - giving us the address, we can go right to the value

// ways to handle collisions
// 1. items stored as arrays, items are mapped to the same address space -- separate chaining
// separate chaining with linked lists in the same address
// 3. linear probing: (oepn addressing)-  see if the next soace is open, put the second item there instead of collision
class HashTable {
    constructor(size = 7) {  // setting a default
        this.dataMap = new Array(size);
    }
   
    _hash(key) {  // _ means method should be called only by other methods, not diretly
        let hash = 0;
        for (let i = 0; i < key.length; i++) {  // string length
            hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length; // charCode: every letter has a numerical value;  23 just aprime number, can be anything else
        }
        return hash;
    }

    printTable() {
        for (let i = 0; i < this.dataMap.length; i++) {
            console.log(i, ": ", this.dataMap[i]);
        }
    }

    set() {
        
    }
}

function test() {
    let myHashTable = new HashTable();
    myHashTable.printTable();  
}
test();