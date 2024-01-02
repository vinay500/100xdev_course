const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
const JWT_KEY = '1234asd'
// below is a middleware
app.use(express.json());

let users = [
    {username:'vinay', password:'vinay_'},
]


function checkIfUserExistsOrNot(username, password){
    console.log('in func');
    let userExists = false;
    users.map((user)=>{
        if((user.username == username) && (user.password == password)){
            console.log('username',username);
            console.log('user.username == username',user.username == username);
            console.log('user.username',user.username);
            console.log('in true');
            userExists = true;
        }
    })
    if(userExists == true){
        return true;
    }else{
        return false;
    }
    // console.log('in false');
}
app.get('/users',function(req,res){
    console.log(req);
    let token = req.headers.authorization;
    let decoded = jwt.verify(token,JWT_KEY)
    let username = decoded.username;
    res.json({
        users:users
    })
})


app.post('/signin',function(req, res){
    let body = req.body;
    console.log('in signin');
    if ((body.username) && (body.password)){
        console.log('in if');
        console.log('checkIfUserExistsOrNot(body.username)',checkIfUserExistsOrNot(body.username));
        if (checkIfUserExistsOrNot(body.username, body.password) == true){
            let token = jwt.sign(body,JWT_KEY);
            users.push(req.body);
            console.log(users);
            console.log(token);
            return res.json({'token':token});
        }else{
            console.log('in else');
            return res.status(403).json({
                msg:"User doesn't Exists"
            });
        }
        
    }else{
        res.send('Username and Password are Must');
    }
})

app.listen('3000',console.log('app is listening on 3000'));