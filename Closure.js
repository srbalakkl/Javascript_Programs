/**
 * @desc Closure is a function that has access to the variables outside of their own curly braces.
 *
 * Closure is not a function, but it is a function combined with its outer state / lexical environment.
 *
 * Closure requires more memory than normal/pure function.
 *
 * */

/** Example 1 **/

let person = 'Riya'; // <- This is a global variable / outer state / lexical environment to the function printPerson()

function printPerson() {
    console.log('Person = ', person)//<- here unlike another programming language,
    // the person variable work perfectly fine (even though it is in other/outer scope)
    // because of JavaScript's closure property.
}

person = 'bala'

printPerson();


/********* Example 2 ***************/

function outerFunction() {
    let state = '🐵';

    function innerFunction() {
        return `Hello ${state}`;
    }

    return innerFunction;

}


/**************** Example 3 ***************/

function outerFn(outerVariable) {
    console.log("Outer Function Variable:", outerVariable)

    return function innerFn(innerVariable) {
        console.log("Inner Function Variable:", innerVariable)
    }
}

const funct = outerFn('OV..');

funct('IV...');//<- Here the inner function variable is accessed.


/**************** Example 4 ***************/

function points(totalPointsParam) {
    console.log('Function running...')
    const totalPoints = totalPointsParam;


    const addPoints = (pointsArg) => {
        return totalPoints + pointsArg;
    }

    const subtractPoints = (pointsArg) => {
        return totalPoints - pointsArg;
    }

    const getTotalPoints = () => {
        return totalPoints;
    }

    return {
        addPoints,
        subtractPoints,
        getTotalPoints
    }
}

const table = points(100);//
console.log(table.addPoints(10));//110
console.log(table.subtractPoints(10));//90
console.log(table.getTotalPoints());//100

// Here, since there is no single instance is created for all tables methods, So
// the totalPoints variable is not shared between the methods, and it produces a different result for each method.




