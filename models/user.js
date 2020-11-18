const mongoose = require('mongoose')

const alienSchema = new mongoose.Schema({
    
    first_name: {
        type : String,
        required : true
    },
    last_name: {
        type : String,
        required : true
    },
    email: {
        type : String,
        required : true
    },
    mobile: {
        type : String,
        required : true
    },
    user_id: {
        type : String,
        required : true
    }
})

module.exports = mongoose.model('users', alienSchema)