const generateIntenseText = (inputText) => {
  console.log(`Intensifying text: ${inputText}`);
  return String(inputText).toUpperCase().split('').join(' ');
};

const intensify = {
  generateIntenseText
};

module.exports = intensify;
