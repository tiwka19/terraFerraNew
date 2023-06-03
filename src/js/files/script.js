// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from './functions.js';
// Підключення списку активних модулів
import { flsModules } from './modules.js';

const slider = () => {
  const checkSlider = document.querySelector('.advantages__slider ');
  const designerContent = document.querySelector('.advantages__item--designers');
  const influencersContent = document.querySelector('.advantages__item--influencers');
  if (!checkSlider) return;
  checkSlider.addEventListener('click', () => {
    checkSlider.classList.toggle('_active');
    if (checkSlider.classList.contains('_active')) {
      designerContent.classList.add('_hide');
      influencersContent.classList.add('_active');
    } else {
      designerContent.classList.remove('_hide');
      influencersContent.classList.remove('_active');
    }
  });
};
slider();

const popupButtons = document.querySelectorAll('[data-popup]');
let designerButton = document.querySelector('.tabs__title._designers');
let influencerButton = document.querySelector('.tabs__title._influencers');
popupButtons.forEach((button) => {
  button.addEventListener('click', function (e) {
    if (this.classList.contains('_designers')) {
      designerButton.click();
    }
    if (this.classList.contains('_influencers')) {
      influencerButton.click();
    }
  });
});

document.querySelector('#date').textContent = new Date().getFullYear();
