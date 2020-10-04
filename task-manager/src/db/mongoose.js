const mongoose = require('mongoose');
// const validator = require('validator');



const connectionURL = 'mongodb://127.0.0.1:27017';
mongoose.connect(connectionURL + '/task-manager-api', {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true
});



const Task =  mongoose.model('Task', {
    description: {
        type: String,
        trim: true,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

// const task = new Task({
//     description: 'i dont know'
// })

// task.save().then( (result) => {
//     console.log('new task added');
// }).catch( (error) => {
//     console.log(error)
// })