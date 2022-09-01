const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
    
});
app.get('/bmiCalc',function(req,res){
    res.sendFile(__dirname + '/bmiCalc.html');
    
})

app.post('/', function(req,res){
    //the num1 part of req.body.num1 comes from the name attribute in the html file. 
    //we can do this because we are using the body parser which lets us get the info 
    //from the body. 
    let num1 = req.body.num1;
    let num2 = req.body.num2;
    let result = +num1 + +num2;
    
    res.send(`Result of calculation is ${result}`);
})

app.post('/bmiCalc',function(req,res){
    let num1 = req.body.wt;
    let num2 = req.body.ht;
    let result = +num1 / + num2;
    res.send(`your bmi is ${result}`)
})

app.listen(3000);