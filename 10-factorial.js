const x = Number(process.argv[2]);

function factorial(a) {
    if (isNaN(a) || a < 0) {
        return 1;
    } else if (a === 0 || a === 1) {
        return 1;
    } else {
        let result = 1;
        for (let i = 2; i <= a; i++) {
            result *= i;
        }
        return result;
    }
}

console.log(factorial(x));