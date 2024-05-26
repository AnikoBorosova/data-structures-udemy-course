// each iteration will take fewer steps
// for loop inside a forr loop

// example 4, 2, 6, 5, 1, 3
function bubbleSort(array) {
    for (let i = array.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (array[j] > array[j+1]) {
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
    return array;
}

console.log(bubbleSort([4, 2, 6, 5, 1, 3]));
console.log(bubbleSort([1, 2, 3, 4, 5, 6]));
console.log(bubbleSort([6, 5, 4, 3, 2, 1]));
console.log(bubbleSort([1, 1, 1, 1, 1, 1]));
console.log(bubbleSort([null, null, null, null, null]));
console.log(bubbleSort([NaN, NaN, NaN, NaN, NaN]));
console.log(bubbleSort([undefined, undefined, undefined, undefined, undefined]));
console.log(bubbleSort([0, 0, 0, 0, 0]));