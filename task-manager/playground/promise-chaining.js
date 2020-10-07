const mongoose = require('../src/db/mongoose');
const User = require('../src/models/user');

// 5f7620f417d549b6b8e1d622

// User.findByIdAndUpdate('5f762244a11cfdb7d57624fb', {age: 44}).then((user) => {
//     console.log(user);
//     return User.countDocuments({age: 44})
// }).then( (group) => {
//     console.log(group);
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, {age})
    const count = await User.countDocuments({age})

    return count
}

updateAgeAndCount('5f762244a11cfdb7d57624fb', 44).then((count) => {
    console.log("count" , count);
}).catch((e)=> {
    console.log(e)
})