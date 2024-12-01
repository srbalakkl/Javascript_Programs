/**
 * @desc
 * Hoisting is the built-in behavior of the language through which declarations of functions, variables, and classes
 *  are moved to the top of their scope.
 * */

console.log(sum(11, 12));

function sum(x, y) {
    return x + y;
}

const y = (x, y) => x + y;//<- Hoisting is only applicable for normal function NOT FOR aero function / const variable
console.log(y(10, 20))

/*************/

/*
* var keyword also support HOISTING.
*
* EG:
* */

console.log( a);/*<- Here value of a will be automatically hoisted (i.e: on the above console.log(a) line 'var a = undefined' will be
automatically added) to undefined. */
// to undefined.
var a = 10;/*<- if you use let instead of `var` then it will throw `ReferenceError: Cannot access 'a' before initialization`. */