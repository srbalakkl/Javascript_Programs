const myObject = {
    value: 42,
    traditionalFunction: function() {
        console.log("Traditional 'this.value':", this.value); // `this` refers to myObject

        setTimeout(function() {
            // Inside this traditional callback, `this` is NOT myObject.
            // In non-strict mode, `this` would be the global object (e.g., window in browsers).
            // In strict mode, `this` would be undefined.
            console.log("Traditional callback 'this.value':", this.value);
        }, 100);
    },

    arrowFunctionMethod: function() {
        console.log("Arrow Method outer 'this.value':", this.value); // `this` refers to myObject

        setTimeout(() => {
            // Inside this arrow function callback, `this` is lexically bound.
            // It "inherits" `this` from the surrounding arrowFunctionMethod scope.
            // So, `this` still refers to myObject.
            console.log("Arrow callback 'this.value':", this.value);
        }, 200);
    }
};

myObject.traditionalFunction();
// Output (after 100ms, this.value will likely be undefined or cause an error in strict mode):
// Traditional 'this.value': 42
// Traditional callback 'this.value': undefined (or global object's value if `value` exists there)

myObject.arrowFunctionMethod();
// Output (after 200ms):
// Arrow Method outer 'this.value': 42
// Arrow callback 'this.value': 42
