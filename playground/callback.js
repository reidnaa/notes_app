// setTimeout(
//     () => {
//         console.log('took 2 seconds');
//     }, 2000
// );

// const names = ['reid', 'dog', 'bob'];
// const shortNames = names.filter(name => {
//     return name.length <= 4;
// });

// const geocode = (address, callback) => {
//    setTimeout(()=>{
//         const data = {
//             lat: 20.442 ,
//             long: 120.902 
//         }
//         callback(data);
//     },1000);
    
// }

// geocode('victoria', (data) => {
//     console.log(data);
// });

const add = (first, second, callback) => {
    setTimeout(() => {
        const sum = first + second;
        callback(sum);
    },1000 )
    
}



add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})