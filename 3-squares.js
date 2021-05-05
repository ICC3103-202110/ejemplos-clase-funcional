// const squares = numbers => {
//     return numbers.map((x) => {
//         return x * x;
//     })
// }

const square = x => x * x;
const squares = numbers => {
    return numbers.map(square);
}

numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(squares(numberArray));