const set1 = new Set([1, 2, 3, 4, 5]);

console.log(set1.has(4)) // true

set1.forEach((value) => {
    console.log(value);
  });

set1.add(6)  // adds 6
set1.add(5)  // nothing
console.log(set1)
set1.size