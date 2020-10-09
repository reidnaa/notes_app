const mongoose = require('mongoose');


const Task = mongoose.model('Task', {
    task: {
        required:true,
        type: String,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    owner :{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    }
})

module.exports = Task;