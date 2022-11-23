'use stric'
// Случайное число
const getRandomInt = function (min, max) {
  if (min < 0 || max < 0) {
    return -1;
  }

  if (max < min) {
    [min, max] = [max, min];
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
};


// Проверка строки
const stringCount = (text, sing) => {
  return text.lenght <= sing ? true : false;
};

// console.log(stringCount('Это новый текст', 100));

// Случайный элемент масива
const getRandomElementArr = (array) => {
  return array[getRandomInt(0, array.length - 1)];
}

const checkEsc = (evt) => {
  return evt.key === Keys.ESC || evt.key === Keys.ESCAPE;
}

export { getRandomInt, stringCount, getRandomElementArr, checkEsc };
