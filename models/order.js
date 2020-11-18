const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    
    product_name: {
        type : String,
        required : true
    },
    price: {
        type : String,
        required : true
    },
    address: {
        type : String,
        required : true
    },
    quantity: {
        type : String,
        required : true
    },
    user_id: {
        type : String,
        required : true
    }
})

module.exports = mongoose.model('orders', orderSchema)