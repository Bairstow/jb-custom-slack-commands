const spacifyModifier = (text) => text.split('').join(' ');
const intensifyModifier = (text) => spacifyModifier(text).toUpperCase();
const thickenModifier = (text) => '*_'.concat(spacifyModifier(text), '_*');
const edgifyModifier = (text) => {
  const textArray = text.split('');
  const makeRandomCase = (char) => (Math.random() > 0.5) ? char.toUpperCase() : char.toLowerCase();
  const edgyArray = textArray.map((char) => makeRandomCase(char));
  return edgyArray.join('');
};

const textModifiers = {
  'spacify': spacifyModifier,
  'intensify': intensifyModifier,
  'thicken': thickenModifier,
  'edgify': edgifyModifier
};

const parseInputTextForModifier = (inputText) => {
  const trimmedText = inputText.trimLeft();
  const initialColonIndex = trimmedText.indexOf(':');
  const secondColonIndex = trimmedText.indexOf(':', 1);
  const hasInitialColon = initialColonIndex === 0;
  const hasSecondColon = secondColonIndex >= 1;
  const splitText = {
    hasModifierSyntax: false,
    modifier: '',
    display: trimmedText
  };
  if (hasInitialColon && hasSecondColon) {
    splitText.hasModifierSyntax = true;
    splitText.modifier = trimmedText.substring((initialColonIndex + 1), secondColonIndex);
    splitText.display = trimmedText.substring(secondColonIndex + 1);
  }
  return splitText;
};

const generateTextWithModifier = (display, modifier) => {
  const normalisedText = String(display);
  return textModifiers[modifier](normalisedText);
};

const generateText = (inputText) => {
  const splitText = parseInputTextForModifier(inputText);
  const { hasModifierSyntax, modifier, display } = splitText;
  const hasValidModifier = Object.keys(textModifiers).includes(modifier);
  const result = {
    text: '',
    error: ''
  }
  if (!hasValidModifier) {
    result.error = 'Unexpected modifier found';
  }

  if (hasModifierSyntax && hasValidModifier) {
    result.text = generateTextWithModifier(display, modifier);
  } else {
    result.text = generateTextWithModifier(display, 'intensify');
  }

  return result;
};

const textify = {
  generateText
};

module.exports = textify;
