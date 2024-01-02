const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://vinaymadugula20:d0Mq5X11TeKgAumY@cluster0.0enmisg.mongodb.net/')


const User = mongoose.model('Users',{ name: String, username: String, password: String});

const user = new User({ name: 'Vinay'});

user.save().then(()=> console.log('saved'));