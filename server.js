const bodyParser = require('body-parser');
const express = require('express');

const requestParser = require('./src/requestParser');
const intensify = require('./src/intensify');
const responseService = require('./src/responseService');
const {
  generateJSONResponseWithText,
  generateURLEncodedResponseWithText,
  postToResponseURL,
  postMessageToChat
} = responseService;

const { SLACK_TOKEN: slackToken, PORT } = process.env;
const port = PORT || 3200;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Default route response string.');
});

app.post('/intensify', (req, res) => {
  const { body } = req;
  const { token, text, response_url } = body;
  console.log(`Request made for ${response_url}`);
  if (requestParser.verifyRequest(token, slackToken)) {
    const intenseText = intensify.generateIntenseText(text);
    res.status(200).send();
    const responseData = generateJSONResponseWithText(intenseText);
    postToResponseURL(responseData, response_url);
  } else {
    res.status(400).send();
  }
});

app.listen(port, () => {
  console.log('Custom Slack Command app listening on port 3200');
});
