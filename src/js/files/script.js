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
    checkSlider.classList.contains('_active') ? showDesigners() : showInfluencers();
  });

  document.querySelector('.header').addEventListener('click', (e) => {
    e.target.classList.contains('_influencers') ? showInfluencers() : null;
    e.target.classList.contains('_designers') ? showDesigners() : null;
  });

  function showDesigners() {
    designerContent.classList.add('_hide');
    influencersContent.classList.add('_active');
    document.querySelector('#checkbox').checked = false;
  }
  function showInfluencers() {
    designerContent.classList.remove('_hide');
    influencersContent.classList.remove('_active');
    document.querySelector('#checkbox').checked = true;
  }
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
