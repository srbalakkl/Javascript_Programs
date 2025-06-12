/**
 * @desc
 *
 * let
 *   block scoped
 *   hoisting is not possible
 *   allows assigning values
 *
 * const
 *   block scoped <- this means it is available anywhere inside the block (NOT a FUNCTION) where it is declared.
 *   hoisting is not possible
 *   doesn't allow assigning values only allow assigning while declaring value, but it does allow changing the property of an object
 *
 * var
 *   function scoped <- this means available anywhere inside the function where it is declared.
 *   hoisting is possible <- since var is function scoped it supports hoisting behavior.
 *   allow assigning values
 *
 *   NOTE: let and const can be declared as global scope (variable) and accessed within the block scope.
 */


/*****  BLOCK SCOPED ****/
let a = 0;
if (a == 0) {
    let b = 10;//<- This won't work because unlike 'var', 'let' is block scoped.
    console.log("a is equal to " + a);
}
console.log(b); //<- It works only because Var is function scoped.
/***** END *****/

/*****  FUNCTION SCOPED ****/
let b = 0;
if (b == 0) {
    var c = 10;//<- if we use let then it will not work because it is block scoped
    console.log("b is equal to " + b);
}
console.log(b); //<- It works only because Var is function scoped.
/***** END *****/


/****** HOISTING ******/
console.log('Hoisted Value=',h);//<- this will throw UNDEFINED value instead of ERROR because it will be JSs interpreter will assign `undefined` as value when it
// Reads the value from top to bottom.

// Generally if no reference is found then VAR keyword will create UNDEFINED as the value instead of throwing an error like let or const.
var h = 'hoisting value';
/***** END *****/

/******* CONST ******/
const ct = 10;
// ct = 20;//<- const doesn't allow us to assign the value to it.
console.log('const=',ct);

// But we can assign objects property of const.Eg:
const cobj = {name:'bala'};
cobj.name = 'devi';
console.log(cobj)
/****** END ******/