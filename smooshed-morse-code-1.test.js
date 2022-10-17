import smorse from './smooshed-morse-code-1';

it('runs correctly', () => {
  expect(smorse("sos")).toBe("...---...");
  expect(smorse("daily")).toBe("-...-...-..-.--");
  expect(smorse("programmer")).toBe(".--..-.-----..-..-----..-.");
  expect(smorse("bits")).toBe("-.....-...");
  expect(smorse("three")).toBe("-.....-...");

});