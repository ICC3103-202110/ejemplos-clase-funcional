const root = x => x ** 0.5;
const roots = numbers => {
    return numbers.map(root);
}

numbers = [0, 1, 4, 9, 16, 25];
console.log(roots(numbers));