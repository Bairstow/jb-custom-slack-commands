const textify = require('../src/textify');

describe("textify", () => {
  const { generateText } = textify;

  it("should default to returning intensified text", () => {
    const result = generateText('test text');
    expect(result.text).toBe('T E S T   T E X T');
  });

  it("should return intensified text with modifier", () => {
    const result = generateText(':intensify: test text');
    expect(result.text).toBe('T E S T   T E X T');
  });

  it("should return spacified text with modifier", () => {
    const result = generateText(':spacify: test text');
    expect(result.text).toBe('t e s t   t e x t');
  });

  it("should return thickened text with modifier", () => {
    const result = generateText(':thicken: test text');
    expect(result.text).toBe('*_t e s t   t e x t_*');
  });

  it("should return edgified text with modifier", () => {
    const result = generateText(':edgify: test text');
    expect(result.text.toLowerCase()).toBe('test text');
  });

  it("should default to returning intensified text with unknown modifier", () => {
    const result = generateText(':notamodifier: test text');
    expect(result.text).toBe('T E S T   T E X T');
  });

  it("should default to returning intensified text with modifier syntax", () => {
    const result = generateText(':nope test text');
    expect(result.text).toBe(': N O P E   T E S T   T E X T');
  });
});
