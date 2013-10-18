var express = require("express"),
  http = require("http"),
  fs = require("fs");

var app = express();
var port = process.env.PORT || 80;

app.get("/", function(req, res){
  res.send("HELLO WORLD 2 - env: " + JSON.stringify(process.env));
});
app.get("/npmenv", function(req, res){
  fs.readFile('./npmenv', function(err, data){
    if (err) throw err;
    res.setHeader('Content-Type', 'text/plain');
    res.send(data);
  })
});
server = http.createServer(app);
server.listen(port);
console.log("Started on port", port);
