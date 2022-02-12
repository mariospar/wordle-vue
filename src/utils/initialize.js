import { common } from './words';
import store from "../store"

export const initializeBoard = () => {
  return [...Array(30)].map(() => '');
};

export const initializeKeyboard = () => {
  const keys = 'QWERTYUIOPASDFGHJKL§ZXCVBNM'.split('').map((key) => {
    if (key === '§') return { key: 'ENTER' };
    return { key, evaluation: null };
  });
  keys.push({ key: 'DELETE' });
  return keys;
};

export const getRandomWord = () => {
  // let word;
  // fetch("http://localhost:3000/word")
  //   .then(response => response.json())
  //   .then(json => {
  //     console.log(json)
  //     word = json.toLowerCase();
  //   })
  // return word

  return common[Math.floor(Math.random() * common.length)];
};
