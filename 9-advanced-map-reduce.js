'use-strict';

const isLast = (index, array) => index === array.length - 1;
const merge = (item, index, array) => item + array[isLast(index, array) ? 0 : index + 1];
const mergeNeighbors = numbers => numbers.map(merge)

const numbers = [5, 7, 8, 3, 9, 5];
console.log(mergeNeighbors(numbers));
