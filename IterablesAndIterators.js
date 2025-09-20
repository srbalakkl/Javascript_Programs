
//iterable
/**
 *
 * @desc An **iterable** is any object that implements the `@@iterator` method.
 * (which is a method with the special key [Symbol.iterator]).
 *
 * The datatypes that come with the built-in iterator methods are
 * Iterables (because it has a built-in iterator method [Symbol.iterator]): Array, String, Maps, Sets.
 *
 *
 * */

// iterator
/**
 * @desc An iterator is an object that provides a standardized way to access items in a collection,
 * one at a time.
 *
 * - It must have a `next()` method, which returns an object with two properties:
 *     - The next value in the sequence `value`
 *     - `true` if there are no more values, `false` otherwise `done`
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
