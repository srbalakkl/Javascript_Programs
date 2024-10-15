/*** Iterable ***/
/**
 * To make something iterable That think must have Iterator object living on it.
 *
 * Any think can be converted to Iterator object by using Symbol.iterator() method.
 */


/*** Iterators ***/
/**
 *
 * Iterator is an object which define sequence,
 * and return value upon termination.
 *
 * Specifically, Iterator is any object which implement ITERATOR PROTOCOLS by having next() method
 *
 * next() method return object with two properties :
 * value:<given value> and done<boolean value>
 *
 * done property is true if iterator has no more values to return.
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