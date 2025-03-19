const letters = "ABCDEFGHIJKLMNOPORSTUVWXYZ";
const separater = "";

const transform = (c: string) => {
  const index = letters.indexOf(c);
  if (index !== -1) {
    if (index + 13 >= 26) {
      return letters[index + 13 - 26];
    } else {
      return letters[index + 13];
    }
  }
  return c;
};

export const convert = (str: string) => {
  return str.split(separater).map(transform).join(separater);
};
