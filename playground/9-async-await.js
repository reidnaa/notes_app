const add = (a, b) => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {

            if (a < 0 || b < 0 ){
                return reject("numbers can't be less than zero");
            }
            resolve(a + b);
        }, 2000);
    })
}



const doWork = async () => {
    const sum = await add(1,2)
    const sum2 = await add(sum, 20)

    return sum2;
}

doWork().then( ( sum ) => {
    console.log('result' , sum)
}).catch((e) => {
    console.log(e);
})