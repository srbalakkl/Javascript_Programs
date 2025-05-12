/**
 * @desc
 * A **callback function** in JavaScript (and in programming in general) is a function that is passed as an argument into another function. This "outer" function is then expected to "call back" or execute the passed-in function at a specific time or when a certain event occurs.
 *
 * **Why are callback functions used in JavaScript?**
 * 1. **Asynchronous Operations (Very Common!):** JavaScript is single-threaded, meaning it can only do one thing at a time. However, many operations take time, such as:
 *     - Fetching data from a server (e.g., using or `XMLHttpRequest`). `fetch`
 *     - Reading a file.
 *     - Waiting for a timer to complete (, `setInterval`). `setTimeout`
 *     - Waiting for user interactions (like a button click). If JavaScript waited for these to finish before doing anything else, your web page or application would freeze. Callbacks allow you to say, "Start this long task, and when it's done, run _this_ function (the callback)." In the meantime, JavaScript can continue to handle other things.
 *
 * 2. **Event Handling:** When you want to respond to user actions (like clicks, mouse movements, key presses) or browser events (like a page loading), you provide a callback function that will be executed when that event occurs.
 * 3. **Code Customization and Reusability:** You can write more generic functions that accept callbacks to customize their behavior. For example, array methods like `map`, `filter`, and `forEach` all accept callback functions to define what to do with each element.
 * */

function sayHello() {
    console.log("Hello..")
}

/**
 *---Another way to create a function & use it inside setTimeout function
 const sayHello2 = ()=>{
 console.log("Hello..")
 }*/

setTimeout(sayHello, 10000);// Call back function in an asynchronous way

setTimeout((function () {
    console.log("Hello..")
}), 1000);//an anonymous function is used as a call back function.

const loadPokemon = (id, cb) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res => res.json())
        .then(data => {
            cb(data)
        })
}

loadPokemon(56, (pokemon) => {
    console.log(pokemon)
})
