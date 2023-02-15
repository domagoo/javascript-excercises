'use strict';

let arr = ['a', 'b', 'c', 'd', 'e'];


// SLICE
console.log(arr.slice(2));
console.log(arr.slice(2,4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1,-2));

// Shallow Copy
console.log(arr.slice());
console.log(...arr);

// SPLICE * Changes original arr *

// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);

// Delete Row
arr.splice(1, 2);
console.log(arr);

// REVERSE * Changes original arr *
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());

// CONCAT
const letters = arr.concat(arr2);
console.log(...arr, ...arr2);

// JOIN
console.log(letters.join('-'));

