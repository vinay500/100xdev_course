// 1.write a function that takes username and password as input and returns jwt token with username encoded
// should return null is username is not valid email and password is less than 6 characters

// 2.write a function that takes jwt as input and returns true is jwt token can be decoded otherwise false

// 3.write a function that takes jwt as input and returns true is jwt token can be verified otherwise false

// clone assignments and test the solutions 

// const express = require('express');
const z = require('zod');
const jwt = require('jsonwebtoken');
// const app = express();
const JWT_SECRET_KET = 'JWT_SECRET_KET';

const schema = z.object({
    username:z.string().email(),
    password:z.string().length(6)
}) 

function generate_jwt(username, password){
    let user_data = {username:username, password:password};
    console.log('user_data',user_data);
    const user_data_validation = schema.safeParse(user_data);
    // console.log('user_data_validation',user_data_validation);
    if(user_data_validation.success){
        return jwt.sign({ username }, JWT_SECRET_KET);
    }else{
        // console.log('user_data_validation.error:',user_data_validation.error.issues[0].message);
        return user_data_validation.error.issues[0].message;
    }
}

// console.log(generate_jwt('vinay1@gmail.com','vinay_'));

function decode_jwt(token){
    if(jwt.decode(token)){
        return true
    }
    else{
        return false
    }
}
// invalid jwt token
// console.log(decode_jwt('ads'))
//  valid jwt token
// console.log(decode_jwt('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InZpbmF5MUBnbWFpbC5jb20iLCJpYXQiOjE3MDQyMTQxMTl9.TzJltuS0W0xbHEAeXn6Ou6b-ZaKmwTf39thbmy4E8XA')) 

function verify_jwt(token){
    try {
        let decoded = jwt.verify(token,JWT_SECRET_KET)
        console.log('decoded:',decoded);
        return true
    }catch(err){
        // console.log('err:',err);
        return false
    }
}
// invalid jwt token
// console.log(verify_jwt('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InZpbmF5MUBnbWFpYXQiOjE3MDQyMTQxMTl9.TzJltuS0W0xbHEAeXn6Ou6b'))
//  valid jwt token
console.log(verify_jwt('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InZpbmF5MUBnbWFpbC5jb20iLCJpYXQiOjE3MDQyMTQxMTl9.TzJltuS0W0xbHEAeXn6Ou6b-ZaKmwTf39thbmy4E8XA')) 


// app.listen(3000,console.log('app is listening'))