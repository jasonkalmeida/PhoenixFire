var express = require('express'),
    app = express();


app.configure(function() {
  app.use(express.bodyParser());
  //...
}


app.use(express.static(__dirname + '/static'));

app.get('/', function(req, res){
  res.sendfile(__dirname + '/index.html');
  app.post('/test-page', function(req, res) {
    var name = req.body.name,
        color = req.body.color;
    // ...
});
});

app.listen(3000);