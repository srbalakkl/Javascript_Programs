function foo() {
    var b = 2;// `var` keyword is the FUNCTION-SCOPED keyword which mean we can access it from anywhere inside the function.
    // BLOCK SCOPE means anything inside curly braces{}
    if (true) {
        let c = 3;//<- Here the 'c' variable will only work if you change it from BLOCK SCOPE to FUNCTION SCOPE (i.e, let to var)
    }

    console.log(b, c)
}

/** @desc note: VAR is a function scoped,
 *              LET is a block scoped.
 */


// console.log(b)//<- since var is FUNCTION SCOPED you cannot log it from here.
foo();