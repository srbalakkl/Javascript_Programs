/*** Shallow Copy ***/
const original = {
    name: "Alice",
    details: {
        age: 25,
        city: "Wonderland"
    }
};

// Shallow copy
// (i.e., only the top-level properties or reference of the original object is copied NOT THE DATA OF THE OBJECT)
const shallowCopy = {...original};

// Modify the nested object in the shallow copy
shallowCopy.details.city = "Looking Glass";

// Original object is also affected
console.log(original.details.city); // Output: "Looking Glass"

/*** Deep Copy ***/

/*** @desc A deep copy duplicates every property and sub-property of the original object.
 This ensures that the copy is completely independent of the original, and
 changes to the copy do not affect the original object.
 ***/

// NOTE:
// 1) JSON.stringify/JSON.parse is simple, it doesn’t work for all objects (e.g., those containing methods or circular references).
// 2) Deep copy methods can be slower, especially for large objects, so use them judiciously.


const original = {
    name: "Alice",
    details: {
        age: 25,
        city: "Wonderland"
    }
};

// Deep copy using JSON methods
const deepCopy = JSON.parse(JSON.stringify(original));

// Modify the nested object in the deep copy
deepCopy.details.city = "Looking Glass";

// Original object remains unchanged
console.log(original.details.city); // Output: "Wonderland"

