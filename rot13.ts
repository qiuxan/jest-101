import { dict , separater, shift } from "./constants"; 

const getIndex = (index: number, offset: number) => (index + offset) % dict. length;


const getLetterWithOffset = (letter: string) => {
  const index = dict.indexOf(letter);
  return dict[getIndex(index, shift)];
};

const transform = (letter: string) => dict.indexOf(letter) !== -1? getLetterWithOffset(letter): letter;

export const convert = (str: string) => str.split(separater).map(transform).join(separater);


