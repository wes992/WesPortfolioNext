export const specialChararatersRegex = /[^A-Za-z0-9]/;

export const isSpecialCharacter = (text: string) =>
  specialChararatersRegex.test(text);
