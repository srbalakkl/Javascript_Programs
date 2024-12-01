function* generateSequence() {
    yield 1;
    yield 2;
    return 3;
}

let generator = generateSequence();

let one = generator.next();
let two = generator.next();
let three = generator.next();

console.log(one,two,three)//<- You can also do the same by simply using for loop