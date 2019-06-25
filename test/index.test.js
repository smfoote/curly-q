const { replaceQuotes } = require('../dist/index.js');

test('Replaces single quotes', () => {
  expect(replaceQuotes(`'Hello world'`)).toBe('\u2018Hello world\u2019');
  expect(replaceQuotes(`'`)).toBe('\u2019');
  expect(replaceQuotes(` ' `)).toBe(' \u2019 ');
  expect(replaceQuotes(`Hello world'`)).toBe('Hello world\u2019');
  expect(replaceQuotes(`'Hello world`)).toBe('\u2018Hello world');
  expect(replaceQuotes(`\u2019Hello world`)).toBe('\u2018Hello world');
});

test('Replaces double quotes', () => {
  expect(replaceQuotes(`"Hello world"`)).toBe('\u201CHello world\u201D');
  expect(replaceQuotes(`"`)).toBe('\u201D');
  expect(replaceQuotes(` " `)).toBe(' \u201D ');
  expect(replaceQuotes(`Hello world"`)).toBe('Hello world\u201D');
  expect(replaceQuotes(`"Hello world`)).toBe('\u201CHello world');
  expect(replaceQuotes(`\u201DHello world`)).toBe('\u201CHello world');
});
