const express = require('express');
const mongo = require('mongoose');
const bodyparser = require('body-parser');
const app = express();
const user = require('./models/user')
const order = require('./models/order')
const fs = require('fs')
const mongoUrl = 'mongodb://localhost:27017/nodeDBex'

app.listen(9000, function(req, res){
   
});

app.use(bodyparser.json());

mongo.connect(mongoUrl,{useNewUrlParser:true,useUnifiedTopology: true})

const con = mongo.connection


con.on('open', function(){
    console.log('MongoDB connected succesfully')
})

app.post('/create_user', async (req, res)=>{
    
    const alien = new user({
        first_name : req.body.first_name,
        last_name : req.body.last_name,
        email : req.body.email,
        mobile : req.body.mobile,
        user_id : req.body.user_id
    })

    try {
        const aliens = await alien.save()
        res.send("User created success")
    } catch (error) {
        res.send('Error ' + error )
    }

})

app.post('/create_order', async (req, res)=>{
    
    const order_data = new order({
        product_name : req.body.product_name,
        price : req.body.price,
        address : req.body.address,
        quantity : req.body.quantity,
        user_id : req.body.user_id
    })

    try {
        const orders = await order_data.save()
        res.send('Order created successfully')
    } catch (error) {
        res.send('Error ' + error )
    }

})

app.get('/get_order/:id', async (req, res)=>{
    let id = req.params.id;
    console.log(id);
    try{
        let result = await order.find({"user_id":id})
        res.send(result)
    }catch(error){
        res.send('Error '+ error)
    }

})

app.get('/get_user', async (req, res)=>{
    let id = req.params.id;
    try{
        let result = await user.find()
        res.json(result)
    }catch(error){
        res.send('Error '+ error)
    }

})

