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