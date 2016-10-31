var bodyParser = require('body-parser');
var express = require('express');
var app = express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.get('/', function(req, res) {
  res.send('Default route response string.');
});

app.post('/intensify', function(req, res) {
  // Expecting to receive data from Slack
  // token=xw0MCnvAjBbDIT4N3oJQhw7R
  // team_id, team_domain, channel_id, channel_name, user_id, user_name
  // command, text, response_url
  // var intensifiedText = "";
  // if (req.body.command === "/intensify") {
    // intensifiedText = String(req.body.text).toUpperCase().split('').join(' ');
  // }
  var intensifiedText = String(req.body.text).toUpperCase().split('').join(' ');
  var intensifiedResponse = {
    "response_type": "ephemeral",
    "text": intensifiedText
  }
  res.json(intensifiedResponse);
});

app.listen(3200, function() {
  console.log('Custom Slack Command app listening on port 3200');
});
