// purpose of this code is to find the symmetric 

const diff = (arr1, arr2) => [
  ...arr1.filter(e => !arr2.includes(e)),
  ...arr2.filter(e => !arr1.includes(e))
];


// console.log(diff([1, 2, 3], [5, 2, 1, 4]));


const sym = (...args) => [...new Set(args.reduce(diff))];

console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]))


// console.log("this code finds the symmetric difference between two given arrays");
// console.log(sym());

/*
sym([1, 2, 3], [5, 2, 1, 4]) should return [3, 4, 5].

sym([1, 2, 3], [5, 2, 1, 4]) should contain only three elements.

sym([1, 2, 3, 3], [5, 2, 1, 4]) should return [3, 4, 5].

sym([1, 2, 3, 3], [5, 2, 1, 4]) should contain only three elements.

sym([1, 2, 3], [5, 2, 1, 4, 5]) should return [3, 4, 5].

sym([1, 2, 3], [5, 2, 1, 4, 5]) should contain only three elements.

sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) should return [1, 4, 5]

sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) should contain only three elements.

sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) should return [1, 4, 5].

sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) should contain only three elements.

sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]) should return [2, 3, 4, 6, 7].

sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]) should contain only five elements.

sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]) should return [1, 2, 4, 5, 6, 7, 8, 9].

sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]) should contain only eight elements.
*/