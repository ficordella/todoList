const express = require ("express");
const bodyParser = require("bodyParser"),

const app = express();

app.get("/". function(req, res){
  res.send("Moin!");
});





app.listen(3000, function(){
  console.log("Server rodando!");
});
