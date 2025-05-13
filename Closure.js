/**
 * @desc Explains the fundamental differences between JavaScript closures and hoisting.
 *
 * - **Closures** Refer to a function's ability to "remember" and access variables
 *   from its enclosing lexical scope, even when the function is executed outside that scope.
 *   Essentially, closures are about scope persistence for a function.
 *
 * - **Hoisting** Describes JavaScript's behavior where variable (with `var`) and function declarations
 *   are conceptually moved to the top of their containing scope during the compilation phase,
 *   before code execution. This impacts the perceived **order of declaration** and the
 *   availability of these identifiers within that scope. Note that `let` and `const`
 *   declarations are also hoisted but not initialized, leading to a "temporal dead zone".
 */

/** Example 1 **/

let person = 'Riya'

function printPerson() {
    console.log(person)//<- here unlike another programming language,
    // the person variable work perfectly fine (even though it is in other/outer scope)
    // because of JavaScript's closure property.
}

person = 'bala'

printPerson();


/**************** Example 2 ***************/

function outerFn(outerVariable) {
    console.log("Outer Function Variable:",outerVariable)

    return function innerFn(innerVariable) {
        console.log("Inner Function Variable:",innerVariable)
    }
}

const funct = outerFn('asdf');

funct('22143213sDF');//<- Here the inner function variable is accessed.


/** Variable Hoisting **/

// Variable Hoisting example
console.log(myVar); // Outputs undefined due to hoisting.
var myVar = "My Variable";
console.log(myVar);
