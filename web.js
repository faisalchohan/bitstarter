var fs = require('fs');
var express = require('express');

var app = express.createServer(express.logger());
var fileName = './index.html';

var htmlTextBuff = fs.readFileSync(fileName);
var htmlText = htmlTextBuff.toString('utf8');

app.get('/', function(request, response) {
  response.send(htmlText);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
