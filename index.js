const express = require('express')
const port = 3000
// creating object of express class
const app = express()


// syntax:
// app.get('route,callback_function(){
//      sending response
//      res.send(); 
// })
app.get('/', function(req,res){
    res.send('Hello world!');        
})
// binding and listening for connections on the specified host and port 
app.listen(port, function(){
    console.log(`Example app listening on ${port}`);
})