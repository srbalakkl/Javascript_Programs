/*** Iterable ***/

/**
 * To make something iterable, That think must have an Iterator object living on it.
 *
 * Anything can be converted to an Iterator object by using the ` Symbol.iterator () ` method.
 *
 * */


/**
 * @desc Iterator is an object that defines sequence,
 * and return value upon termination.
 *
 * Specifically, Iterator is any object that implements ITERATOR PROTOCOLS by having 'next()' method.
 *
 * next() method return object with two properties:
 * value: <given value> and done<boolean value>
 *
 * done property is true if the iterator has no more values to return.
 *
 * value property is the value returned by the iterator.
 *
 * */

/* Example for iterable with the string.*/

const name = 'RiyaSri';
const iterator = name[Symbol.iterator]();// Here this [Symbol.iterator] represent the default iterator for any given object

console.log(iterator.next());

/* Creating an Iterable */

const generateNumbers = (num) => ({
    current: 0,
    end: num,
    [Symbol.iterator]() {
        return {
            next: () => {
                if (this.current <= this.end) {
                    return {value: this.current++, done: false}
                }
                return {value: undefined, done: true}
            }
        }
    }
})

const numbers = generateNumbers(10);

for (const number of numbers) {
    console.log(number);
}