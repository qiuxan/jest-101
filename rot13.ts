const letters = "ABCDEFGHIJKLMNOPORSTUVWXYZ";
const separater = "";
export const convert = (str: string) => {
  return str
    .split(separater)
    .map((c) => {
      const index = letters.indexOf(c);
      if (index !== -1) {
        if (index + 13 >= 26) {
          return letters[index + 13 - 26];
        } else {
          return letters[index + 13];
        }
      }

      return c;
    })
    .join(separater);
};
