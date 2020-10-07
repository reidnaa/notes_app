require('../src/db/mongoose');
const Task = require('../src/models/task')


// Task.create({"task": "rob a taco truck"});
// Task.findByIdAndDelete('5f7a115e216e4e0902caba1d').then((task)=>{
//     console.log(task, 'removed')

//     return Task.countDocuments({completed: false});
// }).then((many)=> {
//     console.log(many)
// }).catch((e)=> {
//     console.log(e)
// })

const findTaskAndDelete = async (id) => {
    const deleteItem = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({"completed": false})

    return count
}

findTaskAndDelete('5f7ded76edd18de958429589').then((count) => {
    console.log('incomplete tasks left: ' , count);
}).catch(e => console.log(e));