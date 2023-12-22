const express = require('express');
const zod = require("zod");
const app = express();

// console.log('at line 5');
app.use(express.json())


// here we created an array of numbers
// we will validate the input of the user against the schema  
const schema = zod.array(zod.number());

app.post('/healthy_kidney', function(req, res){
    // console.log('in post req');
    const kidneys = req.body.kidneys;
    console.log('kidneys',kidneys);
    const response = schema.safeParse(kidneys);
    res.send({
        response
    })
});

app.listen(3000, console.log('app listening on 3000'))

