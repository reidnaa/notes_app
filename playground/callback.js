const doWrokCallback = (callback) => {
    setTimeout(() => {
        callback('this is my error', undefined);
    }, 2000);
}

doWrokCallback((error, result ) => {
    if (error){
        return console.log(error)
    }

    console.log(result);
});