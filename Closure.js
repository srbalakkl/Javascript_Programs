/**
 * @desc The major difference between ** closure ** and ** hoisting **
 * Closures are primarily about maintaining access to variables in an enclosing scope
 * Hoisting, on the other hand, deals with the **order of declaration** and can affect how variables and functions are used within a scope
 *
 * */

/**************** Example 1 ***************/

let person = 'Riya'

function printPerson() {
    console.log(person)//<- here unlike other programming language the person variable work perfectly fine (even though it is in other/outer scope) because of javascript's closure property.
}

person = 'bala'

printPerson();


/**************** Example 2 ***************/

function outerFn(outerVariable) {
    let outer = 'hi'

    return function innerFn(innerVariable) {
        console.log(innerVariable)
    }
}

const func = outerFn('asdf');

func('asdf')