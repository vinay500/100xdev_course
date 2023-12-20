// rest API, http
const express = require('express');
const body_parser = require('body-parser');
const app = express();
const port = 3000

app.use(body_parser.json());
app.get('/',function(req,res){
        res.send('get request');
})
app.post('/conversations', (req, res) => {
        console.log(req.body);
        // req.query => get params from URL
        // url can be like http://localhost:3000?message=123
        console.log(req.query.message);
        res.send({ msg: "2+2 = 4" })
})
app.listen(port, () => {
console.log('Example app listening on')
})
