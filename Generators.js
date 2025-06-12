/*
* Generator is a special type of function that can pause and resume its execution based on the yield keyword.
*
* Generator can be used with an INFINITE LOOPING statement to avoid freezing up the client,
* by executing only one step at a time.
*
* */

console.log('****************** Generators ******************')

function* generateSequence() {
    yield 1;//<- Yield is the special type of return keyword that should only be used inside a generator function.
    yield 2;
    return 3;
    yield 4;//<- This won't print anything because the generator function has already returned.
}

let generatorObject = generateSequence();

let one = generatorObject.next();
// let two = generatorObject.return();//<- This will complete the execution of the generator function.
let two = generatorObject.next();
let three = generatorObject.next();

console.log(one, two, three)//<- You can also do the same by simply using for loop


console.log('\n\n*************** Generator Execution Lifecycle ****************')
function* generateLifeCycle() {
    console.log('before 1st yield')
    yield 1;//<- Yield is the special type of return keyword that should only be used inside a generator function.
    console.log('after 1st yield or before 2nd yield')
    yield 2;
    console.log('after 2nd yield or before 3rd yield')
    yield 3;
    console.log('after 3rd yield')
}

const lifeCycle = generateLifeCycle();

for (let cycle of lifeCycle) {
    console.log(cycle);
}

console.log('\n\n****************** Use of * in yield ******************')

function* getNum() {
    yield* [10, 20, 30, 40, 50];// here, * is used to delegate the task to another iterable in the array.
    // Equivalent to:
    // yield 10;
    // yield 20;
    // yield 30;
//     ...
}

const num = getNum();

console.log('getNum', num.next())
console.log('getNum', num.next())
console.log('getNum', num.next())
console.log('getNum', num.next())


console.log('\n\n***************** Infinite Looping using javascript **********')

function* infiniteLoop() {
    let i = 1;
    while (true) {
        yield i++;
    }
}

const inf = infiniteLoop();
console.log('inf', inf.next())
console.log('inf', inf.next())
console.log('inf', inf.next())
console.log('inf', inf.next())


console.log('***************** ')