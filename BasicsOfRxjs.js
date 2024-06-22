/*
* To use rxjs install it using phpstorm default method instead of pnpm add command,
* Enable esmodule on package.json by typing "type": "module" command in package.json.
*
* */

import {Observable} from 'rxjs';

// map(x => x * x)(of(1, 2, 3))
//     .subscribe((v) => console.log(`Output is: ${v}`));


//Creating Observable and pushing multiple values to it.

const observable = new Observable((subscriber) => {
    console.log('The values are')
    subscriber.next(1)
    subscriber.next(2)
});

// Invoking or Subscribing to the created observable.

observable.subscribe({
    next(val) {
        console.log(val)
    },
    error(err) {
        console.log('Error is', err);
    },
    complete() {
        console.log('Completed')
    }
});

function fn() {
    console.log('Function is called')
    return '99'
}

// Note: Some people claim that Observables are asynchronous. That is not true. If you surround a function call with logs
console.log('BEFORE')
console.log(fn());
console.log('AFTER')

console.log(`------------------see the observable also executes the value synchronously.---------------`)
console.log('BEFORE')
observable.subscribe((x)=> console.log(x));
console.log('AFTER')

//But the observable can also execute the value asynchronously (i.e using setTimeout()).