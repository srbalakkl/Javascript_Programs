console.log('********* Promise *********')
const arrived = true;
const ride = new Promise(function (resolve,reject) {
    if (arrived){
        resolve("I arrived")
    }else {
        reject("driver is rejected");
    }
});

ride.then(value =>{
    console.log('then',value)
})

ride.catch(val =>{
    console.log('catch',val)
})

ride.finally(val=>{
    // A finally callback will not receive any argument, since there's no reliable means of determining if the promise was fulfilled or rejected.
    // This use case is for precisely when you do not care about the rejection reason, or the fulfillment value, and so there's no need to provide it. (mdn)
    console.log('final',val)
})

//****** Multiple Promises*******

console.log(`****** Multiple Promises*******`)
function watchTutorialCallback(callback, errorCallback) {
    let userLeft = false
    let userWatchingCatMeme = false

    if (userLeft) {
        errorCallback({
            name: 'User Left',
            message: ':('
        })
    } else if (userWatchingCatMeme) {
        errorCallback({
            name: 'User Watching Cat Meme',
            message: 'WebDevSimplified < Cat'
        })
    } else {
        callback('Thumbs up and Subscribe')
    }
}

function watchTutorialPromise() {
    let userLeft = false
    let userWatchingCatMeme = false
    return new Promise((resolve, reject) => {
        if (userLeft) {
            reject({
                name: 'User Left',
                message: ':('
            })
        } else if (userWatchingCatMeme) {
            reject({
                name: 'User Watching Cat Meme',
                message: 'WebDevSimplified < Cat'
            })
        } else {
            resolve('Thumbs up and Subscribe')
        }
    })
}

watchTutorialCallback(message => {
    console.log(message)
}, error => {
    console.log(error.name + ' ' + error.message)
})

watchTutorialPromise().then(message => {
    console.log(message)
}).catch(error => {
    console.log(error.name + ' ' + error.message)
})

const recordVideoOne = new Promise((resolve, reject) => {
    resolve('Video 1 Recorded')
})

const recordVideoTwo = new Promise((resolve, reject) => {
    resolve('Video 2 Recorded')
})

const recordVideoThree = new Promise((resolve, reject) => {
    resolve('Video 3 Recorded')
})

//all will return all the promises at once
Promise.all([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then(messages => {
    console.log(messages)
})

// race will return the first promise only
Promise.race([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then(message => {
    console.log(message)
})