const letters = "ABCDEFGHIJKLMNOPORSTUVWXYZ";
const separater = "";

const transform = (letter: string) => {
  const index = letters.indexOf(letter);
  if (index !== -1) {
    if (index + 13 >= 26) {
      return letters[index + 13 - 26];
    } else {
      return letters[index + 13];
    }
  }
  return letter;
};

export const convert = (str: string) => {
  return str.split(separater).map(transform).join(separater);
};
