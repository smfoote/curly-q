const leftSingleRegex = /[\'\u2019]([\S])/;
const leftDoubleRegex = /[\"\u201D]([\S])/;
export const replaceQuotes = (str: string): string => {
  return str
    .replace(leftSingleRegex, '\u2018$1')
    .replace("'", '\u2019')
    .replace(leftDoubleRegex, '\u201C$1')
    .replace('"', '\u201D');
};
