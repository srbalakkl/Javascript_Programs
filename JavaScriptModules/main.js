var a = 10;//global context
// can be overrides easily by mistake.

//to avoid this issue, JS users start to use functions


/** Immediately Invoked Function Expression(IIFE)**/

/**
 *
 * Invoked immediately when the browser starts.
 *
 * Introduced to stop global access of variables.
 *
 * Not necessary because let variable is introduced in Es6 modules to make all variables as local scope.
 *
 * */
(() => {
    var a = 20;
    console.log(a);
})();



//https://www.youtube.com/watch?v=mK54Cn4ceac&t=233s  // read about