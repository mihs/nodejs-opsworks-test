var express = require("express"),
  http = require("http");

var app = express();
var port = 80;

app.get("/", function(req, res){
  res.send("HELLO WORLD 2");
});
server = http.createServer(app);
server.listen(port);
console.log("Started on port", port);
