const sumOf = numbers => {
    return numbers.reduce((acc, x) => acc + x, 0);
}

numbers = [0, 1, 2, 3];
console.log(sumOf(numbers));