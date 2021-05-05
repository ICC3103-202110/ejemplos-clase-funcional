const multiply = (a, b) => {
    return a * b;
}

const duplicate = x => multiply(2, x);
const triplicate = x => multiply(3, x);

console.log(duplicate(2));
console.log(duplicate(4));

console.log(triplicate(2));
console.log(triplicate(3));