const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json())
mongoose.connect('mongodb+srv://vinaymadugula20:d0Mq5X11TeKgAumY@cluster0.0enmisg.mongodb.net/')

const User = mongoose.model('Users',{ username:String, password:String, email:String })

app.post('/mongodb_signin',async function(req,res){
    const body = req.body;
    if (await User.findOne({ username:body.username})){
        // console.log(username)
        return res.status(400).send('User already exists');
    }
    const user = new User({
        username:body.username,
        email:body.email,
        password:body.password
    })
    user.save();
    res.json({
        msg:'User Created Successfully'
    })
})

app.listen(3000, console.log('app listening'))