const countdown = number => {
    if (number === 0)
        console.log(0);
    else {
        console.log(number);
        countdown(number - 1);
    }
}

countdown(5);