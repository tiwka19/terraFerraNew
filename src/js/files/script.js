// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from './functions.js';
// Підключення списку активних модулів
import { flsModules } from './modules.js';

import JustValidate from 'just-validate';

const validator = new JustValidate('#designerForm', {});
validator
  .addField('#name', [{ rule: 'required' }])
  .addField('#email', [{ rule: 'required' }, { rule: 'email' }])
  .addField('#phone', [{ rule: 'required' }, { rule: 'number' }])
  .addField('#phone', [{ rule: 'required' }, { rule: 'number' }])
  .addField('#accept_des', [{ rule: 'required' }])
  .addField('#website', [{ rule: 'required' }])
  .onSuccess((event) => event.currentTarget.submit());

const forms = document.querySelectorAll('form');
forms.forEach((form) => {
  const formInputs = form.querySelectorAll('input');
  const formButton = form.querySelector('.button');
  formInputs.forEach((input) => {
    input.addEventListener('input', () => {
      const isFormFilled = Array.from(formInputs).every((input) => {
        if (input.type === 'checkbox') {
          return input.checked;
        } else {
          return input.value !== '';
        }
      });
      if (isFormFilled) {
        formButton.classList.add('_active');
      } else {
        formButton.classList.remove('_active');
      }
    });
  });
});

const slider = () => {
  const checkSlider = document.querySelector('.advantages__slider ');
  const designerContent = document.querySelector('.advantages__item--designers');
  const influencersContent = document.querySelector('.advantages__item--influencers');
  if (!checkSlider) return;
  checkSlider.addEventListener('click', () => {
    checkSlider.classList.toggle('_active');
    checkSlider.classList.contains('_active') ? showDesigners() : showInfluencers();
  });

  document.addEventListener('click', (e) => {
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

const menuItems = document.querySelectorAll('a[data-goto]');
menuItems.forEach((menuItem) => {
  if (!document.querySelector('.home-page')) {
    menuItem.removeAttribute('data-goto');
  }
});

document.querySelector('#date').textContent = new Date().getFullYear();
