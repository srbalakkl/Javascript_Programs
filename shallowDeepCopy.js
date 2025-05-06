/**
 * Shallow Copy vs Deep Copy in JavaScript
 *
 * This file explains the differences between shallow and deep copying
 * with practical examples to demonstrate when to use each approach.
 */

console.log('===== SHALLOW COPY VS DEEP COPY EXAMPLES =====');

// =============== SHALLOW COPY ===============
console.log('\n1. SHALLOW COPY EXPLANATION:');
console.log('A shallow copy creates a new object but only copies references to nested objects');
console.log('This means changes to nested objects will affect both the copy and original');

// A complex object with nested properties
const originalObject = {
    name: 'John',
    age: 30,
    skills: ['JavaScript', 'React', 'Node.js'],
    address: {
        city: 'New York',
        country: 'USA',
        coordinates: {
            lat: 40.7128,
            lng: -74.0060
        }
    }
};

console.log('\nOriginal object:');
console.log(originalObject);

// ---- Method 1: Shallow copy using spread operator ----
console.log('\nMethod 1: Shallow copy using spread operator');
const spreadCopy = {...originalObject};

// ---- Method 2: Shallow copy using Object.assign() ----
console.log('Method 2: Shallow copy using Object.assign()');
const assignCopy = Object.assign({}, originalObject);

// ---- Method 3: Shallow copy of arrays using slice() ----
console.log('Method 3: Shallow copy of arrays using slice()');
const arrayOriginal = [1, 2, 3, {value: 4}];
const arrayCopy = arrayOriginal.slice();

// Demonstrating the shallow copy effect
console.log('\nDemonstrating SHALLOW COPY limitations:');

// Modifying primitive values (works as expected)
spreadCopy.name = 'Jane';
console.log('Modified name in copy to "Jane"');
console.log('Original name:', originalObject.name); // Still "John"
console.log('Copy name:', spreadCopy.name); // Now "Jane"

// Modifying nested objects (shows the limitation)
console.log('\nModifying nested objects (shallow copy problem):');
spreadCopy.address.city = 'Boston';
console.log('Modified city in copy to "Boston"');
console.log('Original city:', originalObject.address.city); // Now "Boston" too!
console.log('Copy city:', spreadCopy.address.city); // "Boston"
console.log('Both objects were affected because nested objects are copied by reference!');

// Modifying nested arrays (another limitation)
console.log('\nModifying nested arrays (shallow copy problem):');
spreadCopy.skills.push('TypeScript');
console.log('Added "TypeScript" to skills array in copy');
console.log('Original skills:', originalObject.skills); // Now includes TypeScript!
console.log('Copy skills:', spreadCopy.skills);
console.log('Both arrays were affected because arrays are copied by reference!');

// =============== DEEP COPY ===============
console.log('\n\n2. DEEP COPY EXPLANATION:');
console.log('A deep copy creates a completely new object with all nested objects also copied');
console.log('This means changes to nested objects will NOT affect the original');

// ---- Method 1: Deep copy using JSON.parse/stringify ----
console.log('\nMethod 1: Deep copy using JSON.parse/stringify (with limitations)');
const jsonCopy = JSON.parse(JSON.stringify(originalObject));

// ---- Method 2: Custom recursive deep copy function ----
console.log('Method 2: Custom recursive deep copy function');

function deepCopy(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj; // Return primitives directly
    }

    // Handle Date objects
    if (obj instanceof Date) {
        return new Date(obj);
    }

    // Handle Arrays
    if (Array.isArray(obj)) {
        return obj.map(item => deepCopy(item));
    }

    // Handle Objects
    const copy = {};
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            copy[key] = deepCopy(obj[key]);
        }
    }

    return copy;
}

const customDeepCopy = deepCopy(originalObject);

// Demonstrating the deep copy effect
console.log('\nDemonstrating DEEP COPY benefits:');

// Modifying nested objects in deep copy
console.log('\nModifying nested objects (deep copy works correctly):');
jsonCopy.address.city = 'Chicago';
console.log('Modified city in JSON copy to "Chicago"');
console.log('Original city:', originalObject.address.city); // Still "Boston" (from earlier)
console.log('Deep copy city:', jsonCopy.address.city); // "Chicago"
console.log('Only the copy was affected, as expected with a deep copy!');

// Modifying deeply nested objects
console.log('\nModifying deeply nested objects:');
jsonCopy.address.coordinates.lat = 41.8781;
console.log('Modified latitude in JSON copy to 41.8781');
console.log('Original latitude:', originalObject.address.coordinates.lat); // Still 40.7128
console.log('Deep copy latitude:', jsonCopy.address.coordinates.lat); // 41.8781
console.log('Only the copy was affected, even with deeply nested properties!');

// ---- Limitations of JSON.parse/stringify method ----
console.log('\n3. LIMITATIONS OF JSON DEEP COPY:');

const complexObject = {
    regularValue: 'hello',
    functionValue: function () {
        return 'Hi!';
    },
    dateValue: new Date(),
    undefinedValue: undefined,
    symbolValue: Symbol('symbol'),
    regexValue: /test/,
    infinityValue: Infinity
};

console.log('Original complex object:');
console.log(complexObject);

const jsonComplexCopy = JSON.parse(JSON.stringify(complexObject));
console.log('\nAfter JSON deep copy:');
console.log(jsonComplexCopy);
console.log('Notice: Functions, undefined, symbols, and special values were lost!');

// Custom deep copy handles these cases better
const customComplexCopy = deepCopy(complexObject);
console.log('\nAfter custom deep copy:');
console.log(customComplexCopy);
console.log('Custom function preserves more data types, but functions are still a challenge');

// =============== PRACTICAL USE CASES ===============
console.log('\n\n4. WHEN TO USE EACH APPROACH:');
console.log('- Use shallow copy: When your objects are simple or you only need to modify top-level properties');
console.log('- Use deep copy: When you need to ensure complete isolation between original and copy');
console.log('- Choose the right method based on your specific needs and object structure');

// =============== LIBRARY SOLUTIONS ===============
console.log('\n5. LIBRARY SOLUTIONS:');
console.log('For production code, consider libraries like:');
console.log('- lodash.cloneDeep()');
console.log('- structuredClone() (modern browsers)');
console.log('These provide optimized and well-tested implementations');

// Example of structuredClone (comment out if not available in your environment)
console.log('\nExample of structuredClone() (modern browsers):');
try {
    const structuredCloneCopy = structuredClone(originalObject);
    structuredCloneCopy.address.city = 'San Francisco';
    console.log('Original city after structuredClone modification:', originalObject.address.city);
    console.log('StructuredClone copy city:', structuredCloneCopy.address.city);
} catch (e) {
    console.log('structuredClone() not available in this environment');
}