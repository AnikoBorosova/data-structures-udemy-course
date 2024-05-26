// always starts with the second item and comparing it to the previous
// if smaller, we switch them
// we move to the next and comparing the previous, 
// if not smaller, we compare to the previous previous erc.
// and we always insert it before, so that it becames the smallest

// 1, 2, 4, 3, 5, 6

// O(n^2) because of the nested for loops
// but if only one item needs sorted, it's less, faster
// these primitive sorting algoritm are better for almost sorted arrays
// betetr sorting algorithms are not better in this case of almost sorted arrays

// all bubble, selection and insertion sort are O(1) space complexity
// All three of these sort the array in place. That means that they do not create 
// additional copies of the array

function insertionSort(array) {
    let temp;
    // we start with the second item, so i = 1
    for (let i = 1; i < array.length; i++) {
        temp = array[i];
        // using var so that we can use j ouside the foor loop
        // && part: in case of the first two items, if we do j--, it could go to -1
        // but we don't want that, negative index is not ok
        // in this case we break out of the loop and run into line 21
        for (var j = i-1; array[j] > temp && j > -1; j--) {
            array[j+1] = array[j];
        }
        array[j+1] = temp;
    }
    return array;
}

console.log(insertionSort([4, 2, 6, 5, 1, 3]));
console.log(insertionSort([1, 2, 3, 4, 5, 6]));
console.log(insertionSort([6, 5, 4, 3, 2, 1]));
console.log(insertionSort([1, 1, 1, 1, 1, 1]));
console.log(insertionSort([null, null, null, null, null]));
console.log(insertionSort([NaN, NaN, NaN, NaN, NaN]));
console.log(insertionSort([undefined, undefined, undefined, undefined, undefined]));
console.log(insertionSort([0, 0, 0, 0, 0]));