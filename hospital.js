const express = require('express');
const body_parser = require('body-parser');


const app = express();

let users = [{
    name: 'John',
    kidneys: [{
            healthy: false
        }, {
            healthy: true
        },{
            healthy: true
        },
    ]
    }]
// console.log(users[0]);

function get_total_kidney(){
    let total_kidneys = users[0]['kidneys'].length;
    console.log(total_kidneys) 
    return total_kidneys
}  
function get_healthy__unhealthy_kidneys(){
    let total_healthy_kidneys = 0;
    let total_unhealthy_kidneys = 0;
    let kidneys_health = {};
    let kidneys = users[0]['kidneys']
    kidneys.map(
        function(kidney){
            if (kidney['healthy'] == true){
                total_healthy_kidneys++; 
            }else{
                total_unhealthy_kidneys++;
            }
        }
    )
    kidneys_health['total_healthy_kidneys'] = total_healthy_kidneys;
    kidneys_health['total_unhealthy_kidneys'] = total_unhealthy_kidneys;
    return kidneys_health;
}
// console.log('get_healthy__unhealthy_kidneys',get_healthy__unhealthy_kidneys())

app.use(body_parser.json());
app.get('/',function(req,res){
    let total_no_of_kidneys = get_total_kidney().toString();
    res.send(total_no_of_kidneys);
})
app.get('/kidneys-health',function(req,res){
    let get_healthy__unhealthy_kidneys_output = get_healthy__unhealthy_kidneys();
    let healthy_kidneys = get_healthy__unhealthy_kidneys_output['total_healthy_kidneys'].toString();
    let unhealthy_kidneys = get_healthy__unhealthy_kidneys_output['total_unhealthy_kidneys'].toString();
    res.send(`healthy_kidneys: ${healthy_kidneys} \n unhealthy_kidneys: ${unhealthy_kidneys}`);
})
app.post('/add-kidney',function(req,res){
    let kidney_health = req.body;
    console.log(kidney_health);
    let kidney_array = users[0]['kidneys'];
    users = kidney_array.push({health:kidney_health});
    res.send(users[0]);
})
app.put('/change_kidney_health',function(req,res){
    users[0]['kidneys'][0] = {'healthy':true}; 
    res.send(users[0]);
})
app.delete('/remove_kidney',function(req,res){
    users[0]['kidneys'].pop();
    res.send(users[0]);
})

app.listen(3000,console.log('app listening'));