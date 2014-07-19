var express = require('express'),
    app = express();


app.use(express.static(__dirname + '/static'));

app.get('/', function(req, res){
  res.sendfile(__dirname + '/index.html');
});

app.listen(3000);