/**
 * @desc pure function is the function that satisfy the below 2 conditions,
 *
 * 1) Same input should always return the same output,
 *      (i.e) Pure function should always return / calculate the value based on its parameter rather than depends on other variable/function/ anything from outside the function.
 *
 * 2) No side effects.
 *      (i.e) Any other function/variable affect the calculation of return value is called side effect.
 *
 * Use cases of this pure function
 * 1) Pure functions can be very helpful for unit testing,
 * 2) More reusable than impure function,
 * 3) We don't have to worry about the side effects like impure function.
 *
 * */

const array = [1, 2, 3, 4, 5]

function addArrayElement(element) {
    // this is not a pure function because array variable in this function is relayed on external variable.
    array.push(element)
}

function addArrayElement2(a, element) {
    // this is also not a pure function because the variable a has side effects
    // that is the arrays value will change the old variables value too.
    a.push(element)
}

function addArrayElement3(a, element) {
    // This is an example for pure function.
    //  in this case the old array variables value not be changed.
    return [...a,element]
}

/**** Changing an object in an impure way *****/

const impureAssoc = (key, value, object) => {
     object[key] = value;
}

const person = {
    name:'bala'
};

const result = impureAssoc('age', 20, person);
console.log({
    person,
    result
});

/*** Purifying the above function ****/
const pureAssoc = (key, value, object) => ({
    ...object,
    [key]: value
});

const person = {
    name: 'Bobo'
};

const result = pureAssoc('shoeSize', 400, person);

console.log({
    person,
    result
});

/** Unsafe Nested Mutation */
const person = {
    name: 'Bobo',
    address: { street: 'Main Street', number: 123 }
};

const shallowPersonClone = { ...person };
shallowPersonClone.address.number = 456;

console.log({ person, shallowPersonClone });

/** Safe Nested Mutation
To safely mutate nested properties, we need a deep clone.*/

    const person = {
    name: 'Bobo',
    address: { street: 'Main Street', number: 123 }
};

const deepPersonClone = JSON.parse(JSON.stringify(person));
deepPersonClone.address.number = 456;

console.log({ person, deepPersonClone });