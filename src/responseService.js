const restler = require('restler');
const queryString = require('query-string');

const generateJSONResponseWithText = (text) => {
  return JSON.stringify({
    'response_type': 'in_channel',
    'text': text
  });
};

const generateURLEncodedResponseWithText = (text) => {
  return queryString.stringify({
    'as_user': false,
    'username': 'mock bot',
    'icon_url': 'http://lorempixel.com/48/48',
    'text': text
  });
};

const postToResponseURL = (responseData, responseURL) => {
  restler.post(
    responseURL,
    {
      data: responseData,
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );
};

const postMessageToChat = (responseData) => {
  const chatURL = 'https://slack.com/api/chat.postMessage';
  const postData = generateURLEncodedResponseWithText('test string');
  restler.post(
    chatURL,
    {
      data: postData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': postData.length
      }
    }
  );
};

const responseService = {
  generateJSONResponseWithText,
  generateURLEncodedResponseWithText,
  postToResponseURL,
  postMessageToChat
};

module.exports = responseService;
