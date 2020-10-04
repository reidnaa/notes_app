const mongoose = require('mongoose');
const validator = require('validator');


const User = mongoose.model('User', {
    name: {
        type: String,
        required : true,
        trim : true,
        
        
    },
    password:{
        minlength: 6,
        type: String,
        required:true,
        trim:true,
        validate(value){
            if (value.toLowerCase().includes('password')){
                throw new Error('cannot contain \'password\'');
            }
        }
    },
    email:{
        type: String,
        required: true,
        trim:true,
        lowercase:true,
        validate(value){
            if (!validator.isEmail(value)){
                throw new Error("email is messed");
            }
        }
        
    },
    age: {
        type: Number,
        validate(value) {
            if (value < 0 ){
                throw new Error("issues bro")
            }
        },
        default: 0

    }
})

module.exports = User;