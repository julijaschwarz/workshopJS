'use strict';

const modalAdd = document.querySelector('.modal__add'),
  addAd = document.querySelector('.add__ad'),
  modalBtnSubmit = document.querySelector('.modal__btn-submit'),
  modalSubmit = document.querySelector('.modal__submit'),
  body = document.querySelector('body'),
  catalog = document.querySelector('.catalog'),
  modalItem = document.querySelector('.modal__item');

addAd.addEventListener('click', () => {
  modalAdd.classList.remove('hide');
  modalBtnSubmit.disabled = true;
});

modalAdd.addEventListener('click', event => {
  const target = event.target;

  if (target.closest('.modal__close') ||
      target === modalAdd) {
    modalAdd.classList.add('hide');
    modalSubmit.reset();
  }
});

body.addEventListener('keydown', (event) => {
  if (event.code === 'Escape') {
    modalAdd.classList.add('hide');
  }
});

catalog.addEventListener('click', event => {
  const target = event.target;
  if (target.closest('.catalog')) {
    modalItem.classList.remove('hide');
  }
});

modalItem.addEventListener('click', event => {
  const target = event.target;
  if (target.closest('.modal__close') ||
    target === modalItem) {
    modalItem.classList.add('hide');
  }
});
