const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Yay Node!");
});

//## Step 1: Reading endpoint query

app.get("/add", function (req, res) {
    let value1 = parseInt(req.query.value1);
    let value2 = parseInt(req.query.value2);
    let result = parseInt(value1 + value2);
    // res.send(`${result}`);
    res.send(result.toString());
  });

app.get("/substract", function (req, res) {
    let value1 = parseInt(req.query.value1);
    let value2 = parseInt(req.query.value2);
    let result = parseInt(value1 - value2);
    res.send(result.toString());
  });

  app.get("/multiply", function (req, res) {
    let value1 = parseInt(req.query.value1);
    let value2 = parseInt(req.query.value2);
    let result = parseInt(value1 * value2);
    res.send(result.toString());
  });

  app.get("/divide", function (req, res) {
    let value1 = parseInt(req.query.value1);
    let value2 = parseInt(req.query.value2);
    let result = parseInt(value1 / value2);
    res.send(result.toString());
  });

  //## Step 2: Reading endpoints parameters

app.get("/add/:value1/:value2", (request, response) => {
    let value1 = parseInt(req.params.value1);
    let value2 = parseInt(req.params.value2);
    let result = parseInt(value1 + value2);
    // res.send(`${result}`);
    res.send(result.toString());
});

app.get("/add/:value1/:value2", (request, response) =>{
    let value1 = parseInt(req.params.value1);
    let value2 = parseInt(req.params.value2);
    let result = parseInt(value1 - value2);
    res.send(result.toString());
});

app.get("/add/:value1/:value2", (request, response) => {
    let value1 = parseInt(req.params.value1);
    let value2 = parseInt(req.params.value2);
    let result = parseInt(value1 * value2);
    res.send(result.toString());
  });
  
app.get("/add/:value1/:value2", (request, response) => {
    let value1 = parseInt(req.params.value1);
    let value2 = parseInt(req.params.value2);
    let result = parseInt(value1 / value2);
    res.send(result.toString());
});






  app.get("/", function (req, res) {
    res.send("Yay Node!");
  });




app.listen(3004, function () {
  console.log("Server is listening on port 3003. Ready to accept requests!");
});