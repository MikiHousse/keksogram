const Keys = {
    ESC: 'Esc',
    ESCAPE: 'Escape',
};

const Scale = {
    MAX: 100,
    MIN: 25,
    STEP: 25,
};

const scrollOff = document.querySelector('body');
const uploadModal = document.querySelector('.img-upload__overlay');
const uploadInput = document.querySelector('#upload-file');
const uploadModalClose = document.querySelector('#upload-cancel');

//Открываем окно фильтров после загрузки файла
uploadInput.addEventListener('change', () => {
    resetSettings()
    uploadModal.classList.remove('hidden');
    scrollOff.classList.add('modal-open');
});

const closeModal = () => {
    uploadModal.classList.add('hidden');
    scrollOff.classList.remove('modal-open');
    uploadInput.value = '';
}

uploadModalClose.addEventListener('click', () => {
    closeModal();
});

uploadModalClose.addEventListener('click', (evt) => {
    if (evt.key === Keys.ESC || evt.key === Keys.ESCAPE) {
        closeModal();
    }
});

// Зум картинки

const buttonPlus = uploadModal.querySelector('.scale__control--bigger');
const buttonMinus = uploadModal.querySelector('.scale__control--smaller');
const scaleValue = uploadModal.querySelector('.scale__control--value');
const imagePreview = uploadModal.querySelector('.img-upload__preview > img');

const resetSettings = () => {
    imagePreview.style = 'transform: scale(1.00)'
    scaleValue.value = '100%';
  }
  
  buttonPlus.addEventListener('click', () => {
    let scale = parseInt(scaleValue.value, 10) + Scale.STEP;
  
    if (scale >= Scale.MAX) {
      scale = Scale.MAX;
    }
  
    scaleValue.value = scale + '%';
    scale = scale / 100;
    imagePreview.style.transform = 'scale(' + scale + ')';
  })
  
  buttonMinus.addEventListener('click', () => {
    let scale = parseInt(scaleValue.value, 10) - Scale.STEP;
  
    if (scale <= Scale.MIN) {
      scale = Scale.MIN;
    }
  
    scaleValue.value = scale + '%';
    scale = scale / 100;
    imagePreview.style.transform = 'scale(' + scale + ')';
  })


