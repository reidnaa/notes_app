const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('this works');
        reject("nope not today")
    }, 2000)
})

doWorkPromise.then((result) => {
    console.log('success', result);
}).catch(
    (error) => {
        console.log('weiner', error)
    }
)