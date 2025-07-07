
const x = Number(process.argv[2]);
const y = Number(process.argv[3]);

function add(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return NaN
    } else {
        return a + b
    }
}

console.log(add(x, y));