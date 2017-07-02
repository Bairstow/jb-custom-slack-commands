const verifyRequest = (userToken, appToken) => {
  return userToken === appToken;
};

const requestParser = {
  verifyRequest
};

module.exports = requestParser;
