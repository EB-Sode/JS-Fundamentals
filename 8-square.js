const x = process.argv[2];
const num = Number(x);

if (isNaN(num)) {
    console.log("Missing size");
} else {
        for (let j = 0; j < num; j++){
            console.log("x".repeat(num));
        }
    }
