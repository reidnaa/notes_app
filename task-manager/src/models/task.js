const mongoose = require('mongoose');
const validator = require('validator');


const Task = mongoose.model('Task', {
    task: {
        required:true,
        type: String,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

module.exports = Task;