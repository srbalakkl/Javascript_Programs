function foo() {
    var b = 2;
    // BLOCK SCOPE mean anything inside curly braces{}
    if (true) {
        let c = 3;//<- Here the 'c' variable will only work if you change it from BLOCK SCOPE to GLOBAL SCOPE (i.e, let to var)
    }

    console.log(b, c)
}

/** @desc note: VAR is a function scoped,
 *              LET is a block scoped.
 */


// console.log(b)//<- since var is FUNCTION SCOPED you can not log it from here.
foo();