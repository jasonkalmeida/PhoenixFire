var express = require('express');
var bodyParser     = require('body-parser');
var app = express();
    app.use(express.static(__dirname + '/static'));
    app.use(bodyParser());
app.get('/', function(req, res){
  res.sendfile(__dirname + '/index.html');
});
app.post('/search', function(req, res){

  console.log(req.body.query);
});
app.listen(3000);
