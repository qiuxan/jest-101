const dict = "ABCDEFGHIJKLMNOPORSTUVWXYZ";
const separater = "";

const getIndex = (index: number) => {
  return index + 13 >= 26 ? index + 13 - 26 : index + 13;
};

const getLetterWithOffset = (letter: string) => {
  const index = dict.indexOf(letter);

  return dict[getIndex(index)];
};

const transform = (letter: string) => {
  const index = dict.indexOf(letter);
  if (index !== -1) {
    return getLetterWithOffset(letter);
  }
  return letter;
};

export const convert = (str: string) => {
  return str.split(separater).map(transform).join(separater);
};
