const arg = Number(process.argv[2])



if (!isNaN(arg)) {
    const num = Math.floor(arg);
    console.log(`My number: ${num}`);
} else {
    console.log("Not a number");
}