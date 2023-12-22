// const express = require('express');

// const app = express();

// // parameter next refers to the 2nd function of the get request
// app.get('/',function(request,response,next){
//     // getting request/url and request/url parameters
//     a_param = parseInt(request.query.a);
//     b_param = parseInt(request.query.b);
//     sum = a_param + b_param;
//     // sending response for get request
//     // res.send() is for sending string
//     // res.json() is for sending json, dict
//     response.send(`in express app, sum = ${sum}`);
//     // next() will call the below function
//     // using this next(), we can all many functions one after the another 
//     // reason we use this functionality(ie., calling 2nd function) is for things like middlewares
//     // ie., we will do necessary checks like user validation, authorization, input validation etc 
//     // and if the checks are done and request is valid then we will process the request and send the response
//     next();
//     },
//     function(req, res){
//         console.log('in send function')
//     }
// )

// // listening on a port
// // 'listening on port 3000' will be logged in console when this express is up and running
// app.listen(3000, console.log(`listening on port 3000`));