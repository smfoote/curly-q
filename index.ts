const leftSingleRegex = /[\'\u2019]([\S])/;
const contractionRegex = /([a-zA-Z])[\'\u2018]([a-zA-Z])/;
const leftDoubleRegex = /[\"\u201D]([\S])/;
export const replaceQuotes = (str: string): string => {
  return str
    .replace(leftSingleRegex, '\u2018$1')
    .replace(contractionRegex, '$1\u2019$2')
    .replace("'", '\u2019')
    .replace(leftDoubleRegex, '\u201C$1')
    .replace('"', '\u201D');
};
