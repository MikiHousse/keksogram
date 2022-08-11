function  getRundom(min, max) {

  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random()*(max - min + 1)) + min;
}

getRundom(1,10);

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
