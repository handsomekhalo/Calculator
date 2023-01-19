const express = require("express");

const app = express();

const bodyParser = require("body-parser");

//special use to access htmll from js express
app.use(bodyParser. urlencoded({extended:true}))


app.get("/" , function(req , res){

        //consnt to use as a location so info can be fetched from any where its hosted
    res.sendFile(__dirname + "/index.html");

})

app.post("/bmiCalculator.html"  , function(req, res)
{
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);

    let result= num1 + num2;

    res.send("The result of your calculation is " + result);
})



app.get("/bmiCalculator.html" , function(req , res){

    //consnt to use as a location so info can be fetched from any where its hosted
res.sendFile(__dirname + "/bmiCalculator.html");

})


app.post("/bmiCalculator.html" ,  function(req , res)
{

    let weight = parseFloat(req.body.weight);
    let height =parseFloat(req.body.weight);

    let bmi= weight/(height* height);
   
    
    res.send("Your BMI is" + bmi)
})




app.listen(3000 , function()
{
    console.log("online");
})
