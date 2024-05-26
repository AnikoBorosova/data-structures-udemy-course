// we have to keep track of indexes

// example 4, 2, 6, 5, 1, 3
// variable called minimum
// we store the index of the first item 
// we compare this first item to each item
// if an item is smaller than the first, we store it's index in the min variable
// we skip the biggers
// once we go through the first loop, we have the smallest item's index
// we switch it to the fist position
// another loop starts
// we store the second item's index in min etc

function selectionSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        let min = i;

        for (let j = i+1; j < array.length; j++) {
            if(array[j] < array[min]) {
                min = j;
            }
        }
        if (i !== min) {
            let temp = array[i];
            array[i] = array[min];
            array[min] = temp;
        }
    }
    return array;
}

console.log(selectionSort([4, 2, 6, 5, 1, 3]));
console.log(selectionSort([6, 5, 4, 3, 2, 1]));
console.log(selectionSort([1, 2, 3, 4, 5, 6]));
console.log(selectionSort([1, 1, 1, 1, 1, 1]));
console.log(selectionSort([null, null, null, null, null]));
console.log(selectionSort([NaN, NaN, NaN, NaN, NaN]));
console.log(selectionSort([undefined, undefined, undefined, undefined, undefined]));
console.log(selectionSort([0, 0, 0, 0, 0]));