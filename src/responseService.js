const restler = require('restler');
const queryString = require('query-string');

const generateJSONResponseWithText = (text, reqBody) => {
  return JSON.stringify({
    'response_type': 'in_channel',
    'as_user': true,
    'username': reqBody.user_name,
    'icon_url': 'http://lorempixel.com/48/48',
    'channel': `${reqBody.channel_name}`,
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
      headers: {
        'Content-Type': 'application/json'
      },
      data: responseData
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
