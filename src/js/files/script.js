// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from './functions.js';
// Підключення списку активних модулів
import { flsModules } from './modules.js';

const checkSlider = document.querySelector('.advantages__slider ');
const designerContent = document.querySelector('.advantages__item--designers');
const influencersContent = document.querySelector('.advantages__item--influencers');
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



document.querySelector('#date').textContent = new Date().getFullYear();