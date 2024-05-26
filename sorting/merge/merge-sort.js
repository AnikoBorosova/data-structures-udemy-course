// uses recursion
// combining two sorted arrays is relatively easy
// cuts arrays in half, than again in half until individual items
// take two and combinign them into larger sorted arrays
// than take two larger arrays from thiose and combining them again
// until we reach 1 sorted array

// it's a very efficient sorting algoritm

// merge is gonna be a helper fucntion, that puts together 2 arrays into 1 big sorted array
// 1 step uses i, the other uses j, we compare i with j
// we push the lower to an array, while checking each item (comparing i to j)


// 1, 3, 7, 8
// 2, 4, 5, 6
function merge(a1, a2) {
    let combined = [];
    let i = 0;
    let j = 0;

    while (i < a1.length && j < a2.length) {
        if (a1[i] < a2[j]) {
            combined.push(a1[i]);
            i++;
        } else {
            combined.push(a2[j]);
            j++;
        }
    }

    while (i < a1.length) {
        combined.push(a1[i]);
        i++;
    }
    while (j < a2.length) {
        combined.push(a2[j]);
        j++;
    }
    return combined;
}

//console.log(merge([1, 3, 7, 8], [2, 4, 5, 6]));
//console.log(merge([1, 2, 3, 4], [5, 6, 7, 8]));
//console.log(merge([1, 1, 1, 1], [1, 1, 1, 1]));
//console.log(merge([8, 7, 6, 5], [4, 3, 2, 1])); // !!! [4, 3, 2, 1, 8, 7, 6, 5]
// merge requires 2 sorted arrays, and these 2 arrays are not sorted
//console.log(merge([null,null,null,null], [null,null,null,null]));
//console.log(merge([NaN, NaN, NaN, NaN], [NaN, NaN, NaN, NaN]));
//console.log(merge([undefined, undefined, undefined, undefined], [undefined, undefined, undefined, undefined]));
//console.log(merge([0,0,0,0], [0,0,0,0]));

// merge sort will break things in half, the halfs in halfs etc.
// the above merge helper will take care of the reassembly
// recursion part - break arrays in half over again
// base case is when array.length is 1

// recursively calling emrgeSort - having mltiple instances of emrgeSort in the call stack

// 3,1,4,2
function mergeSort(array) {
    if (array.length === 1) {
        return array;
    }
    let midIndex = Math.floor(array.length / 2); // for odd length
    let left = mergeSort(array.slice(0, midIndex));
    let right = mergeSort(array.slice(midIndex)); 

    // merge only works on sorted arrays and both of these are unsorted
    // so we need to split them again in half
    // this is why we need to call mergeSort recursively
    // so adding mergeSort call to line 66-67
    return merge(left, right);
}

// not in-place sorting
// returns a separate array with the values of the original array sorted
// the original array gets intact
console.log(mergeSort([3,1,4,2]));

// bigO of merge sort
// space complexity - we created 2 new arrays, doubling the size in memory that it takes up
// space complexity is O(n)

// time complexity
// cutting them down O(log n)
// putting them back together is O(n)
// together O(n log n)
// with bigger numbers/arrays this is much better for most situations than bubble, insertion, selection sort (O(n^2))