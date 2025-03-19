const dict = "ABCDEFGHIJKLMNOPORSTUVWXYZ";
const separater = "";
const shift = 13;

const getIndex = (index: number, offset: number) => {
  return index + offset >= 26 ? index + offset - 26 : index + offset;
};

const getLetterWithOffset = (letter: string) => {
  const index = dict.indexOf(letter);
  return dict[getIndex(index, shift)];
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
