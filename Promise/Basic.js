console.log("********* Promise Basic *********");
const arrived = true;
const ride = new Promise(function (resolve, reject) {
    if (arrived) {
        resolve("I arrived")
    } else {
        reject("driver is rejected");
    }
});

ride.then(value => {
    console.log('then', value)
})

ride.catch(val => {
    console.log('catch', val)
})

ride.finally(val => {
    // A finally callback will not receive any argument, since there's no reliable means of determining if the promise was fulfilled or rejected.
    // This use case is for precisely when you do not care about the rejection reason, or the fulfillment value, and so there's no need to provide it. (mdn)
    console.log('final', val)
})