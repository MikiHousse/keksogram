const getRandom = (min, max) => {
  if (min < 0 || max < 0) {
    return -1;
  }

  if (max < min) {
    [min, max] = [max, min];
  }

  return Math.floor(Math.random()*(max - min + 1)) + min;
};

(getRandom(1, 10));

const stringCount = (text, count) => {
  return text.lenght <= count;
};

// eslint-disable-next-line no-console
console.log(stringCount('Это новый текст', 100));

let socialFooterText = document.querySelector('.social__footer-text');
let socialFooter = document.querySelector('.social__footer');
let socialFooterBtn = document.querySelector('.social__footer-btn');

socialFooterText.oninput = function () {
  // console.log(socialFooter.value);
  if (socialFooterText.value.lenght > 100) {
    socialFooter.classList.add('warning');
    socialFooterBtn.disabled = true;
  } else {
    socialFooter.classList.remove('warning');
    socialFooterBtn.disabled = false;
  }
};
