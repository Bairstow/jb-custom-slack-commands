var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Default route response string.');
});

app.post('/intensify', function(req, res) {
  res.send('Post request made to the intensify route');
});

app.listen(3100, function() {
  console.log('Hello world app listening on port 3100');
});
