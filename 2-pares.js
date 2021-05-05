const isEven = (number) => {
    return number % 2 === 0;
}

const isOdd = number => {
    return number % 2 !== 0;
}

const evenNumbers = numbers => {
    return numbers.filter(isEven);
}

const oddNumbers = numbers => {
    return numbers.filter(isOdd);
}

console.log(isEven(2));
console.log(isEven(3));

numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(evenNumbers(numberArray));
console.log(oddNumbers(numberArray));